
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

// for next button & prev button in slide im mobile
$("#noto").css('display','none');
$("#mobileshop").css('display','none');

$("#mobileshop_prev_btn").on('click', () =>  {
    $("#mobileshop").css('display','none');
    $("#welfare").css('display','none');
    $("#noto").css('display','block');
});
$("#noto_prev_btn").on('click', () =>  {
    $("#noto").css('display','none');
    $("#mobileshop").css('display','none');
    $("#welfare").css('display','block');
});

$("#welfare_next_btn").on('click', () =>  {
    $("#welfare").css('display','none');
    $("#mobileshop").css('display','none');
    $("#noto").css('display','block');
});

$("#noto_next_btn").on('click', () =>  {
    $("#noto").css('display','none');
    $("#welfare").css('display','none');
    $("#mobileshop").css('display','block');
});