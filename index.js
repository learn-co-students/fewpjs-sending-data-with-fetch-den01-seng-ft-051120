// Add your code here
function submitData(name, email) {
  let userData = {
    name,
    email
  }

  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(userData)
  }
  return fetch('http://localhost:3000/users', options)
    .then(response => response.json())
    .then(renderData)
    .catch(renderError)
}

function renderData(result) {
  let $p = document.createElement('p')
  $p.textContent = result.id
  document.body.append($p)
}

function renderError(error) {
  let $p = document.createElement('p')
  $p.textContent = error.message
  document.body.append($p)
}