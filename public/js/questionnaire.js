$(document).ready(function() {

    $( "#sortable" ).sortable({
        placeholder: "sortable-placeholder",
        tolerance: "pointer",
        connectWith: ".connectedSortable",
        update : function () {
            var order1 = $('#sortable').sortable('toArray').toString();
            //alert("Order 1:"+order1);
            reindexQuestionList();



        },
        start: function(event, ui){
            $(ui.item).height(20);
        }
    }).disableSelection();

    function reindexQuestionList() {

        $(".question-pool").find("li").each(function(i, val) {
            var index = i + 1;
            $(val).attr("id", index);
            $(val).find(".question-number > h1").text("Question #" + index);
        });
    }


    $.expanding.initialSelector = "textarea";

    // By default, show multiple-choice and hide the rest.
    $(".single-answer").show().addClass("active").siblings().removeClass("active").hide();

    // Select onchange
    $(".question-pool").on("change", "#question-type", function() {
        var id = $(this).val();
        $(this).parents(".question").find("." + id).show().addClass("active").siblings().removeClass("active").hide();

        // If yes-no or true-false, don't allow to add answers
        if (id == "yes-no" || id == "true-false") {
            $(this).parents(".question").find(".answer-add").hide();
        }
        else {
            $(this).parents(".question").find(".answer-add").show();
        }
    });

    // Add answer option to corresponding question
    $(".question-pool").on("click", ".answer-add button", function() {
        var type = $(this).parents(".question").find(".answer-body").find(".active").attr("id");
        var index = parseInt($(this).parents(".question").find(".answer-body").find(".active").find(".answer-text").last().attr("id")) + 1;
        if (!index) {
            index = 1;
        }
        var header = type + index;
        if (type == "single-answer") {
            header = "Answer " + index;
        }
        else if (type == "choose-any") {
            header = "Option " + index;
        }
        else {
            header = "ERROR";
        }

        var answer =
            $('<div/>', {
                class: 'row answer-text',
                id: index
            })
            .append(
                $('<div/>', {
                    class: 'col-xs-9 nopadding'
                })
                .append(
                    $('<h1/>', {
                        text: header
                    })
                )
                .append(
                    $('<textarea/>', {
                        class: 'expanding',
                        placeholder: 'Type answer here'
                    })
                )
            )
            .append(
                $('<div/>', {
                    class: 'col-xs-2 answer-weight nopadding'
                })
                .append(
                    $('<h1/>', {
                        text: 'Weight'
                    })
                )
                .append(
                    $('<input/>', {
                        type: 'text',
                        placeholder: '#',
                        value: '0'
                    })
                )
            )
            .append(
                $('<div/>', {
                    class: 'col-xs-1 answer-delete nopadding'
                })
                .append(
                    $('<img/>', {
                        src: 'assets/button-delete.png'
                    })
                )
            );

            var separator =
                $('<div/>', {
                    class: 'row answer-separator nopadding'
                });

        $(this).parents(".question").find(".answer-body").find(".active").append(answer).append(separator);
        $(this).parents(".question").find(".answer-body").find(".active").find("textarea").last().expanding();
    });

    //Delete answer and reindex answer list
    $(".question-pool").on("click", ".answer-delete img", function() {

        var type = $(this).parents(".question").find(".answer-body").find(".active").attr("id");
        var header = "0";

        $(this).parents(".answer-text").siblings(".answer-text").each(function(i, val) {
            var index = i + 1;
            $(val).attr("id", index);
            if (type == "single-answer") {
                header = "Answer " + index;
            }
            else if (type == "choose-any") {
                header = "Option " + index;
            }
            else {
                header = "ERROR";
            }
            $(val).find("h1").eq(0).text(header);
        });

        $(this).parents(".answer-text").next(".answer-separator").remove();
        $(this).parents(".answer-text").remove();

    });


    // Add question to question pool
    $(".question-add button").on("click", function() {

        var index = parseInt($(this).parents(".questionnaire").find(".question").last().attr("id")) + 1;
        if (!index) {
            index = 1;
        }

        var question = '<li class="question ui-state-default" id="' + index + '"><div class="row nopadding">' + '<div class="col-xs-12 nopadding">' + '<div class="row question-header">' + '<div class="col-xs-2 question-number">' + '<h1>Question #' + index + '</h1>' + '</div>' + '<div class="col-xs-8 question-type">' + '<h1>Type:&nbsp;</h1>' + '<div>' + '<select id="question-type">' + '<option value="single-answer" selected>Single Answer</option>' + '<option value="choose-any">Choose Any</option>' + '<option value="true-false">True or False</option>' + '<option value="yes-no">Yes or No</option>' + '</select>' + '</div>' + '</div>' + '<div class="col-xs-2 question-delete">' + '<button>Delete</button>' + '</div>' + '</div>' + '<div class="row question-body nopadding">' + '<div class="col-xs-12 nopadding">' + '<div class="row question-text nopadding">' + '<div class="col-xs-12 nopadding">' + '<textarea class="expanding" placeholder="Type question here"></textarea>' + '</div>' + '</div>' + '<div class="row question-separator nopadding"></div>' + '</div>' + '</div>' + '<div class="row answer-body nopadding">' + '<div class="col-xs-12 nopadding">' + '<div class="row single-answer nopadding active" id="single-answer">' + '<div class="row answer-text" id="1">' + '<div class="col-xs-9 nopadding">' + '<h1>Answer 1</h1>' + '<textarea class="expanding" placeholder="Type answer here"></textarea>' + '</div>' + '<div class="col-xs-2 answer-weight nopadding">' + '<h1>Weight</h1>' + '<input type="text" placeholder="#" value="0">' + '</div>' + '<div class="col-xs-1 answer-delete nopadding">' + '<i class="fa fa-times-circle-o"></i>' + '</div>' + '</div>' + '<div class="row answer-separator nopadding"></div>' + '<div class="row answer-text" id="2">' + '<div class="col-xs-9 nopadding">' + '<h1>Answer 2</h1>' + '<textarea class="expanding" placeholder="Type answer here"></textarea>' + '</div>' + '<div class="col-xs-2 answer-weight nopadding">' + '<h1>Weight</h1>' + '<input type="text" placeholder="#" value="0">' + '</div>' + '<div class="col-xs-1 answer-delete nopadding">' + '<i class="fa fa-times-circle-o"></i>' + '</div>' + '</div>' + '<div class="row answer-separator nopadding"></div>' + '</div>' + '<div class="row choose-any nopadding" id="choose-any">' + '<div class="row answer-text" id="1">' + '<div class="col-xs-9 nopadding">' + '<h1>Option 1</h1>' + '<textarea class="expanding" placeholder="Type answer here"></textarea>' + '</div>' + '<div class="col-xs-2 answer-weight nopadding">' + '<h1>Weight</h1>' + '<input type="text" placeholder="#" value="0">' + '</div>' + '<div class="col-xs-1 answer-delete nopadding">' + '<i class="fa fa-times-circle-o"></i>' + '</div>' + '</div>' + '<div class="row answer-separator nopadding"></div>' + '<div class="row answer-text" id="2">' + '<div class="col-xs-9 nopadding">' + '<h1>Option 2</h1>' + '<textarea class="expanding" placeholder="Type answer here"></textarea>' + '</div>' + '<div class="col-xs-2 answer-weight nopadding">' + '<h1>Weight</h1>' + '<input type="text" placeholder="#" value="0">' + '</div>' + '<div class="col-xs-1 answer-delete nopadding">' + '<i class="fa fa-times-circle-o"></i>' + '</div>' + '</div>' + '<div class="row answer-separator nopadding"></div>' + '</div>' + '<div class="row yes-no nopadding" id="yes-no">' + '<div class="row answer-text" id="1">' + '<div class="col-xs-9 nopadding">' + '<h1>Answer 1</h1>' + '<textarea class="expanding disable" placeholder="Type answer here">Yes</textarea>' + '</div>' + '<div class="col-xs-2 answer-weight nopadding">' + '<h1>Weight</h1>' + '<input type="text" placeholder="#" value="0">' + '</div>' + '<div class="col-xs-1 answer-delete nopadding"></div>' + '</div>' + '<div class="row answer-separator nopadding"></div>' + '<div class="row answer-text" id="2">' + '<div class="col-xs-9 nopadding">' + '<h1>Answer 2</h1>' + '<textarea class="expanding disable" placeholder="Type answer here">No</textarea>' + '</div>' + '<div class="col-xs-2 answer-weight nopadding">' + '<h1>Weight</h1>' + '<input type="text" placeholder="#" value="0">' + '</div>' + '<div class="col-xs-1 answer-delete nopadding"></div>' + '</div>' + '<div class="row answer-separator nopadding"></div>' + '</div>' + '<div class="row true-false nopadding" id="true-false">' + '<div class="row answer-text" id="1">' + '<div class="col-xs-9 nopadding">' + '<h1>Answer 1</h1>' + '<textarea class="expanding disable" placeholder="Type answer here">True</textarea>' + '</div>' + '<div class="col-xs-2 answer-weight nopadding">' + '<h1>Weight</h1>' + '<input type="text" placeholder="#" value="0">' + '</div>' + '<div class="col-xs-1 answer-delete nopadding"></div>' + '</div>' + '<div class="row answer-separator nopadding"></div>' + '<div class="row answer-text" id="2">' + '<div class="col-xs-9 nopadding">' + '<h1>Answer 2</h1>' + '<textarea class="expanding disable" placeholder="Type answer here">False</textarea>' + '</div>' + '<div class="col-xs-2 answer-weight nopadding">' + '<h1>Weight</h1>' + '<input type="text" placeholder="#" value="0">' + '</div>' + '<div class="col-xs-1 answer-delete nopadding"></div>' + '</div>' + '<div class="row answer-separator nopadding"></div>' + '</div>' + '</div>' + '</div>' + '<div class="row answer-add">' + '<div class="col-xs-12 nopadding">' + '<button>+ Add Answer</button>' + '</div>' + '</div>' + '</div>' + '</div></li>';

        $(this).parents(".questionnaire").find(".question-pool").append(question);
        $(this).parents(".questionnaire").find(".question").last().find("textarea").expanding();
        $(this).parents(".questionnaire").find(".question").last().find(".single-answer").show().addClass("active").siblings().removeClass("active").hide();

    });

    //Delete question to question pool and reindex
    $(".question-pool").on("click", ".question-delete button", function() {
        
        $(this).parents(".question").siblings(".question").each(function(i, val) {
            var index = i + 1;
            $(val).attr("id", index);
            $(val).find("h1").eq(0).text("Question #" + index);
        });

        $(this).parents(".question").remove();
    });






    // Weight validation and update
    $(".question-pool").on("keyup", ".answer-weight input", function() {
        var containsAlphabet = 0;
        try {
            containsAlphabet = $(this).val().match(/[a-z]/i).length;
        } catch (e) {}

        if(containsAlphabet > 0) {
            $(this).addClass("invalid-input");
        }
        else {
            $(this).removeClass("invalid-input");
        }     
    });


    // Slide toggle
    $(".fa-angle-up").on("click", function() {
        $(this).parent().parent().children('div').eq(1).slideUp(400);
        $(this).hide().siblings('.fa-angle-down').show();
    });
    $('.fa-angle-down').on('click', function() {
        $(this).parent().parent().children('div').eq(1).slideDown(400);
        $(this).hide().siblings('.fa-angle-up').show();
    });
});