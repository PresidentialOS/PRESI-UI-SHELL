// ...existing code
const rec = window.SpeechRecognition ? new window.SpeechRecognition() : null;
function startListening() {
  if (!rec) return;
  rec.start();
  rec.onresult = event => {
    const command = event.results[0][0].transcript;
    // Parse command and trigger app actions
    alert("You said: " + command);
  };
}