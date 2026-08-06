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
if (navEl) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            navEl.style.boxShadow = '8px 8px 18px #d5dce5, -8px -8px 18px #ffffff';
        } else {
            navEl.style.boxShadow = '6px 6px 14px #d5dce5, -6px -6px 14px #ffffff';
        }
    }, { passive: true });
}

/* ─── SHAPE GRID REMOVED ─── */
