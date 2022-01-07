const secession = "탈퇴하기";
const btn = document.querySelector('.firstbtn');

function printName() {
    const a = document.querySelector('.getout').value;
    console.log(a);

    if(a == secession) {
        btn.style.backgroundColor="royalblue";
        btn.style.color = "white"
        btn.disabled = false;
    }
    else {
        btn.style.backgroundColor="white";
        btn.style.color = "gray"
        btn.disabled = true;
    }
}

