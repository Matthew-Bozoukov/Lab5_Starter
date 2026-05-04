window.addEventListener("DOMContentLoaded", init);

function init() {
  const faceImage = document.querySelector("#explore img");
  const textArea = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");
  const talkButton = document.querySelector("#explore button");

  const smilingFace = "assets/images/smiling.png";

  
  const openMouthFace = "assets/images/smiling-open.png";

  let voices = [];

  function loadVoices() {
    voices = window.speechSynthesis.getVoices();

    voiceSelect.innerHTML = "";

    const defaultOption = document.createElement("option");
    defaultOption.value = "select";
    defaultOption.textContent = "Select Voice:";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    voiceSelect.appendChild(defaultOption);

    voices.forEach((voice, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  loadVoices();

  window.speechSynthesis.addEventListener("voiceschanged", loadVoices);

  talkButton.addEventListener("click", function () {
    const text = textArea.value;

    if (text.trim() === "") {
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    if (voiceSelect.value !== "select") {
      utterance.voice = voices[Number(voiceSelect.value)];
    }

    utterance.onstart = function () {
      faceImage.src = openMouthFace;
      faceImage.alt = "Open mouth face";
    };

    utterance.onend = function () {
      faceImage.src = smilingFace;
      faceImage.alt = "Smiling face";
    };

    utterance.onerror = function () {
      faceImage.src = smilingFace;
      faceImage.alt = "Smiling face";
    };

    window.speechSynthesis.speak(utterance);
  });
}