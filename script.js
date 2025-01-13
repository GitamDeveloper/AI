
function fire_ai_question(){
 
    var text_input = document.getElementById('text_input').value;

    var output = document.getElementById('title');
    var output = document.getElementById('output');

    var beh = "normal"
    var max_words = 10

    if (text_input != "") {

        var question = "Generate answer to text: '" + text_input + " ', your role is 'person who answering small text', your behavior is " + beh + ", u cant use more than " + max_words + " words for this answer, you need to use the least amount of words, the answer should contain only the main meaning"

        fetch("https://text.pollinations.ai/" + text_input, {
            method: 'GET',
        }).then( response => response.text().then(
            data => {
                console.log(data)
                output.innerHTML = data
            }
        ))
    }
}
