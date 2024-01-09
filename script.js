let openMenu = document.querySelector(".ri-menu-3-line")
let closeMenu = document.querySelector(".ri-close-line")
let navBar = document.querySelector(".navBar");
let anchor = document.querySelectorAll(".navBar a");

openMenu.addEventListener("click", () => {
    navBar.style.width = "100%";
    closeMenu.style.display = "block";
    openMenu.style.display = "none"

    anchor.forEach((a) => {
        a.style.opacity = "1"
        a.style.transform = "translateX(0%)"
    })
})



closeMenu.addEventListener("click", () => {
    navBar.style.width = "0";
    closeMenu.style.display = "none";
    openMenu.style.display = "block"
    anchor.forEach((a) => {
        a.style.opacity = "0";
        a.style.transform = "translateX(-100%)"
    })

})


function rippleEffect() {
    let btn = document.querySelectorAll(".btn");

    btn.forEach(btn => {
        btn.addEventListener("mousemove", (e) => {
            btn.style.color = "#fff "
            const x = (e.pageX - btn.offsetLeft);
            const y = (e.pageY - btn.offsetTop);

            btn.style.setProperty("--x", x + "px")
            btn.style.setProperty("--y", y + "px")
        })
        btn.addEventListener("mouseleave", () => {
            btn.style.color = "#000"
        })
    })

}

rippleEffect();


function FirstPage() {
    let tl = gsap.timeline({
        ease: Power4,
    })

    tl.to(".mainHeading h1 span", {
        y: 0,
        stagger: 0.1,
        duration: 0.9,

    })

    tl.to(".heroPage p span", {
        y: 0
    })

    tl.to(" .heroPage .btn", {
        padding: "15px 40px",
        opacity: 1,
        duration: 0.4
    });
}

FirstPage();

gsap.to(".heroPage2 h1", {
    y: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".heroPage2",
        scroller: "body",
        start: "20% 80%",
        end: "50% 90%",
    }
})


let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".heroPage3",
        scroller: "body",
        start: "20% 70%",
        end: "50%, 50%",
        stagger: 0.2,
        duration: 1,
    }
})


tl2.to(".heroPage3 h1 span", {
    y: 0,
    stagger: 0.2,
})

tl2.to(".heroPage3 p ", {
    opacity: 1
})


tl2.to(".btn", {
    padding: "15px 40px",
    opacity: 1
}
)



let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".heroPage5",
        scroller: "body",
        start: "20% 90%",
        end: "50% 80%",
    }
});

tl3.to(".mainText .h1Text h1 span", {
    y: 0,
    stagger: 0.1,
    duration: 1,
}, "a");

tl3.to(".tradeLogos .svg1", {
    stagger: 0.4,
    duration: 2,
    opacity: 1
}, "a")

tl3.to(".mainText p", {
    opacity: 1,
    delay: 0.9
}, "a")

// heroPage6 starts here


let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".heroPage6",
        scroller: "body",
        // markers:true,
        start: "50% 80%",
        end: "50% 50%",
        scrub: 0.5,
    }
})

tl4.to(".imageSection", {
    width: "90%",
    height: "90vh",
    opacity: 1,
});

tl4.to(".hide", {
    opacity: 1
})

let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".heroPage7",
        scroller: "body",
        start: "50% 80%",
        end: "50% 50%",
        ease: Power4
    }
});

tl5.to(".heroPage7 .hid", {
    opacity: 1,
    duration: 2
}, "a");

tl5.to(".container1", {
    duration: 1,
    stagger: 0.2,
    opacity: 1
}, "a")
