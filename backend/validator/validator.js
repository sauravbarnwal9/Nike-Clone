var validator = require('validator');

exports.SignUpValidator=(data)=>{
   let name=data.name 
   let email=data.email
   let password=data.password 
return (name&&validator.isEmail(email)&&password)?true:false


}

exports.loginValidator=(data)=>{
    let password=data.password
    let email=data.email

return (password&&email)?true:false

}
