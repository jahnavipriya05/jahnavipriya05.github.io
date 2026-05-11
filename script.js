// /* ——— NAVBAR: add .scrolled class on scroll ——— */
// const navbar = document.getElementById('navbar');
// window.addEventListener('scroll', () => {
//   navbar.classList.toggle('scrolled', window.scrollY > 40);
// });

// /* ——— HAMBURGER MENU (mobile) ——— */
// const hamburger = document.getElementById('hamburger');
// const navLinks  = document.getElementById('navLinks');

// hamburger.addEventListener('click', () => {
//   hamburger.classList.toggle('active');
//   navLinks.classList.toggle('open');
// });

// // Close menu when a link is clicked
// navLinks.querySelectorAll('a').forEach(link => {
//   link.addEventListener('click', () => {
//     hamburger.classList.remove('active');
//     navLinks.classList.remove('open');
//   });
// });

// /* ——— SCROLL REVEAL ——— */
// const revealObserver = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry, i) => {
//       if (entry.isIntersecting) {
//         // Stagger delay for sibling items
//         const siblings = entry.target.parentElement?.querySelectorAll('.reveal');
//         let delay = 0;
//         if (siblings) {
//           siblings.forEach((el, idx) => {
//             if (el === entry.target) delay = idx * 80;
//           });
//         }
//         setTimeout(() => {
//           entry.target.classList.add('visible');
//         }, delay);
//         revealObserver.unobserve(entry.target);
//       }
//     });
//   },
//   { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
// );

// document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// /* ——— ACTIVE NAV LINK on scroll ——— */
// const sections = document.querySelectorAll('section[id]');
// const navAnchors = document.querySelectorAll('.nav-links a');

// const sectionObserver = new IntersectionObserver(
//   (entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         navAnchors.forEach(a => a.classList.remove('active'));
//         const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
//         if (active) active.classList.add('active');
//       }
//     });
//   },
//   { threshold: 0.45 }
// );

// sections.forEach(sec => sectionObserver.observe(sec));

// /* ——— CONTACT FORM (simple demo handler) ——— */
// // const contactForm = document.getElementById('contactForm');
// // const formNote    = document.getElementById('formNote');

// // if (contactForm) {
// //   contactForm.addEventListener('submit', (e) => {
// //     e.preventDefault();
// //     const btn = contactForm.querySelector('button[type="submit"]');
// //     btn.textContent = 'Sending…';
// //     btn.disabled = true;

// //     // Simulate async send (replace with a real service like EmailJS / Formspree)
// //     setTimeout(() => {
// //       formNote.textContent = '✅ Message sent! I\'ll get back to you soon.';
// //       contactForm.reset();
// //       btn.textContent = 'Send Message →';
// //       btn.disabled = false;
// //       setTimeout(() => { formNote.textContent = ''; }, 5000);
// //     }, 1200);
// //   });
// // }

// // ================= EMAILJS CONTACT FORM =================

// // Initialize EmailJS
// emailjs.init('pVorqfujg5EBlH_EW');

// // Form Elements
// const contactForm = document.getElementById('contactForm');
// const submitBtn = document.getElementById('submitBtn');
// const formMessage = document.getElementById('formMessage');

// // Submit Form
// contactForm.addEventListener('submit', function (e) {

// e.preventDefault();

// // Button Loading State
// submitBtn.disabled = true;
// submitBtn.innerText = 'Sending...';

// // Template Parameters
// const templateParams = {
// from_name: document.getElementById('name').value,
// from_email: document.getElementById('email').value,
// message: document.getElementById('message').value,
// };

// // Send Email
// emailjs.send(
// 'service_k3i51mf',
// 'template_98y9o3m',
// templateParams
// )

// .then(() => {

// ```
// formMessage.innerText = '✅ Message sent successfully!';
// formMessage.style.color = '#6ee7ff';

// // Reset Form
// contactForm.reset();

// // Restore Button
// submitBtn.disabled = false;
// submitBtn.innerText = 'Send Message';
// ```

// })

// .catch((error) => {

// ```
// console.error('EmailJS Error:', error);

// formMessage.innerText = '❌ Failed to send message.';
// formMessage.style.color = '#ff77c8';


// submitBtn.disabled = false;
// submitBtn.innerText = 'Send Message';
// ```

// });

// });


// /* ——— SMOOTH cursor glow effect on project cards ——— */
// document.querySelectorAll('.project-card:not(.project-card-placeholder)').forEach(card => {
//   card.addEventListener('mousemove', (e) => {
//     const rect  = card.getBoundingClientRect();
//     const x     = e.clientX - rect.left;
//     const y     = e.clientY - rect.top;
//     card.style.setProperty('--mx', `${x}px`);
//     card.style.setProperty('--my', `${y}px`);
//   });
// });

