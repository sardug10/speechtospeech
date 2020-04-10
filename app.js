const btn = document.querySelector('.talk')
const content = document.querySelector('.content')

const greetings = ['I am good, get away from me',
                    'doing good homie',
                'leave me alone'];

const weather = ['weather is fine you just cant get out'];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const Recognition = new SpeechRecognition();

Recognition.onstart = function () {
    console.log("Voice is activated, you can talk with microphone");
};

Recognition.onresult = function(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};


btn.addEventListener('click', () => {
    Recognition.start();
})


function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'I dont know what are you talking about, shut up';

    if(message.includes('how are you')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    if(message.includes('weather')) {
        const finalText = weather[0];
        speech.text = finalText
    }

    if(message.includes('dark mode')){
        speech.text = "dark mode activated"
        document.body.style.backgroundColor = "black"
        
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    
    

    window.speechSynthesis.speak(speech);
}