
let nameoverlap = document.querySelector('.overlap');

nameoverlap.addEventListener('click', function() {
    alert('중복');
});

let nickoverlap = document.querySelector('.nickoveralp');


function emailclick () {
let eamilEl = document.querySelector('.email');
let number = eamilEl.options.selectedIndex;
let displaytext=eamilEl.options[eamilEl.selectedIndex].text;

console.log(number);

if(number==0) {
    document.querySelector('.emailtext').value="";
}
else {
    document.querySelector('.emailtext').value=displaytext;
}
}