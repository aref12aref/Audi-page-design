let btn = document.getElementById('btn');
onscroll = function(){
    if(scrollY >= 400){
        btn.style.display = 'block';
    }
    else{
        btn.style.display = 'none';
    }
}
btn.onclick = function(){
    scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
    });
}

let nav = document.getElementById('navig');
let lines = document.querySelectorAll('.line');
let dlines = document.getElementById('lines');
dlines.onclick = function(){
    if(nav.style.opacity == '0'){
        lines.forEach((line) => {
            line.style.transform = 'rotate(-90deg)';
        });
        nav.style.opacity = '1';
    }
    else{
        lines.forEach((line) => {
            line.style.transform = 'rotate(0deg)';
        });
        nav.style.opacity = '0';
    }
}
