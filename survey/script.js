function validate(){
  var name=document.getElementById("name").value;
  var number=document.getElementById("number").value;
  var email=document.getElementById("email").value;
  if(name===""||name===null){
    document.getElementById("nameWarning").innerHTML="Please Enter the name";
  }
  
  if(number===""||number===null){
    document.getElementById("mobileWarning").innerHTML="Please Enter the mobile number";
  } else if(number.length!=10){
    document.getElementById("mobileWarning").innerHTML="Invalid MobileNumber";
  }
  
  if(email===""||email===null){
    document.getElementById("emailWarning").innerHTML="Please Enter the E-mail";
  } else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
    document.getElementById("emailWarning").innerHTML="Invalid Email";
  }
  
}