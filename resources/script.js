'use strict';


/* ─── INTERSECTION OBSERVER — FADE IN ─── */
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -60px 0px' };

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up, .stagger-children').forEach(el => {
    fadeObserver.observe(el);
});

/* ─── LIVE CLOCK — IST ─── */
function updateClock() {
    const now = new Date();
    const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    document.getElementById('liveClock').textContent = now.toLocaleTimeString('en-IN', options);
}
updateClock();
setInterval(updateClock, 1000);

/* ─── COPY EMAIL ─── */
window.copyEmail = function (e) {
    const email = 'sujalsutar08@gmail.com';
    const toast = document.getElementById('copiedToast');

    if (navigator.clipboard && navigator.clipboard.writeText) {
        e.preventDefault();
        navigator.clipboard.writeText(email).then(() => {
            showToast(toast);
        }).catch(() => { /* allow mailto fallback */ });
    } else {
        e.preventDefault();
        const el = document.createElement('textarea');
        el.value = email;
        el.style.cssText = 'position:fixed;opacity:0;';
        document.body.appendChild(el);
        el.select();
        try {
            document.execCommand('copy');
            showToast(toast);
        } catch (err) {
            window.location.href = 'mailto:' + email;
        }
        document.body.removeChild(el);
    }
}

function showToast(toast) {
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2800);
}

/* ─── NAV SCROLL ─── */
const navEl = document.querySelector('nav');
window.addEventListener('scroll', () => {
    navEl.style.borderBottomColor = window.scrollY > 60
        ? 'rgba(255,255,255,0.10)'
        : 'rgba(255,255,255,0.05)';
}, { passive: true });

/* ─── SHAPE GRID REMOVED ─── */