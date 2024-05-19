// Show modal and forms
const modal = document.getElementById('auth-modal')
const loginLink = document.getElementsByClassName('user__link')[0]
const closeBtn = document.getElementsByClassName('close')[0]

loginLink.onclick = function () {
  modal.style.display = 'block'
  document.getElementById('register-form').classList.add('active')
}

closeBtn.onclick = function () {
  modal.style.display = 'none'
  document.getElementById('register-form').classList.remove('active')
  document.getElementById('login-form').classList.remove('active')
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none'
    document.getElementById('register-form').classList.remove('active')
    document.getElementById('login-form').classList.remove('active')
  }
}

document
  .getElementById('show-login-form')
  .addEventListener('click', function () {
    document.getElementById('register-form').classList.remove('active')
    document.getElementById('login-form').classList.add('active')
  })

document
  .getElementById('show-register-form')
  .addEventListener('click', function () {
    document.getElementById('login-form').classList.remove('active')
    document.getElementById('register-form').classList.add('active')
  })

// Register
document.getElementById('register-btn').addEventListener('click', function () {
  const username = document.getElementById('register-username').value
  const password = document.getElementById('register-password').value
  if (username && password) {
    if (localStorage.getItem(username)) {
      alert('Username already exists!')
    } else {
      localStorage.setItem(username, password)
      alert('User registered successfully!')
      document.getElementById('register-username').value = ''
      document.getElementById('register-password').value = ''
    }
  } else {
    alert('Please fill in both fields')
  }
})

// Login
document.getElementById('login-btn').addEventListener('click', function () {
  const username = document.getElementById('login-username').value
  const password = document.getElementById('login-password').value
  if (username && password) {
    const storedPassword = localStorage.getItem(username)
    if (storedPassword === password) {
      alert('Login successful!')
      document.getElementById('login-username').value = ''
      document.getElementById('login-password').value = ''
    } else {
      alert('Invalid username or password')
    }
  } else {
    alert('Please fill in both fields')
  }
})
