let navToggleCont = document.getElementById("nav-toggle")

function navToggle() {
    if(navToggleCont.style.marginLeft != "0px") {
        navToggleCont.style.marginLeft = "0px"
        setTimeout(() => {
            document.getElementsByTagName("main")[0].style.display = "none"
        }, 600)
    }
    else {
        navToggleCont.style.marginLeft = "-200vw"
        document.getElementsByTagName("main")[0].style.display = "block"
    }
}