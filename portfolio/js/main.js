new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    navigation: true,
    navigationPosition: 'right',
    anchors:['section0', 'section1', 'section2', 'section3', 'section4', 'section5'],
});

let header = document.querySelector("header");
console.log(header);
let mbtn = document.querySelector(".m_btn");
console.log(mbtn);
mbtn.addEventListener("click",function(){
    header.classList.toggle("on");
})
    