// /* ——— Add active nav style ——— */
// const styleSheet = document.createElement('style');
// styleSheet.textContent = `
//   .nav-links a.active {
//     color: var(--white) !important;
//   }
//   .nav-links a.active::after {
//     width: 100% !important;
//   }
// `;
// document.head.appendChild(styleSheet);

//     // // ── EmailJS Init ──
//     // emailjs.init('pVorqfujg5EBlH_EW');

//     // const form      = document.getElementById('contactForm');
//     // const formNote  = document.getElementById('formNote');
//     // const submitBtn = document.getElementById('submitBtn');

//     // form.addEventListener('submit', function (e) {
//     //   e.preventDefault();

//     //   const name    = document.getElementById('name').value.trim();
//     //   const email   = document.getElementById('email').value.trim();
//     //   const message = document.getElementById('message').value.trim();

//     //   if (!name || !email || !message) return;

//     //   submitBtn.disabled = true;
//     //   submitBtn.textContent = 'Sending…';
//     //   formNote.style.color = '';
//     //   formNote.textContent = '';

//     //   emailjs.send('service_k3i51mf', 'template_98y9o3m', {
//     //     from_name:  name,
//     //     from_email: email,
//     //     message:    message,
//     //   })
//     //   .then(() => {
//     //     formNote.style.color = '#4ade80';
//     //     formNote.textContent = '✅ Message sent! I\'ll get back to you soon.';
//     //     form.reset();
//     //     submitBtn.disabled = false;
//     //     submitBtn.textContent = 'Send Message →';
//     //   })
//     //   .catch((err) => {
//     //     console.error('EmailJS error:', err);
//     //     formNote.style.color = '#f87171';
//     //     formNote.textContent = '❌ Something went wrong. Please try emailing me directly.';
//     //     submitBtn.disabled = false;
//     //     submitBtn.textContent = 'Send Message →';
//     //   });
//     // });

//     // ── Project Slider ──
//     const grid    = document.getElementById('projectsGrid');
//     const prevBtn = document.getElementById('sliderPrev');
//     const nextBtn = document.getElementById('sliderNext');
//     const dotsEl  = document.getElementById('sliderDots');

//     const cards = Array.from(grid.querySelectorAll('.project-card, .project-card-placeholder'));
//     const total = cards.length;
//     let current = 0;

//     // Build dots
//     cards.forEach((_, i) => {
//       const dot = document.createElement('button');
//       dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
//       dot.setAttribute('aria-label', 'Go to project ' + (i + 1));
//       dot.addEventListener('click', () => goTo(i));
//       dotsEl.appendChild(dot);
//     });

//     function getCardWidth() {
//       const style = window.getComputedStyle(grid);
//       const gap   = parseFloat(style.gap) || 24;
//       return cards[0].getBoundingClientRect().width + gap;
//     }

//     function goTo(index) {
//       current = index;
//       const offset = getCardWidth() * current;
//       grid.style.transform = 'translateX(-' + offset + 'px)';

//       dotsEl.querySelectorAll('.slider-dot').forEach((d, i) => {
//         d.classList.toggle('active', i === current);
//       });

//       prevBtn.disabled = current === 0;
//       nextBtn.disabled = current === total - 1;
//     }

//     prevBtn.addEventListener('click', () => { if (current > 0) goTo(current - 1); });
//     nextBtn.addEventListener('click', () => { if (current < total - 1) goTo(current + 1); });

//     // Touch / swipe support
//     let touchStartX = 0;
//     grid.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
//     grid.addEventListener('touchend', e => {
//       const diff = touchStartX - e.changedTouches[0].clientX;
//       if (Math.abs(diff) > 50) {
//         if (diff > 0 && current < total - 1) goTo(current + 1);
//         if (diff < 0 && current > 0) goTo(current - 1);
//       }
//     });

//     // Recalculate on resize
//     window.addEventListener('resize', () => goTo(current));


/* ——— NAVBAR: add .scrolled class on scroll ——— */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* ——— HAMBURGER MENU (mobile) ——— */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
hamburger.classList.toggle('active');
navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
link.addEventListener('click', () => {
hamburger.classList.remove('active');
navLinks.classList.remove('open');
});
});

/* ——— SCROLL REVEAL ——— */
const revealObserver = new IntersectionObserver(
(entries) => {
entries.forEach((entry, i) => {


  if (entry.isIntersecting) {

    const siblings =
      entry.target.parentElement?.querySelectorAll('.reveal');

    let delay = 0;

    if (siblings) {
      siblings.forEach((el, idx) => {
        if (el === entry.target) delay = idx * 80;
      });
    }

    setTimeout(() => {
      entry.target.classList.add('visible');
    }, delay);

    revealObserver.unobserve(entry.target);
  }
});


},
{
threshold: 0.12,
rootMargin: '0px 0px -40px 0px'
}
);

