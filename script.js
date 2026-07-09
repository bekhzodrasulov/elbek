function openInvite() {
    var env = document.getElementById('envelopeEl');
    env.classList.add('open');
    setTimeout(function () {
        document.getElementById('gate').classList.add('hidden');
        document.getElementById('invite').classList.add('shown');
        document.body.style.overflow = 'auto';
    }, 650);
}
document.body.style.overflow = 'hidden';

/* countdown */
var target = new Date('2026-06-26T15:30:00');
function tick() {
    var now = new Date();
    var diff = target - now;
    if (diff < 0) diff = 0;
    var d = Math.floor(diff / 86400000);
    var h = Math.floor(diff % 86400000 / 3600000);
    var m = Math.floor(diff % 3600000 / 60000);
    var s = Math.floor(diff % 60000 / 1000);
    document.getElementById('cd-days').textContent = d;
    document.getElementById('cd-hours').textContent = String(h).padStart(2, '0');
    document.getElementById('cd-min').textContent = String(m).padStart(2, '0');
    document.getElementById('cd-sec').textContent = String(s).padStart(2, '0');
}
tick();
setInterval(tick, 1000);

/* RSVP -> mailto */
document.getElementById('rsvpForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var attend = document.querySelector('input[name=attend]:checked').value;
    var allergies = document.getElementById('allergies').value || 'нет';
    var wine = Array.from(document.querySelectorAll('.check-grid input:checked')).map(function (c) { return c.value; }).join(', ') || 'не указано';
    var wish = document.getElementById('wish').value || '';
    var body = 'Имя: ' + name + '%0AПрисутствие: ' + attend + '%0AАллергии: ' + allergies + '%0AНапитки: ' + wine + '%0AПожелание: ' + wish;
    var mailto = 'mailto:youremail@example.com?subject=' + encodeURIComponent('Анкета гостя — ' + name) + '&body=' + body;
    window.location.href = mailto;
    var msg = document.getElementById('rsvpMsg');
    msg.style.display = 'block';
    msg.textContent = 'Спасибо! Откроется почтовое приложение для отправки анкеты.';
});