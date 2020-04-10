window.onload = function () {
    document.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            e.preventDefault();
            const input = document.getElementById('input').value;
            const clean = input.replace(/\s+/g, ' ');
            const words = clean.split(" ");
            const beep = new Audio('audio/beep.wav');
            const boop = new Audio('audio/boop.wav');
            const beepBeep = new Audio('audio/beep-beep.wav');
            const boopBoop = new Audio('audio/boop-boop.wav');
            let output = '';
            let audioArr = [];

            document.getElementById('input').value = '';
            for (let i = 0; i < words.length; i++) {
                if (words[i].length < 4) {
                    output += 'boop ';
                    audioArr.push(boop);
                } else if (words[i].length < 6) {
                    output += 'beep ';
                    audioArr.push(beep);
                } else if (words[i].length < 10) {
                    output += 'BOOP ';
                    audioArr.push(boopBoop);
                } else {
                    output += 'BEEP ';
                    audioArr.push(beepBeep);
                }
            }

            document.getElementById('output').value = output;
            var play = setInterval(playAudio, 150);
            let i = 0;

            function playAudio() {
                if (i < audioArr.length) {
                    audioArr[i].currentTime = 0;
                    audioArr[i].play();
                    i++;
                } else {
                    clearInterval(play);
                }
            }
        }
    });
    document.addEventListener('keyup', function (e) {
        if (e.key == 'Escape') {
            document.getElementById('input').value = '';
        }
    });
}
