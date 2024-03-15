$(".nav li").eq(0).find("a").addClass("on");
let intro = gsap.timeline();
intro
  .from(".hello", {
    x: -100,
  })
  .from(".point", {
    autoAlpha: 0,
    duration: 0.5,
  })
  .from(
    ".haeon",
    {
      autoAlpha: 0,
      duration: 0.8,
    },
    "txt"
  )
  .from(
    ".intro .img",
    {
      autoAlpha: 0,
      y: 500,
      duration: 0.8,
    },
    "txt"
  );
ScrollTrigger.create({
  animation: intro,
  trigger: ".intro",
  end: "70% 50%",
  markers: true,
  onLeave: () => {
    $(".nav li a").removeClass("on");
    $(".nav li").eq(1).find("a").addClass("on");
    const nextSection = $(".profile");
    const scrollTop = nextSection.offset().top;
    $("html, body").stop().animate({ scrollTop: scrollTop }, 500);
  },
});
//profile 타임라인
let profile = gsap.timeline();
profile
  .from(".profile h1", {
    x: -100,
    autoAlpha: 0,
    duration: 1,
  })
  .from(".circle", {
    y: -20,
    autoAlpha: 0,
    duration: 0.5,
    ease: "bounce.out",
  })
  .from(".right p:nth-child(2), .right p:nth-child(3), .right ul", {
    x: -20,
    autoAlpha: 0,
    stagger: 0.2, // 요소들을 순차적으로 애니메이션합니다.
  });

ScrollTrigger.create({
  animation: profile,
  trigger: ".profile",
  scrub: true,
  pin: true,
  markers: true,
  onLeave: () => {
    $(".nav li a").removeClass("on");
    $(".nav li").eq(2).find("a").addClass("on");
    const nextSection = $(".work1");
    const scrollTop = nextSection.offset().top;
    $("html, body").animate({ scrollTop: scrollTop }, 500);
  },
  onLeaveBack: () => {
    $(".nav li a").removeClass("on");
    $(".nav li").eq(0).find("a").addClass("on");
    const prevSection = $(".intro");
    const scrollTop = prevSection.offset().top;
    $("html, body").stop().animate({ scrollTop: scrollTop }, 500);
  },
});

let work1 = gsap.timeline();
work1.from(".work1 h1", {
  x: -20,
  autoAlpha: 0,
});
ScrollTrigger.create({
  animation: work1,
  trigger: ".work1",
  scrub: true,
  pin: true,
  markers: true,
  onLeave: () => {
    $(".nav li a").removeClass("on");
    $(".nav li").eq(3).find("a").addClass("on");
    const nextSection = $(".work2");
    const scrollTop = nextSection.offset().top;
    $("html, body").stop().animate({ scrollTop: scrollTop }, 500);
  },
  onLeaveBack: () => {
    $(".nav li a").removeClass("on");
    $(".nav li").eq(1).find("a").addClass("on");
    const prevSection = $(".profile");
    const scrollTop = prevSection.offset().top;
    $("html, body").stop().animate({ scrollTop: scrollTop }, 500);
  },
});

let work2 = gsap.timeline();
work2.from(".work2 h1", {
  x: -20,
  autoAlpha: 0,
});

ScrollTrigger.create({
  animation: work2,
  trigger: ".work2",
  scrub: true,
  pin: true,
  markers: true,
  onLeave: () => {
    $(".nav li a").removeClass("on");
    $(".nav li").eq(4).find("a").addClass("on");
    const nextSection = $(".work3");
    const scrollTop = nextSection.offset().top;
    $("html, body").stop().animate({ scrollTop: scrollTop }, 500);
  },
  onLeaveBack: () => {
    $(".nav li a").removeClass("on");
    $(".nav li").eq(2).find("a").addClass("on");
    const prevSection = $(".work1");
    const scrollTop = prevSection.offset().top;
    $("html, body").stop().animate({ scrollTop: scrollTop }, 500);
  },
});
let work3 = gsap.timeline();
work3.from(".work3 h1", {
  x: -20,
  autoAlpha: 0,
  delay: 0.5,
});
ScrollTrigger.create({
  animation: work3,
  trigger: ".work3",
  scrub: true,
  pin: true,
  markers: true,
  onLeaveBack: () => {
    $(".nav li a").removeClass("on");
    $(".nav li").eq(4).find("a").addClass("on");
    const prevSection = $(".work2");
    const scrollTop = prevSection.offset().top;
    $("html, body").stop().animate({ scrollTop: scrollTop }, 500);
  },
});

$(".nav li").click(function (e) {
  e.preventDefault();
  let idx = $(this).index();
  console.log(idx);
  $(".nav li a").removeClass("on");
  $(".nav li").eq(idx).find("a").addClass("on");

  let section = $("section").eq(idx);
  let sectionDistance = section.offset().top;
  $("html,body").stop().animate({ scrollTop: sectionDistance });
});

// pc 목업에 마우스오버 했을때 마우스 효과
const sec = document.querySelector(".special");
gsap.set(".pointer", { xPercent: -50, yPercent: -50 });

let xSetter = gsap.quickSetter(".pointer", "x", "px");
let ySetter = gsap.quickSetter(".pointer", "y", "px");

$(".special .con").mouseenter(() => {
  $(".circle_v").addClass("on");
});
$(".special .con").mouseleave(() => {
  $(".circle_v").removeClass("on");
});

window.addEventListener("mousemove", (e) => {
  xSetter(e.x);
  ySetter(e.y);
});
