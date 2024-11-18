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