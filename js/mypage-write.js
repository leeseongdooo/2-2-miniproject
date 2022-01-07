    // 게시물수 "?개"쪽 span태그 클래스 
    let writeCount = document.querySelector('.count-write');

    // 체크박스
    let fcheck = document.querySelector('.check');
    let checkBox = document.getElementsByName("check");
    let count = checkBox.length - 1;
   
    // 게시물 수
    writeCount.innerHTML = '게시물 수 ' + count+'개';

    // 아래 게시물번호
    let pagenumber = document.getElementsByClassName('pagemove');

    // 체크박스 이벤트
    fcheck.addEventListener('click', function() {

        if(fcheck.checked == true)
        {
            for(i = 0; i < checkBox.length; i++)
            {
                checkBox[i].checked = true;
            }
        }
        else
        {
            for(i = 0; i < checkBox.length; i++)
            {
                checkBox[i].checked = false;
            }
        }
    });

 