var questionnaireData = [
    {
        "options": [
            {
                "id": 1,
                "value": "This is what I want",
                "priority": 1,
                "point": 4,
                "questionId": 1
            },
            {
                "id": 2,
                "value": "This is NOT what I want",
                "priority": 2,
                "point": 10,
                "questionId": 1
            }
        ],

        "id": 1,
        "text": "Do you or any family member have any history of cancer?",
        "questionType": 1,
        "priority": 1,
        "surveyId": 1
    },
    {
        "options": [
            {
                "id": 1,
                "value": "I am twenty years old.",
                "priority": 1,
                "point": 1,
                "questionId": 2
            },
            {
                "id": 2,
                "value": "I am a million years old.",
                "priority": 2,
                "point": 3,
                "questionId": 2
            },
            {
                "id": 3,
                "value": "I am immortal.",
                "priority": 1,
                "point": 11,
                "questionId": 2
            }
        ],

        "id": 2,
        "text": "How old are you?",
        "questionType": 1,
        "priority": 2,
        "surveyId": 1
    },
    {
        "options": [
            {
                "id": 1,
                "value": "To be happy.",
                "priority": 1,
                "point": 13,
                "questionId": 3
            },
            {
                "id": 2,
                "value": "To find a purpose.",
                "priority": 2,
                "point": 7,
                "questionId": 3
            },
            {
                "id": 3,
                "value": "Life is meaningless.",
                "priority": 3,
                "point": 2,
                "questionId": 3
            }
        ],

        "id": 3,
        "text": "What is the meaning of life?",
        "questionType": 1,
        "priority": 3,
        "surveyId": 1
    },
    {
        "options": [
            {
                "id": 1,
                "value": "Milk Chocolate",
                "priority": 1,
                "point": 13,
                "questionId": 4
            },
            {
                "id": 2,
                "value": "60% Dark Chocolate",
                "priority": 2,
                "point": 17,
                "questionId": 4
            },
            {
                "id": 3,
                "value": "Peppermint White Chocolate",
                "priority": 3,
                "point": 22,
                "questionId": 4
            },
            {
                "id": 4,
                "value": "White Chocolate",
                "priority": 4,
                "point": 21,
                "questionId": 4
            }
        ],

        "id": 4,
        "text": "What is your favorite type of chocolate?",
        "questionType": 1,
        "priority": 4,
        "surveyId": 1
    },
    {
        "options": [
            {
                "id": 1,
                "value": "Yes, in fact, I am the coolest person I know!",
                "priority": 1,
                "point": 3,
                "questionId": 5
            },
            {
                "id": 2,
                "value": "Well actually I have somewhat of a low self-esteem and I question my worth on a daily basis, so it is hard for me to say yes.",
                "priority": 2,
                "point": 27,
                "questionId": 5
            }
        ],

        "id": 5,
        "text": "Do you think you are a cool person?",
        "questionType": 1,
        "priority": 5,
        "surveyId": 1
    }
];

function submitQuestion(surveyId) {

    // Access DOM to gather all the data to send in the POST request
    var questionData = 'empty';

    $().something();

    $.post("/api/question", questionData)
        .done(function(data) {
            alert( "Data Loaded: " + data );
        })
        .fail( function(xhr, textStatus, errorThrown) {
                alert(xhr.responseText);
            });
}

function submitAnswer(questionId) {

    var answerData = 'empty';

    $.post("/api/option", answerData)
        .done(function(data) {
            alert( "Data Loaded: " + data );
        })
        .fail( function(xhr, textStatus, errorThrown) {
            alert(xhr.responseText);
        });
}


// This will be used to get a JSON object of all the questions and answers, then populate the questionnaire.
function populateQuestionnaire() {

    // Initialize variables
    //var questionnaireData = new Array();
    var i;

    // Get questionnaire data. Currently commented out because I'm testing with static data (see questionnaireData at top).
    //$.get( "/api/question?$expand=Options", function(data) {
    //    questionnaireData = data;
    //});

    // Clear out questionnaire
    $(".question-pool").empty();

    // Repopulate questionnaire
    for (i = 0; i < questionnaireData.length; i++) {

        // Create the question
        addQuestion(i+1);

    }
}

