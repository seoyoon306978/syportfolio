$(function () {

    // 860이하 햄버거메뉴
    // 햄버거 메뉴 토글
    $('.hamburger').click(function () {
        $('header nav ul').slideToggle();
    });

    $(window).resize(function () {
        if ($(window).width() > 860) {
            $('header nav ul').css('display', 'flex');  // 데스크탑에서는 flex로 복구
        } else {
            $('header nav ul').hide(); // 모바일 기본값은 숨김
        }
    });

    // 각 메뉴 - 섹션 연결
    $('.page-scroll-01').click(function () {
        $('.page-scroll-01-pop').show()
    })

    $('.page-scroll-01-pop').click(function () {
        $('.page-scroll-01-pop').hide()
    })

    $('.page-scroll-02').click(function () {
        $('.page-scroll-02-pop').show()
    })

    $('.page-scroll-02-pop').click(function () {
        $('.page-scroll-02-pop').hide()
    })

    $('.waggle1').click(function () {
        $('.waggle1').hide()
    })


    // 메일 버튼
    $('.mail').click(function () {
        $('.mail').toggleClass('on')
        if ($('.mail').hasClass('on')) {
            $('.mail-popup').slideDown()
        } else {
            $('.mail-popup').slideUp()
        }
    })

    $('.close-icon').click(function () {
        $('.mail-popup').slideUp()
        $('.mail').removeClass('on')
    })

    // 메인 작성되는 글씨
    const spanEl = document.querySelector('.intro .maintext strong span')
    const txtArr = ['<코딩>', '</코딩>']

    let index = 0;
    let currentTxt = txtArr[index].split('')

    function writeTxt() {
        spanEl.textContent += currentTxt.shift()
        if (currentTxt.length !== 0) {
            setTimeout(writeTxt, Math.floor(Math.random() * 100 + 100))
        } else {
            currentTxt = spanEl.textContent.split('')
            setTimeout(deleteTxt, 3000)
        }
    }

    function deleteTxt() {
        currentTxt.pop()
        spanEl.textContent = currentTxt.join('')
        if (currentTxt.length !== 0) {
            setTimeout(deleteTxt, Math.floor(Math.random() * 100))
        } else {
            index = (index + 1) % txtArr.length
            currentTxt = txtArr[index].split('')
            writeTxt()
        }
    }
    setTimeout(writeTxt, 4000)

    // 카드 버튼 (말풍선)
    $('.gosite a').hover(
        function () {
            $(this).siblings('.left-t').fadeIn(200);
        },
        function () {
            $(this).siblings('.left-t').fadeOut(200);
        }
    );
})

// 스크롤시 나타나는 헤더
const headerEl = document.querySelector('header')

window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        headerEl.classList.add('on')
    } else {
        headerEl.classList.remove('on')
    }
})


const animationMove = function (myname) {
    const targetEl = document.querySelector(myname)
    const bsy = window.scrollY
    const tsy = targetEl.getBoundingClientRect().top + bsy
    window.scrollTo({
        top: tsy,
        behavior: 'smooth'
    })
}

const scrollMove = document.querySelectorAll('[data-animation-scroll="true"] ')
for (let i = 0; i < scrollMove.length; i++) {
    scrollMove[i].addEventListener('click', function () {
        const target = this.dataset.target
        animationMove(target)
    })

}


// 모바일에서 헤더 고정
const $cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', function (e) {
    $cursor.style.left = e.clientX + 'px';
    $cursor.style.top = e.clientY + 'px';
});

function handleScroll() {
    // 모바일이면 무조건 고정 (항상 on)
    if (window.innerWidth <= 600) {
        headerEl.classList.add('on')
        return
    }

    // PC는 기존 동작 유지
    if (window.scrollY > 0) {
        headerEl.classList.add('on')
    } else {
        headerEl.classList.remove('on')
    }
}

window.addEventListener('scroll', handleScroll)
window.addEventListener('resize', handleScroll)
handleScroll() // 최초 실행


// etc.

const notificationsStack = document.querySelector(".notifications-stack");

const notificationExamples = [
    "Take a picture",
    "Blue",
    "Reading books",
    "Watching movies",
    "Discussion",
    "Lemon",
    "Drawing",
    "Poetry writing",
    "Writing a diary",
    "Red",
    "Music",
    "Sea"
];

const notifications = [];
let notificationIndex = 0;

notificationsStack.addEventListener("click", () => {
    removeLastNotification();
});

function removeLastNotification() {
    const element = notifications.pop();
    console.log(element);
    element.classList.add("remove");

    setTimeout(() => {
        element.remove();
    }, 400);
}

function createNotification(content) {
    const element = document.createElement("div");
    element.className = "notification";

    element.textContent = content;

    notificationsStack.append(element);
    notifications.push(element);
}

function newNotification() {
    content =
        notificationExamples[notificationIndex % notificationExamples.length];

    createNotification(content);
    notificationIndex++;
}

setInterval(newNotification, 3100);

newNotification();
