// ==============================================
// 1. تأثير كتابة الاسم وإظهار زر المفاجأة
// ==============================================
const textElement = document.getElementById('typing-text');
const textToType = "Happy Birthday Maryam";
let index = 0;

function typeWriter() {
    if (index < textToType.length) {
        textElement.innerHTML += textToType.charAt(index);
        index++;
        setTimeout(typeWriter, 140);
    } else {
        textElement.style.borderRight = "none";
        // إظهار الزرار بعد ما الاسم يخلص
        document.getElementById('surprise-btn').style.display = 'block';
    }
}

// يبدأ الكتابة مع نزول الشمعة وظهور النار
setTimeout(typeWriter, 6500);

// ==============================================
// 2. التحكم في كارت الخاتم
// ==============================================
const surpriseBtn = document.getElementById('surprise-btn');
const modal = document.getElementById('ring-modal');
const closeBtn = document.querySelector('.close-btn');

surpriseBtn.onclick = function () {
    modal.style.display = 'flex';

    // تشغيل الأغنية لما الزرار يتضغط
    const song = document.getElementById('birthday-song');
    if (song) {
        song.play();
    }
}

closeBtn.onclick = function () {
    modal.style.display = 'none';
}

// إغلاق الكارت لو داس في أي حتة بره الصندوق
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// ==============================================
// 3. الدواير المتساقطة
// ==============================================
function createConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = [
        'rgba(255, 255, 255, 0.8)',
        'rgba(255, 182, 193, 0.8)',
        'rgba(255, 105, 180, 0.5)',
        'rgba(255, 255, 255, 0.4)'
    ];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 4 + 5 + 's';
        confetti.style.animationDelay = Math.random() * 5 + 's';

        const size = Math.random() * 10 + 6;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];

        container.appendChild(confetti);
    }
}

createConfetti();