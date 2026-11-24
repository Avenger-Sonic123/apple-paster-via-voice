# Voice Command Apple Canvas

A browser experiment that converts spoken numbers into drawings of apples.

**Repository created:** 2022-07-27  
**Project status:** Learning project / historical snapshot  
**Earliest recorded commit (author date):** 2022-07-26

## Features and implementation

- Web Speech recognition.
- Integer conversion.
- Random canvas coordinates.
- P5.js image drawing.
- Speech synthesis feedback.

## Technologies

HTML, CSS, JavaScript, Bootstrap, jQuery, p5.js, Web Speech API.

## How the code works

`start()` begins speech recognition, `draw()` renders the requested apple images, and `speak()` provides spoken feedback.

## Project structure

| File | Purpose |
| --- | --- |
| [`index.html`](index.html) | Main page and user interface |
| [`main.js`](main.js) | Project-specific JavaScript |
| [`style.css`](style.css) | Page styling |

Key functions in the source:
- `main.js`: `start()`, `speak()`.

## Run or explore locally

```bash
git clone https://github.com/Avenger-Sonic123/apple-paster-via-voice.git
cd apple-paster-via-voice
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in your browser. The local server requires Python 3; browser-based dependencies may also require internet access.

Click the voice control, allow microphone access and say a small whole number.

## Current status and limitations

Requires a browser supporting `webkitSpeechRecognition`; no input bounds are enforced and speech recognition may misinterpret numbers.

---

Source reference: [`4ae6c98d`](https://github.com/Avenger-Sonic123/apple-paster-via-voice/tree/4ae6c98d3cf9bd86dd527bcdd215add13fb83590) on `main`, verified against GitHub on 2026-11-24. Documentation is based on static source review; runtime behavior has not been tested.
