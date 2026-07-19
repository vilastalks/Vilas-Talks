const btn = document.getElementById('talk');
const output = document.getElementById('result');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'mr-IN';

btn.addEventListener('click', () => {
    output.textContent = 'Listening...';
    recognition.start();
});

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    output.textContent = transcript;
};
