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



var first =
    '<li id="' + '1' + '" class="question ui-state-default">' +
    '<div class="row nopadding">' +
    '<div class="col-xs-12 nopadding">' +
    '<!-- Question/Answer Header-->' +
    '<div class="row question-header">' +
    '<div class="col-xs-2 question-number">' +
    '<h1>Question #1</h1>' +
    '</div>' +
    '<div class="col-xs-8 question-type">' +
    '<h1>Type:&nbsp;</h1>' +
    '<div>' +
    '<select id="question-type">' +
    '<option value="single-answer" selected>Single Answer</option>' +
    '<option value="choose-any">Choose Any</option>' +
    '<option value="true-false">True or False</option>' +
    '<option value="yes-no">Yes or No</option>' +
    '</select>' +
    '</div>' +
    '</div>' +
    '<div class="col-xs-2 question-delete">' +
    '<button>Delete</button>' +
    '</div>' +
    '</div>' +
    '<!-- Question/Answer Section-->' +
    '<div class="row question-body nopadding">' +
    '<div class="col-xs-12 nopadding">' +
    '<!-- Question Input-->' +
    '<div class="row question-text nopadding">' +
    '<div class="col-xs-12 nopadding">' +
    '<textarea placeholder="Type question here" class="expanding"></textarea>' +
    '</div>' +
    '</div>' +
    '<div class="row question-separator nopadding"></div>' +
    '</div>' +
    '</div>' +
    '<div class="row answer-body nopadding">' +
    '<div class="col-xs-12 nopadding">' +
    '<!-- Single Answer-->' +
    '<div id="single-answer" class="row single-answer nopadding active">';


var second =
    '</div>' +
    '<!-- Choose Any-->' +
    '<div id="choose-any" class="row choose-any nopadding">' +
    '<!-- Answer 1-->' +
    '<div id="1" class="row answer-text">' +
    '<div class="col-xs-9 nopadding">' +
    '<h1>Option 1</h1>' +
    '<textarea placeholder="Type answer here" class="expanding"></textarea>' +
    '</div>' +
    '<div class="col-xs-2 answer-weight nopadding">' +
    '<h1>Weight</h1>' +
    '<input type="text" placeholder="#" value="0">' +
    '</div>' +
    '<div class="col-xs-1 answer-delete nopadding"><img src="assets/button-delete.png"></div>' +
    '</div>' +
    '<div class="row answer-separator nopadding"></div>' +
    '<!-- Answer 2-->' +
    '<div id="2" class="row answer-text">' +
    '<div class="col-xs-9 nopadding">' +
    '<h1>Option 2</h1>' +
    '<textarea placeholder="Type answer here" class="expanding"></textarea>' +
    '</div>' +
    '<div class="col-xs-2 answer-weight nopadding">' +
    '<h1>Weight</h1>' +
    '<input type="text" placeholder="#" value="0">' +
    '</div>' +
    '<div class="col-xs-1 answer-delete nopadding"><img src="assets/button-delete.png"></div>' +
    '</div>' +
    '<div class="row answer-separator nopadding"></div>' +
    '</div>' +
    '<!-- Yes or No-->' +
    '<div id="yes-no" class="row yes-no nopadding">' +
    '<div id="1" class="row answer-text">' +
    '<div class="col-xs-9 nopadding">' +
    '<h1>Answer 1</h1>' +
    '<textarea placeholder="Type answer here" class="expanding disable">Yes</textarea>' +
    '</div>' +
    '<div class="col-xs-2 answer-weight nopadding">' +
    '<h1>Weight</h1>' +
    '<input type="text" placeholder="#" value="0">' +
    '</div>' +
    '<div class="col-xs-1 answer-delete nopadding"></div>' +
    '</div>' +
    '<div class="row answer-separator nopadding"></div>' +
    '<div id="1" class="row answer-text">' +
    '<div class="col-xs-9 nopadding">' +
    '<h1>Answer 2</h1>' +
    '<textarea placeholder="Type answer here" class="expanding disable">No</textarea>' +
    '</div>' +
    '<div class="col-xs-2 answer-weight nopadding">' +
    '<h1>Weight</h1>' +
    '<input type="text" placeholder="#" value="0">' +
    '</div>' +
    '<div class="col-xs-1 answer-delete nopadding"></div>' +
    '</div>' +
    '<div class="row answer-separator nopadding"></div>' +
    '</div>' +
    '<!-- True or False-->' +
    '<div id="true-false" class="row true-false nopadding">' +
    '<div id="1" class="row answer-text">' +
    '<div class="col-xs-9 nopadding">' +
    '<h1>Answer 1</h1>' +
    '<textarea placeholder="Type answer here" class="expanding disable">True</textarea>' +
    '</div>' +
    '<div class="col-xs-2 answer-weight nopadding">' +
    '<h1>Weight</h1>' +
    '<input type="text" placeholder="#" value="0">' +
    '</div>' +
    '<div class="col-xs-1 answer-delete nopadding"></div>' +
    '</div>' +
    '<div class="row answer-separator nopadding"></div>' +
    '<div id="1" class="row answer-text">' +
    '<div class="col-xs-9 nopadding">' +
    '<h1>Answer 2</h1>' +
    '<textarea placeholder="Type answer here" class="expanding disable">False</textarea>' +
    '</div>' +
    '<div class="col-xs-2 answer-weight nopadding">' +
    '<h1>Weight</h1>' +
    '<input type="text" placeholder="#" value="0">' +
    '</div>' +
    '<div class="col-xs-1 answer-delete nopadding"></div>' +
    '</div>' +
    '<div class="row answer-separator nopadding"></div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<!-- Add Answer Section-->' +
    '<div class="row answer-add">' +
    '<div class="col-xs-12 nopadding">' +
    '<button>+ Add Answer</button>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</li>';
