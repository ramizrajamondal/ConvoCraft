function logomostcodepen(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// --- RED PANEL ---



// --- ORANGE PANEL ---



// --- PURPLE/GREEN PANEL ---



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
function page2animation() {
    let rightele = document.querySelectorAll(".right-elem")
    rightele.forEach(function (element) {
        element.addEventListener("mousemove", function (e) {
            gsap.to(element.childNodes[1].childNodes[3], {
                opacity: 1,
                scale: 1.1,
                duration: 0.3,
                x: e.x - element.getBoundingClientRect().x - 150,
                y: e.y - element.getBoundingClientRect().y - 150,
            })
        })
        element.addEventListener("mouseleave", function () {
            gsap.to(this.querySelector(".right-elem img"), {
                opacity: 0,
                scale: 0,
                duration: 0.3,
            })
        })
    })
}
function page4ani(){
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger: ".page4",
            scroller: "#main",
            strat: "top 80%",
            end: "top 10%",
            scrub: 1,
        },
    },)
    tl.from(".page4-left h2",{
        x: -250,
        opacity: 0,
        scale: 0,
    },"r")
    
    tl.from(".page4-right h3",{
        y: 200,
        opacity: 0,
        scale: 0,
    },"r")
}
function page6ani(){
    let mysec = document.querySelectorAll(".sec-right")
    mysec.forEach((ele)=>{
        ele.addEventListener("mouseenter",function(){
            ele.childNodes[3].style.opacity = 1
            ele.childNodes[3].play()
            ele.childNodes[5].style.opacity = 1
        })
        ele.addEventListener("mousemove",function(area){
            gsap.to(ele.childNodes[5],{
                x: area.x - ele.getBoundingClientRect().x-130,
                y: area.y - ele.getBoundingClientRect().y-130,
            })
        })
        ele.addEventListener("mouseleave",function(){
            ele.childNodes[3].style.opacity = 0
            ele.childNodes[3].load()
            ele.childNodes[5].style.opacity = 0
        })
    })
    
}
function page7h(){
    gsap.from(".fconflex",{
        y: -150,
        duration: 0.8,
        opacity: 0,
        scrollTrigger:{
            trigger: ".page7-content",
            scroller: "#main",
            start: "top 40%",
            end: "top 60%",
        },
    })
}
function buttonani(){
    document.querySelector('.animated-button').addEventListener('click', function() {
        this.classList.remove('fly'); // Reset animation
        void this.offsetWidth; // Trigger reflow
        this.classList.add('fly'); // Start animation
    });
    
}
function bottomani(){
    gsap.from(".bcap h4",{
        x: 150,
        duration: 1,
        stagger:{
            amount: 0.5
        },
        scrollTrigger:{
            trigger:"#bottom-sec",
            scroller: "#main",
            start: "top 60%",
            end: "top 20%",
            scrub: true,
        }
    })
}

logomostcodepen()
page2animation()
page4ani()
page6ani()
page7h()
buttonani()
bottomani()
