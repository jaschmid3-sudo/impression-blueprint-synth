// Initialize Web Audio Context
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;

// Ensure DOM is fully loaded before attaching listeners
document.addEventListener('DOMContentLoaded', () => {
  const playBtn = document.getElementById('playBtn');
  const stopBtn = document.getElementById('stopBtn');

  if (!playBtn) {
    console.error("Play button not found! Check element ID.");
    return;
  }

  playBtn.addEventListener('click', async () => {
    // 1. Create context on user gesture if it doesn't exist
    if (!audioCtx) {
      audioCtx = new AudioContext();
    }

    // 2. Resume suspended context (Required by browser autoplay policies)
    if (audioCtx.state === 'suspended') {
      await audioCtx.resume();
    }

    // 3. Trigger audio synthesis engine
    startAudioEngine(audioCtx);
  });

  if (stopBtn) {
    stopBtn.addEventListener('click', () => {
      if (audioCtx && audioCtx.state === 'running') {
        audioCtx.suspend();
      }
    });
  }
});

function startAudioEngine(ctx) {
  // Your synthesized Bo Diddley rhythm & funk bassline logic goes here
  console.log("Audio Engine Running. State:", ctx.state);
}
