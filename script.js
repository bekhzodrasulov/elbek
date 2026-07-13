function openInvite() {
    let env = document.getElementById('envelopeEl');
    env.classList.add('open');
    setTimeout(function () {
        document.getElementById('gate').classList.add('hidden');
        document.getElementById('invite').classList.add('shown');
        document.body.style.overflow = 'auto';
    }, 1000);
}
document.body.style.overflow = 'hidden';

/* countdown */
let target = new Date('2026-07-26T15:30:00');
function tick() {
    let now = new Date();
    let diff = target - now;
    if (diff < 0) diff = 0;
    let d = Math.floor(diff / 86400000);
    let h = Math.floor(diff % 86400000 / 3600000);
    let m = Math.floor(diff % 3600000 / 60000);
    let s = Math.floor(diff % 60000 / 1000);
    document.getElementById('cd-days').textContent = d;
    document.getElementById('cd-hours').textContent = String(h).padStart(2, '0');
    document.getElementById('cd-min').textContent = String(m).padStart(2, '0');
    document.getElementById('cd-sec').textContent = String(s).padStart(2, '0');
}
tick();
setInterval(tick, 1000);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".animate").forEach((el) => {
    observer.observe(el);
});