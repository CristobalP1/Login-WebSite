const button = document.querySelector('.buttonIS')



 button.addEventListener('click',()=> {

    let userEmail = document.querySelector(".form-control").value;
    let userPassword = document.querySelector('.userPassword').value;
    let loginFormulario = document.querySelector('#loginformulario');

    console.log(userPassword);
    console.log(userEmail);

    loginFormulario.reset();

})
