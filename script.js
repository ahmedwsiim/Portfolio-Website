document.getElementById('myForm').addEventListener('submit', function (event)
 {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) 
        {
        alert('Please fill out all fields.');
        event.preventDefault(); 
    }
});

// $(document).ready(function(){
// 	$(window).scroll(function () {
// 			if ($(this).scrollTop() > 50) {
// 				$('#back-to-top').fadeIn();
// 			} else {
// 				$('#back-to-top').fadeOut();
// 			}
// 		});
// 		$('#back-to-top').click(function () {
// 			$('body,html').animate({
// 				scrollTop: 0
// 			}, 400);
// 			return false;
// 		});
// });