// Index is the "priority" and "id" of a question, representing its order in the questionnaire and uniquely identifies it
function addQuestion(index) {

    if (!index) {
        index = 1;
    }

    var question = '<li class="question ui-state-default" id="' + index + '"><div class="row nopadding">' + '<div class="col-xs-12 nopadding">' + '<div class="row question-header">' + '<div class="col-xs-2 question-number">' + '<h1>Question #' + index + '</h1>' + '</div>' + '<div class="col-xs-8 question-type">' + '<h1>Type:&nbsp;</h1>' + '<div>' + '<select id="question-type">' + '<option value="single-answer" selected>Single Answer</option>' + '<option value="choose-any">Choose Any</option>' + '<option value="true-false">True or False</option>' + '<option value="yes-no">Yes or No</option>' + '</select>' + '</div>' + '</div>' + '<div class="col-xs-2 question-delete">' + '<button>Delete</button>' + '</div>' + '</div>' + '<div class="row question-body nopadding">' + '<div class="col-xs-12 nopadding">' + '<div class="row question-text nopadding">' + '<div class="col-xs-12 nopadding">' + '<textarea class="expanding" placeholder="Type question here"></textarea>' + '</div>' + '</div>' + '<div class="row question-separator nopadding"></div>' + '</div>' + '</div>' + '<div class="row answer-body nopadding">' + '<div class="col-xs-12 nopadding">' + '<div class="row single-answer nopadding active" id="single-answer">' + '<div class="row answer-text" id="1">' + '<div class="col-xs-9 nopadding">' + '<h1>Answer 1</h1>' + '<textarea class="expanding" placeholder="Type answer here"></textarea>' + '</div>' + '<div class="col-xs-2 answer-weight nopadding">' + '<h1>Weight</h1>' + '<input type="text" placeholder="#" value="0">' + '</div>' + '<div class="col-xs-1 answer-delete nopadding">' + '<i class="fa fa-times-circle-o"></i>' + '</div>' + '</div>' + '<div class="row answer-separator nopadding"></div>' + '<div class="row answer-text" id="2">' + '<div class="col-xs-9 nopadding">' + '<h1>Answer 2</h1>' + '<textarea class="expanding" placeholder="Type answer here"></textarea>' + '</div>' + '<div class="col-xs-2 answer-weight nopadding">' + '<h1>Weight</h1>' + '<input type="text" placeholder="#" value="0">' + '</div>' + '<div class="col-xs-1 answer-delete nopadding">' + '<i class="fa fa-times-circle-o"></i>' + '</div>' + '</div>' + '<div class="row answer-separator nopadding"></div>' + '</div>' + '<div class="row choose-any nopadding" id="choose-any">' + '<div class="row answer-text" id="1">' + '<div class="col-xs-9 nopadding">' + '<h1>Option 1</h1>' + '<textarea class="expanding" placeholder="Type answer here"></textarea>' + '</div>' + '<div class="col-xs-2 answer-weight nopadding">' + '<h1>Weight</h1>' + '<input type="text" placeholder="#" value="0">' + '</div>' + '<div class="col-xs-1 answer-delete nopadding">' + '<i class="fa fa-times-circle-o"></i>' + '</div>' + '</div>' + '<div class="row answer-separator nopadding"></div>' + '<div class="row answer-text" id="2">' + '<div class="col-xs-9 nopadding">' + '<h1>Option 2</h1>' + '<textarea class="expanding" placeholder="Type answer here"></textarea>' + '</div>' + '<div class="col-xs-2 answer-weight nopadding">' + '<h1>Weight</h1>' + '<input type="text" placeholder="#" value="0">' + '</div>' + '<div class="col-xs-1 answer-delete nopadding">' + '<i class="fa fa-times-circle-o"></i>' + '</div>' + '</div>' + '<div class="row answer-separator nopadding"></div>' + '</div>' + '<div class="row yes-no nopadding" id="yes-no">' + '<div class="row answer-text" id="1">' + '<div class="col-xs-9 nopadding">' + '<h1>Answer 1</h1>' + '<textarea class="expanding disable" placeholder="Type answer here">Yes</textarea>' + '</div>' + '<div class="col-xs-2 answer-weight nopadding">' + '<h1>Weight</h1>' + '<input type="text" placeholder="#" value="0">' + '</div>' + '<div class="col-xs-1 answer-delete nopadding"></div>' + '</div>' + '<div class="row answer-separator nopadding"></div>' + '<div class="row answer-text" id="2">' + '<div class="col-xs-9 nopadding">' + '<h1>Answer 2</h1>' + '<textarea class="expanding disable" placeholder="Type answer here">No</textarea>' + '</div>' + '<div class="col-xs-2 answer-weight nopadding">' + '<h1>Weight</h1>' + '<input type="text" placeholder="#" value="0">' + '</div>' + '<div class="col-xs-1 answer-delete nopadding"></div>' + '</div>' + '<div class="row answer-separator nopadding"></div>' + '</div>' + '<div class="row true-false nopadding" id="true-false">' + '<div class="row answer-text" id="1">' + '<div class="col-xs-9 nopadding">' + '<h1>Answer 1</h1>' + '<textarea class="expanding disable" placeholder="Type answer here">True</textarea>' + '</div>' + '<div class="col-xs-2 answer-weight nopadding">' + '<h1>Weight</h1>' + '<input type="text" placeholder="#" value="0">' + '</div>' + '<div class="col-xs-1 answer-delete nopadding"></div>' + '</div>' + '<div class="row answer-separator nopadding"></div>' + '<div class="row answer-text" id="2">' + '<div class="col-xs-9 nopadding">' + '<h1>Answer 2</h1>' + '<textarea class="expanding disable" placeholder="Type answer here">False</textarea>' + '</div>' + '<div class="col-xs-2 answer-weight nopadding">' + '<h1>Weight</h1>' + '<input type="text" placeholder="#" value="0">' + '</div>' + '<div class="col-xs-1 answer-delete nopadding"></div>' + '</div>' + '<div class="row answer-separator nopadding"></div>' + '</div>' + '</div>' + '</div>' + '<div class="row answer-add">' + '<div class="col-xs-12 nopadding">' + '<button>+ Add Answer</button>' + '</div>' + '</div>' + '</div>' + '</div></li>';

    $(".question-pool").append(question);
    $(".questionnaire").find(".question").last().find("textarea").expanding();
    $(".questionnaire").find(".question").last().find(".single-answer").show().addClass("active").siblings().removeClass("active").hide();

}

function addAnswer(question) {
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
                    $('<i/>', {
                        class: 'fa fa-times-circle-o'
                    })
                )
            );

        var separator =
            $('<div/>', {
                class: 'row answer-separator nopadding'
            });

        $(question).find(".answer-body").find(".active").append(answer).append(separator);
        $(question).find(".answer-body").find(".active").find("textarea").last().expanding();
    });
}
