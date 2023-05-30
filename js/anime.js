const locoScroll = new LocomotiveScroll({
    el: document.querySelector('.scrollContainer'),
    smooth: true,
    smoothMobile: false,
});

window.addEventListener('load', () => {
    gsap.to('body', { autoAlpha: 1 });
    locoScroll.update(); // Locomotive Scroll 업데이트
    locoScroll.scrollTo(0, 0, 0); // 페이지를 맨 위로 이동
});

locoScroll.on('scroll', ScrollTrigger.update);

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.scrollerProxy('.scrollContainer', {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
        };
    },

    pinType: document.querySelector('.scrollContainer').style.transform ? 'transform' : 'fixed',
});

ScrollTrigger.addEventListener('refresh', () => locoScroll.update());

ScrollTrigger.refresh();

const select = (el) => document.querySelector(el);
const selectAll = (el) => document.querySelectorAll(el);

const LOGOBOX = select('.logo_box');
const logoscroll = selectAll('.logo_scroll');
const logoscrollx = selectAll('.logo_scrollX');
const TXTBOX1 = select('.txt_box1');
const txtscroll1 = selectAll('.txt_scroll1');
const txtscroll2 = select('.txt_scroll2');
const TXTBOX3 = select('.txt_box3');
const txtscroll3 = selectAll('.txt_scroll3');
const txtscroll4 = select('.txt_scroll4');
const weddingcont1 = select('.wedding_btn_con1');
const btnscroll1 = selectAll('.btn_scroll1');
const txtscroll5 = select('.txt_scroll5');
const weddingcont2 = select('.wedding_btn_con2');
const btnscroll2 = selectAll('.btn_scroll2');
const imgScal = selectAll('.imgScal');
const weddingsns1 = select('.wedding_sns_con');
const linkscroll1 = selectAll('.link_scroll1');

const anime1 = gsap
    .timeline({
        scrollTrigger: {
            trigger: LOGOBOX,
            scroller: '.scrollContainer',
            start: 'top 100%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            scrub: false,
        },
    })
    .from(logoscroll, {
        opacity: 0,
        scale: 0,
        duration: 0.9,
        delay: 1,
        ease: 'power1.out',
    })
    .from(logoscrollx, {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: 'power3.out',
    })

const anime2 = gsap
    .timeline({
        scrollTrigger: {
            trigger: TXTBOX1,
            scroller: '.scrollContainer',
            start: 'top 100%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            scrub: false,
        },
    })
    .from(txtscroll1, {
        opacity: 0,
        y: 100,
        stagger: 0.5,
        duration: 1.3,
        ease: 'power3.out',
    });

const anime3 = gsap
    .timeline({
        scrollTrigger: {
            trigger: txtscroll2,
            scroller: '.scrollContainer',
            start: 'top 100%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            scrub: false,
        },
    })
    .from(txtscroll2, {
        opacity: 0,
        y: 100,
        duration: 1.3,
        ease: 'power3.out',
    });

const anime4 = gsap
    .timeline({
        scrollTrigger: {
            trigger: TXTBOX3,
            scroller: '.scrollContainer',
            start: 'top 100%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            scrub: false,
        },
    })
    .from(txtscroll3, {
        opacity: 0,
        y: 100,
        stagger: 0.5,
        duration: 1.3,
        ease: 'power3.out',
    });

const anime5 = gsap
    .timeline({
        scrollTrigger: {
            trigger: txtscroll4,
            scroller: '.scrollContainer',
            start: 'top 100%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            scrub: false,
        },
    })
    .from(txtscroll4, {
        opacity: 0,
        y: 100,
        stagger: 0.5,
        duration: 1.3,
        ease: 'power3.out',
    });

const weddingbtn = gsap
    .timeline({
        scrollTrigger: {
            trigger: weddingcont1,
            scroller: '.scrollContainer',
            start: 'top 100%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            scrub: false,
        },
    })
    .from(btnscroll1, {
        opacity: 0,
        y: 100,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
    });

const weddingbtn2 = gsap
    .timeline({
        scrollTrigger: {
            trigger: weddingcont2,
            scroller: '.scrollContainer',
            start: 'top 100%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            scrub: false,
        },
    })
    .from(btnscroll2, {
        opacity: 0,
        y: 100,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
    });

const anime7 = gsap
    .timeline({
        scrollTrigger: {
            trigger: txtscroll5,
            scroller: '.scrollContainer',
            start: 'top 100%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            scrub: false,
        },
    })
    .from(txtscroll5, {
        opacity: 0,
        y: 100,
        stagger: 0.5,
        duration: 1.3,
        ease: 'power3.out',
    });

const imgscal = gsap
    .timeline({
        scrollTrigger: {
            trigger: imgScal,
            scroller: '.scrollContainer',
            start: 'top 100%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            scrub: false,
        },
    })
    .from(imgScal, {
        opacity: 0,
        scale: 0,
        duration: 1.3,
        ease: 'power3.out',
    });

const anime8 = gsap
    .timeline({
        scrollTrigger: {
            trigger: weddingsns1,
            scroller: '.scrollContainer',
            start: 'top 100%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            scrub: false,
        },
    })
    .from(linkscroll1, {
        opacity: 0,
        y: 100,
        stagger: 0.3,
        duration: 1,
        ease: 'power3.out',
    });
