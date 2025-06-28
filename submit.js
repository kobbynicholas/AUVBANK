const scriptURL = 'https://script.google.com/macros/s/AKfycbx1MotN-FVnVdEeZQf5OOqlwS1CHVqo8m0uGNJJ0kO-j3-6_nMLVKgRfe5T81KJ55cD/exec'


const form = document.forms['contact-form']

form.addEventListener('submit', e => { 
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

function showDiv() {
  document.getElementById('loadingGif').style.display = "flex";
  setTimeout(function() {
  document.getElementById('loadingGif').style.display = "flex";
  },5000);
}

function hideButton() {
  document.getElementById("myButton").style.display = "none";
}

