
function sendMessage() {
  const emailInput = document.getElementById("email-input");
  const messageInput = document.getElementById("message-input");

  var data = {
    Email: emailInput.value,
    Message: messageInput.value
  };

  fetch('https://3f1khnsjej.execute-api.us-east-2.amazonaws.com/Prod/', {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
  .then((response) => {
    emailInput.value = '';
    messageInput.value = '';

    alert("Message has been sent!");
  })

}
