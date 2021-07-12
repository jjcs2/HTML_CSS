// .querySelector 보다 .getElementById()를 더 자주 쓴다고 함
// (예제 따라하기 용으로 querySelector 그대로 사용)

// ul - left값만 바꿔줄 예정이라 단일요소로 가져옴
var slides = document.querySelector('.slides');

// html에서 슬라이드의 개수가 늘어나면 늘어나는걸 반영해 ul에 너비를 줘야함.
// slides 안의 li들도 변수를 잡아줌 (개수를 알려면 배열로 잡아주기위해 All)
var slide = document.querySelectorAll('.slides li');

// 처음인데 이전 클릭시 맨 마지막으로 가기, 마지막인데 다음 클릭시 맨 앞으로 가기 구분용도
// (시작하자 마자는 0번째를 보고있을테니 기본값으로 0 넣어줌)
// currentIdx가 1이 되면, slideWidth + slideMargin = 330만큼 왼쪽으로 보낼 예정
var currentIdx = 0;

// 끝, 마지막인지 구분하기 위한 용도로 슬라이드 개수 지정
var slideCount = slide.length;

// 이전, 다음 버튼
var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');

var slideWidth = 300;
var slideMargin = 30;


// 스크립트 작동하자마자 슬라이드의 너비를 지정해줌
// css에서 임의로 width 정해줬던 것처럼 맨 마지막 margin은 제외 --> css에서 넓이 삭제해도 됨
// + 'px' 붙여줘야 ul에 스타일 적용됨!
slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + 'px';

// moveSlide라는 함수는 num가 넘어와야지만 일한다
function moveSlide(num) {
    // 만약 num = 1일 경우, 1 * 330 = 330만큼 left로 움직인다 --> 오른쪽으로 이동하기 때문에
    // -를 붙여 왼쪽으로 움직이게 만듦
    console.log("무브 슬라이드");
    slides.style.left = -num * 330 + 'px';
    currentIdx = num;
}

// nextBtn을 클릭시 할 일
nextBtn.addEventListener('click', function () {
    if (currentIdx < slideCount - 3) {
        // 한 줄에 3개씩 보여주는 슬라이드 --> 슬라이드가 3개 남았을 때 그만 움직여도 됨
        //moveSlide에 currentIdx + 1을 줌
        moveSlide(currentIdx + 1);
        //console.log(currentIdx);
    } else {
        // 끝까지 갔는데도 next 버튼을 누르면, 맨 처음으로 이동
        moveSlide(0);
    }
});

// prevBtn을 클릭시 할 일
prevBtn.addEventListener('click', function () {
    if (currentIdx > 0) {
        // 첫번째 슬라이드가 아니면 뒤로 가도 됨
        //moveSlide에 currentIdx - 1을 줌
        moveSlide(currentIdx - 1);
    } else {
        // 처음으로 갔는데도 prev 버튼을 누르면, 맨 뒤로 이동(슬라이드 3개 보이는 위치)
        moveSlide(slideCount - 3);
    }
});



