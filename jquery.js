//item이 왼쪽으로 이동하는 함수 moveItem
//item : 테두리가 생길 태그 container : 그 태그를 둘러싸고있는 position이 잡힌 박스 
//length: 박스의 가로 넓이 + 마진값


//슬라이드 마지막
const lastCount = $(".item").length;
console.log("라스트카운트");
console.log(lastCount);

function moveItem(item, container, length) {
    $(item).on({ // $(item)  .item 이벤트 발생
        focus: function () {  //포커스 왔을때
            var num = $(this).parent().index(); //변수 num에 현재 이벤트가 일어난 엘리먼트의.부모의.n번째 인자를 담는다
            var left = num * -length //변수 left에 n번째인자 * -(박스가로+마진값) ???

            $(this).parent().addClass('active'); //현재 엘리먼트에 active클래스를 붙여준다 --> a 부모인 li에 클래스 붙여줌
            $(container).css('left', left); // .item-container css left값에 변수 left값을 붙여준다
            console.log(num);

            // if (num == lastCount - 1) { // 0번째 순서일때 css left값 0, 왼쪽으로 이동하지 않음\
            //     $(item).on("focusout", function () {
            //         $(this).parent().removeClass('active');
            //         $(container).css('left', 0);
            //         $(".item-container li").eq(0).find('a').focus();
            //     });
            // }

            console.log('focus');
            if ($(':focus').hasClass('fake')) {
                console.log('fake');
                $('.item-container').find('.item').eq(0).focus();
            }
        },
        blur: function () { //포커스를 벗어나면
            var num = $(this).parent().index();
            if (num == lastCount - 1) { // 0번째 순서일때 css left값 0, 왼쪽으로 이동하지 않음
                $(this).parent().removeClass('active');
                $(container).css('left', 0);
                $(".item-container li").eq(0).find('a').focus();
            } else {
                $(this).parent().removeClass('active'); //현재 엘리먼트에서 active클래스를 지운다. --> a 부모인 li에 클래스 지워줌
            }

            console.log('blur');
        }
    })
}

moveItem('.item-container .item a', '.item-container', 420);