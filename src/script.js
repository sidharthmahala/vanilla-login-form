const usersTable = [
  // Note: This is a fake table for educational purposes. Never store user credentials in plain text.
  { id: 1, username: "hello@world.com", password: "badpassword" },
  { id: 2, username: "test@user.com", password: "badpassword" },
  { id: 3, username: "email@domain.com", password: "badpassword" },
];
let renderSuccess = () => {
  document.getElementById("success-message").hidden = false;
};
let renderError = () => {
  document.getElementById("error-message").hidden = false;
};
let resetMessage = () => {
  document.getElementById("success-message").hidden = true;
  document.getElementById("error-message").hidden = true;
};

addEventListener("submit", (event) => {
  event.preventDefault();
  resetMessage();

  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  
  let check = false;

  usersTable.forEach(e => {
    if(e.username == email && e.password == password){
           renderSuccess();
           check = true;
           return;
         }
       if(!check){
         renderError();
       }
  })

    // for(var i = 0; i < usersTable.length; i++){
    //   if(usersTable[i].username == email && usersTable[i].password == password){
    //     renderSuccess();
    //     success = true;
    //     return;
    //   }
    // }
    // if(!success){
    //   renderError();
    // }
  
  console.log(`email submitted: ${email}`);
  console.log(`password submitted: ${password}`);

});
