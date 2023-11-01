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
//..............//
