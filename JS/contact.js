
function sendEmail(to, subject) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "ju2helloworld@gmail.com",
    Password: "******",  //'test75@gmail.com,test4@gmail.com,test21@gmail.com'
    To: to, //[“salesguy@gmail.com“, “boss@gmail.com“] 
    From: "hello@gm.com",
    Subject: subject,
    Body: subject,
  }).then(
    message => alert(message)
  );
}

const form = document.getElementById("myform");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const subject = `Welcome ${data.get("name")}`;
  // const body = `Your idea ${data.get("idea")} has been submitted. Your selections are ${fruits.join(" ")} ${data.get("gender")}.`;
  sendEmail("alamashraful1003@gmail.com", subject);
});
