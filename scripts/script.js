// CountUP js
window.addEventListener('scroll', function () {
    var c = new CountUp("building", 0, 40);
    var d = new CountUp("members", 0, 145);
    var e = new CountUp("sold", 0, 9);
    c.start();
    d.start();
    e.start();
    if (window.scrollY >= 1153) {

        c.reset();
        d.start();
        e.start();
    }
});


// Animation On Scroll
AOS.init();