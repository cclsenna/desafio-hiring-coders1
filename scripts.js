var emails=[]
persistEmail=()=>{
    emails.push(document.getElementById("input_email").value)
    localStorage.setItem("email",emails);
    alert("Email cadastrado com sucesso.") ;  
}


countdownTimer=()=>{

var dataFim = new Date("Nov 26, 2021 00:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
    
  var distance = dataFim - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("contador-d").innerHTML = days;

  document.getElementById("contador-h").innerHTML = hours;  

  document.getElementById("contador-min").innerHTML = minutes; 

  document.getElementById("contador-sec").innerHTML = seconds; 

}, 1000)

}