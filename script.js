//Fade In Effects
const fadingElements = document.querySelectorAll(".fadeIn");
const slidingElements = document.querySelectorAll(".slideIn");
console.log(fadingElements);
const appearOptions = {
    threshold: 0.5,
};
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
},appearOptions);

fadingElements.forEach(fadingElement => {
    appearOnScroll.observe(fadingElement);
});

slidingElements.forEach(slidingElement => {
    appearOnScroll.observe(slidingElement);
});