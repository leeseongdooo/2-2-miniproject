// ott관련 변수들
let ott = document.querySelectorAll('.ott');
let ottinfo = document.querySelector('.ott-info');
let ottnotinfo = document.querySelector('.ott-notinfo');
// 상단에 있는 ott네임
let ottname = document.getElementsByClassName("ottname");
// 바뀌는 ott네임
let change = document.querySelector('.change-ottname');

let ottid = document.getElementById("ottid")
let ottpwd = document.getElementById("ottpwd")


// 이부분 물어보기 == click 했을때 보더 색상이 

for(let i = 0; i < ott.length-1; i++)
{
    ott[i].addEventListener('click', function() {
            ottnotinfo.style.display = 'none';
            ottinfo.style.display = 'flex';
            ott.forEach(e =>{
                e.style.backgroundColor = "lightgray";
            });
            ott[i].style.backgroundColor = 'royalblue';
           
            change.innerText = ottname[i].innerHTML;

            ottid.innerText = "아이디 = " + i;
            ottpwd.innerText = "비밀번호 = sjqnejrqwe4545"; // 예시
            
    });
}

// 마지막 버튼 애니메이션
ott[ott.length-1].addEventListener('click', function() {
        
})
