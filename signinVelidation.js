function ValidateEmail (emailAdress,password)
{
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let Password = password.value.trim();

  if (emailAdress.value.match(regexEmail)&&Password.length>=4) {
    return window.location = "BrousePage.html";
  } else {
    return alert("Enter any Password that contain morethen 4 Or Enter emailaddress thst sontain @ ") 
  }
}


