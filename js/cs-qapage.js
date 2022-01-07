// 문의 박스
let post = document.querySelector('.post');
// 답변 박스
let answer = document.querySelector('.clickbox');

let a = 0;
// 포스트를 클릭시
post.addEventListener('click', function() {
    a++;
    if(a % 2 == 1)
    {
        answer.style.display = 'block';
    } else {
        answer.style.display = 'none';
    }
    console.log(a);
});