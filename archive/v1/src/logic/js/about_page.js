onload = () => {
    document.getElementById("page").style.marginTop = document.getElementById("cNav").offsetHeight + "px"
}

document.onresize = () => {
    document.getElementById("page").style.marginTop = document.getElementById("cNav").offsetHeight + "px"
    document.getElementById("page").style.height = "calc(100vh -" + document.getElementById("cNav").offsetHeight + "px)"

}
