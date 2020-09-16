var btt=document.getElementById('back-to-top'),
documentElement = document.documentElement,
offset, scrollLocation, docHeight;
docHeight = Math.max(documentElement.scrollHeight,documentElement.offsetHeight);
if (docHeight != 0) {
offset = docHeight / 10;
}
window.addEventListener('scroll',function () {
scrollLocation= documentElement.scrollTop; //scrollTop=>스크롤양
console.log(scrollLocation);


if(scrollLocation > offset) { 
    btt.className = 'visible';
}else {
    btt.className = ''; 
}


});

btt.addEventListener('click', function(st) {
st.preventDefault();
scrollToTop();
});

function scrollToTop () {
var scrollInterval = setInterval (function () {
    if(scrollLocation != 0) {
        window.scrollBy(0,-55);
    } else {
        clearInterval(scrollInterval);
    }
}, 15);
}