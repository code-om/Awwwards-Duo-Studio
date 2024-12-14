function init(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();        

}

init();

let crsr =  document.querySelector(".cursor");
let main = document.querySelector(".main");

function cursor(){
    

    document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+20+"px"
    crsr.style.top = dets.y+20+"px"
    crsr.pointer = "none"
    })  
}

cursor();

let mainvideo = document.querySelector(".overlap");

mainvideo.addEventListener("mouseenter",function(){
    crsr.innerHTML = "SOUND-ON";


    gsap.to(crsr,{

        width:"90px",
        // cursor:"pointer",
        height:"30px",
        borderRadius : "30%",
        fontSize : "15px",
        color : "white",
        backgroundColor: "green",
        fontWeight:"1000",
        display:"flex",
        alignItems: "center",
        justifyContent:"center",
    })
})

mainvideo.addEventListener("mouseleave",function(){
    crsr.innerHTML = "";


    gsap.to(crsr,{

        backgroundColor: "#EDBFFF",
        width: "20px",
        height: "20px",
        borderRadius : "50%",
        fontSize : "0",
        color : "",
        fontWeight:"1000",
        fontWeight:"0",
        display:"",
        alignItems: "",
        justifyContent:"",
    })
})

var boxes = document.querySelectorAll(".box");

// console.log(boxes);
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        var att = elem.getAttribute("div-img")
        crsr.style.width = "400px",
        crsr.style.height = "350px",
        crsr.style.borderRadius = "0",
        crsr.style.zIndex = "9999",
        crsr.style.backgroundImage = `url(${att})`

    })
    elem.addEventListener("mouseleave", function(){
         crsr.style.backgroundColor = "#EDBFFF",
         crsr.style.width= "20px",
         crsr.style.height= "20px",
         crsr.style.borderRadius= "50%"
        crsr.style.backgroundImage = `none`


    })
    // elem.addEventListener("mouseleave", function(){

    // })
})





gsap.from(".page1 h1, .page1 h2",{
    y:10,
    rotate:10,
    opacity:0,
    delay:0.3,
    duration:0.7
})

let tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers:true,
        start:"top 40%",
        // start:"top 27%",
        end:"top 0%",
        scrub:3,
        duration:0.1
    }
})

tl.to(".page1 h1",{
    x:-100,

},"1")
tl.to(".page1 h2",{
    x:90,
},"1")
tl.to(".page1 video",{
    width:"95%"
},"1")
tl.to(" .overlap",{
    width:"95%",
    height:"98vh"
},"1")

let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        scrub:4,
        duration:0.1,
        start:"top -115%",
        end: "top -120%"
    }
})

tl2.to(".main",{
    backgroundColor:"#fff",
    color:"black"
})

let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        scrub:3 ,
        // duration:0.1,
        start:"top -280%",
        end: "top -380%"
    }
})

tl3.to(".main",{
    backgroundColor:"#0F0D0D",
})
// tl3.to(".",{
//     backgroundColor:"#0F0D0D",
// })
