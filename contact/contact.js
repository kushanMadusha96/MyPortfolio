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

//connect watsapp//

$(".btn-watsapp").on('click',function () {

    let phone_number = "+94775017154";
    window.location.href = 'https://wa.me/' + phone_number;
})

$(".send-email").eq(0).on('click',function () {
    var my_email = "kushanmadusha96@gmail.com"; // Replace with the recipient's email address.
    var title = $("#email").val();
    var body = $("#message").val();

    var mailtoLink = "mailto:" + my_email + "?subject=" + title + "&body=" + body;

    // Open the user's default email client with the pre-populated email.
    window.open(mailtoLink);

});

$(".send-email").eq(1).on('click',function () {
    var my_email = "kushanmadusha96@gmail.com"; // Replace with the recipient's email address.
    var title = $("#mail").val();
    var body = $("#massage").val();

    var mailtoLink = "mailto:" + my_email + "?subject=" + title + "&body=" + body;

    // Open the user's default email client with the pre-populated email.
    window.open(mailtoLink);
})