
let apiUser = 'http://localhost:3000/user';
// fetch(apiUser)
//     .then(function(res){
//         return res.json();
//     })
//     .then(function(user){
//         console.log(user);
//     });

document.querySelector('.auth-form__btn').addEventListener("click", e => {
    e.preventDefault();
    login()
})


async function login(){
    let username = document.querySelector(".username").value;
    let password = document.querySelector(".password").value;
    // const apiUser = 'http://localhost:3000/user';
    // const data = await fetch(apiUser).then( res => res.json());
    let data = await fetch(apiUser).then( res => res.json());
    const validUser = authorize(data, username, password);
    if (validUser) {
      window.location.href = "./homepage.html"
    } else {
        // console.log('false')
        alert("Tài khoản không tồn tại!!")
    }
}

function authorize(listUsers, username, password) {
    const existUser = listUsers.filter( user => user.username === username && user.password === password)
    return !!existUser.length
}


// function signup(){
//     handleCreateForm();
// }

// function createUser(data){
//     fetch(apiUser,{
//         method : "POST",
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     }).then(function(res){
//         return res.json();
//     });
//     if(data){
//         alert("dang ky thanh cong");
//     }
// }

// function handleCreateForm(){
//     let username = document.querySelector(".username");
//     let password = document.querySelector(".password");
//     let user = {
//         username: username.value,
//         password: password.value,
//     };
//     createUser(user);
// }

function signup() {
    handleCreateForm();
  }
  
  function createUser(data) {
    fetch(apiUser, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(function (res) {
      return res.json();
    });
    if (data) {
      alert("Đăng ký thành công");
    }
  }
  function handleCreateForm() {
    let username = document.querySelector(".username");
    let password = document.querySelector(".password");
    let user = {
      username: username.value,
      password: password.value,
    };
    createUser(user);
  }
  

