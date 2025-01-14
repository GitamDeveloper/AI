
var ai_question_mode = "answer"
var ai_question_edit_text = ""

function fire_ai_radio_1(){
    ai_question_mode = "answer"
    ai_question_edit_text = ""
    console.log("changed to answer")
}

function fire_ai_radio_2(){
    ai_question_mode = "edit"
    ai_question_edit_text = ""
    console.log("changed to edit")
}

function fire_ai_question(){

    if (ai_question_mode == "answer") {
        var text_input = document.getElementById('text_input').value;
       
        var output = document.getElementById('output');


        var beh = "normal"
        var max_words = 10

        if (text_input != "") {

            var question = "Generate answer to text: '" + text_input + " ', your role is 'person who answering small text', your behavior is " + beh + ", u cant use more than " + max_words + " words for this answer, you need to use the least amount of words, the answer should contain only the main meaning"

            fetch("https://text.pollinations.ai/" + question, {
                method: 'GET',
            }).then( response => response.text().then(
                data => {
                    console.log(data)
                    output.innerHTML = data
                }
            ))
        }
    }

    if (ai_question_mode == "edit") {
        if (ai_question_edit_text == "") {
            var text_input = document.getElementById('text_input').value;
            var output = document.getElementById('output');
            ai_question_edit_text = text_input
            output.innerHTML = "How to edit?"
        }else{
            var text_input = document.getElementById('text_input').value;
            var output = document.getElementById('output');

            var beh = "normal"
            var max_words = 10

            var question = text_input + " in this text: '" + ai_question_edit_text + "' and answer only this text and nothing more, your role is ai robot"
            ai_question_edit_text = ""

            fetch("https://text.pollinations.ai/" + question, {
                method: 'GET',
            }).then( response => response.text().then(
                data => {
                    console.log(data)
                    output.innerHTML = data
                }
            ))
        }
    }
}
