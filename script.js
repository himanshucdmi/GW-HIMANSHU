// दीया की लौ को रैंडम फ्लिकर करने के लिए
const diya = document.querySelector('.diya-animation');
setInterval(() => {
    const flicker = Math.random() * 0.5 + 0.5;
    diya.style.opacity = flicker;
}, 300);

// रंगोली को एनिमेट करने के लिए
const rangoli = document.querySelector('.rangoli');
let scale = 1;
setInterval(() => {
    scale = scale === 1 ? 1.2 : 1;
    rangoli.style.transform = `translateX(-50%) scaleX(${scale})`;
}, 2000);

// सोशल आइकन्स पर हिंदी टूलटिप
const socialLinks = document.querySelectorAll('.social-link');
socialLinks[0].setAttribute('title', 'Instagram पर संपर्क करें');
socialLinks[1].setAttribute('title', 'WhatsApp पर संपर्क करें');