
const operationLogin = () => {

  const username = document.querySelector('#username');
  const usernameMessage = document.querySelector('.username-message');
  const age = document.querySelector('#age');
  const ageMessage = document.querySelector('.age-message');
  const password = document.querySelector('#password');
  const passwordMessage = document.querySelector('.password-message');
  const confirmPassword = document.querySelector('#confirm-password');
  const confirmPasswordMessage = document.querySelector('.confirm-password-message');
  const email = document.querySelector('#email');
  const emailMessage = document.querySelector('.email-message');
  const submit = document.querySelector('.submit');
  const form = document.querySelector('#form');
  const usernameValue = document.querySelector('.username-value');
  const ageValue = document.querySelector('.age-value');
 
  
  const searchUrl = () => {
    window.location = 'http://127.0.0.1:3000/public/index.html' + username.value;
  }
  username.addEventListener('change', (e) => {
 
    if (e.target.value.length < 6) {
      usernameMessage.innerText = 'username must be atleast 6 characters';
      usernameMessage.style.color = 'red';
    }
    else {
      usernameMessage.innerText = 'done!';
      usernameMessage.style.color = 'green';
    }
    //searchUrl();
  })
  
  age.addEventListener('change', (e) => {
    if (e.target.value < 12 || e.target.value > 120) {
      ageMessage.innerText = 'you must be 12 years old or your age is incorrect';
      ageMessage.style.color = 'red';
    }
    else {
      ageMessage.innerText = 'done!';
      ageMessage.style.color = 'green';
    }
    //console.log(username.value);
  })

  password.addEventListener('change', (e) => {
    console.log(e.target.value);
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    /* const result = numbers.map((value) => {
      // return e.target.value.includes(value)
      if (e.target.value.includes(value)) {
        return value;
      }
    }) */
    // console.log(result);
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const letterValue = letters.find((letter) => {
      if (e.target.value.includes(letter)) {
        return true;
      }
    });
    const numberValue = numbers.find((number) => {
      if (e.target.value.includes(number)) {
        return number;
      }
    });
    console.log(numberValue, letterValue);
    const content = Number(e.target.value);
    // console.log(String());
    // console.log(content);
    if (e.target.value.length < 6) {
      passwordMessage.innerText = 'password must be 6 charachters and it includes numbers and letters';
      passwordMessage.style.color = 'red';
    }
    else if (letterValue && numberValue) {
      passwordMessage.innerText = 'done!';
      passwordMessage.style.color = 'green';
    }
    // else if (content === Number) {
    //   console.log((e.target.value));
    //   passwordMessage.innerText = 'password must includes charachters and numbers ';
    //   passwordMessage.style.color = 'red';
    // }
  })
 
  confirmPassword.addEventListener('change', (e) => {
    if (e.target.value == password.value) {
      confirmPasswordMessage.innerText = 'done!';
      confirmPasswordMessage.style.color = 'green';
    }
    else {
      confirmPasswordMessage.innerText = 'your password is not correct';
      confirmPasswordMessage.style.color = 'red';
    }
  })

  email.addEventListener('change', (e) => {
    const content = [e.target.value];
    // const arr = Array(e.target.value);
    // console.log(arr);
    console.log(content);
    const neccessaryWords = ['@', '.com'];
    const position = content.map((word) => {
      const firstWordOfNeccessaryWords = word.indexOf(neccessaryWords[0]);
      const secondWordOfNeccessaryWords = word.indexOf(neccessaryWords[1]);
      console.log(secondWordOfNeccessaryWords);
      if (firstWordOfNeccessaryWords > secondWordOfNeccessaryWords) {
        return true;
      }
    });

    if (e.target.value.length < 15) {
      emailMessage.innerText = 'invalid email';
      emailMessage.style.color = 'red';
    }
    else if (!e.target.value.includes('@') || !e.target.value.includes('.com') || e.target.value.includes('@.com')) {
      emailMessage.innerText = 'Invalid email';
      emailMessage.style.color = 'red';
    }
    else if (e.target.value[0] == '@') {
      emailMessage.innerText = 'invalid';
      emailMessage.style.color = 'red';
    }
    else if (position.includes(true)) {
      emailMessage.innerText = 'invalid email';
      emailMessage.style.color = 'red';
    }
    else {
      emailMessage.innerText = 'valid email';
      emailMessage.style.color = 'green';
    }
  })
  
  /*if (username.value) {
    form.method = 'GET';
    form.action = 'http://www.google.com';
  }*/
  submit.addEventListener('click', () => {
    usernameMessage.textContent === 'done!' ? usernameValue.innerText = username.value : usernameValue.innerText = '';
    age.value ? ageValue.innerText = `${age.value} years old` : null;
  })
  //console.dir(submit);

};
export default operationLogin;