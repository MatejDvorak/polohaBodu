let tbx = document.getElementById("tbx");
let tby = document.getElementById("tby");
let tla = document.getElementById("tla");
let odpoved = document.getElementById("odpoved");

tla.onclick = function ctverec() {
    let x=tbx.value
    let y=tby.value

    if (x<0 || x>50 || y<0 || y>50) {
        odpoved.innerText="Bod není ve čtvereci";
    }
    else {
        odpoved.innerText="Bod je ve čtverci";
    }
}