//listen for auth status changes testing purposes
auth.onAuthStateChanged(user => {
    console.log(user)
    if (user){
        setupUI(user);
        console.log('user logged in: ', user);
    }else{
        setupUI();
        console.log('user logged out');
    }
})

//checks class for logged-in and logged-out and displays accordingly
const setupUI = (user) => {
    const loggedOutLinks = document.querySelectorAll('.logged-out');
    const loggedInLinks = document.querySelectorAll('.logged-in');
    
    if(user){
      loggedInLinks.forEach(item => item.style.display = 'block');
      loggedOutLinks.forEach(item => item.style.display = 'none');
  
    }else{
      loggedInLinks.forEach(item => item.style.display = 'none');
      loggedOutLinks.forEach(item => item.style.display = 'block');
    }
  }

//login method
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); //prevents page reload

    //get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        //close modal and reset form
        const modal = document.querySelector('#modal-login');
        loginForm.reset();
        
    });

})

  //logout method
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut()
});




  
  
