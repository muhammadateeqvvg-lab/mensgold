const scriptURL = 'https://script.google.com/macros/s/AKfycbwDQppafxxC44h7t12e5Mt4_zFBVUgCdRoc6pRzqwhC8mZX-yhjj2hTpWbgkWMHmzUI/exec'

const form = document.forms['contactform']

form.addEventListener('submit', e => {
    var x = document.getElementById("loaderBox");
    x.style.display = "flex";
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => location.replace("popup.html"))
        // .then(() => { window.location.href = 'popup.html' })
        .catch(error => console.error('Error!', error.message))
})

