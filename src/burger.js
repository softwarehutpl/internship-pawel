
console.log ("burger - loaded");

var btn = document.querySelector('[data-js="btnnav"]');

btn.addEventListener('click', function () {
    var cl = this.getAttribute('class');
    if (cl === 'buttonnav') {
        this.classList.add('open');
    }
    else {
        this.classList.remove('open');
    }
});