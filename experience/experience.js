// for next button & oev button in slide
const nextButtons1 = document.getElementsByClassName('btnNext')[0];
const nextButtons2 = document.getElementsByClassName('btnNext')[1];
const prevButton1 = document.getElementsByClassName('btnPrev')[0];
const prevButton2 = document.getElementsByClassName('btnPrev')[1];

    nextButtons1.addEventListener('click',function () {
        document.getElementById('mainSec').style.transform = 'translateX(-100vw)';
    })
    nextButtons2.addEventListener('click',function () {
        document.getElementById('mainSec').style.transform = 'translateX(-200vw)';
    });
    prevButton1.addEventListener('click',function () {
        document.getElementById('mainSec').style.transform = 'translateX(0)';
    })
    prevButton2.addEventListener('click',function () {
        document.getElementById('mainSec').style.transform = 'translateX(-100vw)';
    })

//....................................................................................................................//

// for menu btn
let count = 0;

function onBtn() {
    document.getElementById('menuBar').style.height = '370px';
    document.getElementById('pages').style.visibility = 'visible' ;
}
function offBtn() {
    document.getElementById('menuBar').style.height = '70px';
    document.getElementById('pages').style.visibility = 'hidden' ;
}
offBtn();
document.getElementById('menuBtn').addEventListener('click', (event) => {
    count++;
    0 != count % 2  ? onBtn() : offBtn();
})
document.getElementById('mobile').addEventListener('click', function() {
    offBtn()
});

//....................................................................................................................//

// for next button & oev button in slide im mobile
$("#react").css('display','none');
$("#spring_boot").css('display','none');

$("#spring_boot_prev_btn").on('click', () =>  {
    $("#spring_boot").css('display','none');
    $("#java").css('display','none');
    $("#react").css('display','block');
});
$("#react_prev_btn").on('click', () =>  {
    $("#react").css('display','none');
    $("#spring_boot").css('display','none');
    $("#java").css('display','block');
});

$("#java_next_btn").on('click', () =>  {
    $("#java").css('display','none');
    $("#spring_boot").css('display','none');
    $("#react").css('display','block');
});

$("#react_next_btn").on('click', () =>  {
    $("#react").css('display','none');
    $("#java").css('display','none');
    $("#spring_boot").css('display','block');
});