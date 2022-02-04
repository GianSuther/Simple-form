


function SignIn(){

    
    let email = document.getElementById("floatingInput");
    let password = document.getElementById("floatingPassword")

    firebase.auth()
    .signInWithEmailAndPassword(floatingInput.value,floatingPassword.value)
    .then((result) =>{

      console.log(result);
      window.location("./Home.html")
    
    })
    .catch((error) =>{
 
        
       console.log(error)
    

      })

};



function Signup(){

    let email = document.getElementById("floatingInput");
    let password = document.getElementById("floatingPassword")

    firebase.auth()
    .createUserWithEmailAndPassword(email.value,password.value)
    .then((result) =>{

      console.log(result);
    
    })
    .catch((error) =>{
 
        console.log(error)

      })

};

// createUserWithEmailAndPassword
// signInWithEmailAndPassword