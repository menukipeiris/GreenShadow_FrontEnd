const form=document.getElementById('form')
const firstName= document.getElementById('firstName')
const lastname=document.getElementById('lastName')
const email=document.getElementById('email')
const password=document.getElementById('password')
const error_message=document.getElementById('error-message')

form.addEventListener('signup',(e) =>{
        // e.preventDefault()
        let errors=[]

    if (firstName){
        errors =getSignUpFormErrors(firstName.value,lastname.value,email.value,password.value)
    }else {
        errors=getLoginFormErrors(email.value,password.value)
    }

    if (errors.length>0){
        e.preventDefault()
        error_message.innerText=errors.join(". ")
    }
    })

function getSignUpFormErrors(firstName,lastName,email,password){
    let errors=[]

    if (firstName === '' || firstName == null){
        errors.push('First name is required')
        firstName.parentElement.classList.add('incorrect')
    }

    if (lastName === '' || lastName == null){
        errors.push('Last name is required')
        lastName.parentElement.classList.add('incorrect')
    }

    if (email === '' || email == null){
        errors.push('Email is required')
        email.parentElement.classList.add('incorrect')
    }

    if (password === '' || password == null){
        errors.push('Password is required')
        password.parentElement.classList.add('incorrect')
    }

    return errors
}

allInputs.forEach(input => {
    input.addEventListener('input',()=>{
        if (input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
        }
    })
})