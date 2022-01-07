// function modal(id) {
//     let zIndex = 10;
//     let modal = document.querySelector('.mypage-party-wrap');
//     // 배경 div를 만들어 준 후
    

    
// }
const modal = document.querySelector(".mypage-party-wrap");
const closebtn = document.querySelector(".closebtn");
const openbtn = document.querySelector(".openbtn");
closebtn.addEventListener('click', function(){
    modal.style.display = 'none';
});

openbtn.addEventListener('click', function(){
    modal.style.display = 'flex';
});

let countParty = document.querySelector('.now-party .party')

console.log(countParty.length);