document
.querySelectorAll('.reveal')
.forEach(el => revealObserver.observe(el));

/* ——— ACTIVE NAV LINK on scroll ——— */

const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
(entries) => {

entries.forEach((entry) => {

  if (entry.isIntersecting) {

    navAnchors.forEach((a) => {
      a.classList.remove('active');
    });

    const active = document.querySelector(
      `.nav-links a[href="#${entry.target.id}"]`
    );

    if (active) {
      active.classList.add('active');
    }
  }

});

},
{
threshold: 0.45
}
);

sections.forEach((sec) => {
sectionObserver.observe(sec);
});


/* ——— EMAILJS CONTACT FORM ——— */

// Initialize EmailJS
emailjs.init('pVorqfujg5EBlH_EW');

// Form Elements
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formMessage = document.getElementById('formMessage');

// Submit Form
contactForm.addEventListener('submit', function (e) {

e.preventDefault();

// Loading State
submitBtn.disabled = true;
submitBtn.innerText = 'Sending...';

// Template Parameters
const templateParams = {
from_name: document.getElementById('name').value,
from_email: document.getElementById('email').value,
message: document.getElementById('message').value,
};

// Send Email
emailjs.send(
'service_k3i51mf',
'template_98y9o3m',
templateParams
)

.then(() => {

formMessage.innerText =
  '✅ Message sent successfully!';

formMessage.style.color = '#6ee7ff';

// Reset Form
contactForm.reset();

// Restore Button
submitBtn.disabled = false;
submitBtn.innerText = 'Send Message';


})

.catch((error) => {
console.error('EmailJS Error:', error);

formMessage.innerText =
  '❌ Failed to send message.';

formMessage.style.color = '#ff77c8';

submitBtn.disabled = false;
submitBtn.innerText = 'Send Message';


});

});

/* ——— SMOOTH cursor glow effect on project cards ——— */
document
.querySelectorAll('.project-card:not(.project-card-placeholder)')
.forEach(card => {


card.addEventListener('mousemove', (e) => {

  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  card.style.setProperty('--mx', `${x}px`);
  card.style.setProperty('--my', `${y}px`);

});


});

/* ——— Add active nav style dynamically ——— */
const styleSheet = document.createElement('style');

styleSheet.textContent = `
.nav-links a.active {
color: var(--white) !important;
}

.nav-links a.active::after {
width: 100% !important;
}
`;

document.head.appendChild(styleSheet);

/* ——— PROJECT SLIDER ——— */
const grid = document.getElementById('projectsGrid');
const prevBtn = document.getElementById('sliderPrev');
const nextBtn = document.getElementById('sliderNext');
const dotsEl = document.getElementById('sliderDots');

if (grid && prevBtn && nextBtn && dotsEl) {

const cards = Array.from(
grid.querySelectorAll(
'.project-card, .project-card-placeholder'
)
);

const total = cards.length;

let current = 0;

// Build dots
cards.forEach((_, i) => {

```
const dot = document.createElement('button');

dot.className =
  'slider-dot' + (i === 0 ? ' active' : '');

dot.setAttribute(
  'aria-label',
  'Go to project ' + (i + 1)
);

dot.addEventListener('click', () => goTo(i));

dotsEl.appendChild(dot);
```

});

function getCardWidth() {

```
const style = window.getComputedStyle(grid);

const gap =
  parseFloat(style.gap) || 24;

return (
  cards[0].getBoundingClientRect().width + gap
);
```

}

function goTo(index) {

```
current = index;

const offset = getCardWidth() * current;

grid.style.transform =
  'translateX(-' + offset + 'px)';

dotsEl
  .querySelectorAll('.slider-dot')
  .forEach((d, i) => {

    d.classList.toggle(
      'active',
      i === current
    );
  });

prevBtn.disabled = current === 0;
nextBtn.disabled = current === total - 1;
```

}

prevBtn.addEventListener('click', () => {

```
if (current > 0) {
  goTo(current - 1);
}
```

});

nextBtn.addEventListener('click', () => {

```
if (current < total - 1) {
  goTo(current + 1);
}
```

});

// Touch Swipe Support
let touchStartX = 0;

grid.addEventListener(
'touchstart',
e => {
touchStartX = e.touches[0].clientX;
},
{ passive: true }
);

grid.addEventListener('touchend', e => {

```
const diff =
  touchStartX - e.changedTouches[0].clientX;

if (Math.abs(diff) > 50) {

  if (diff > 0 && current < total - 1) {
    goTo(current + 1);
  }

  if (diff < 0 && current > 0) {
    goTo(current - 1);
  }
}
```

});

// Recalculate on resize
window.addEventListener('resize', () => {
goTo(current);
});
}
