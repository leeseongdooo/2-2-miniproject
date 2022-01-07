let checkFlag = 'false';

let check = document.querySelector('.one');
let checkBox = document.getElementsByName("checkBox");
let finalcheck = document.querySelector('.gobtn');

// check 클릭 이벤트
check.addEventListener('click', function() {
    if(checkBox[1].checked == false || checkBox[2].checked == false || checkBox[3].checked == false) {
        for(i = 0; i < checkBox.length; i++) {
            checkBox[i].checked = true;
        }
    }

    else if(checkBox[1].checked == true && checkBox[2].checked == true && checkBox[3].checked == true){
        for(i = 0; i < checkBox.length; i++) {
            checkBox[i].checked = false;
        }
    
    }     
});

function clickbtn() {
    if(checkBox[1].checked == false || checkBox[2].checked == false || checkBox[3].checked == false)  {
        check.checked = false;
    } else {
        check.checked = true;
    }
}

finalcheck.addEventListener('click', function(e) {
    if(checkBox[1].checked == true && checkBox[2].checked == true){ 
        e.preventDefault();
        location.href='./join.html';
    }
    else {
        alert('버튼을 확인해주세요');
    }
});

