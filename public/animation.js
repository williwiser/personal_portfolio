var i = 0;
var x = 0;
var z = 0;
var myName = "Hi, I'm William.";
var role = "A Full Stack Developer";
var skills = "NodeJS, MongoDB, Express, SQL, PostgreSQL";
var speed = 50;

window.addEventListener('load', ()=>{
    typeWriter(typeWriter2(typeWriter3));
});
function typeWriter(callback) {
  if (i < myName.length) {
    document.getElementById("intro-name").innerHTML += myName.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    callback();
  }
}

function typeWriter2(callback) {
    if (x < role.length) {
      document.getElementById("intro-role").innerHTML += role.charAt(x);
      x++;
      setTimeout(typeWriter2, speed);
      callback();
    }
}

function typeWriter3() {
    if (z < skills.length) {
      document.getElementById("intro-skills").innerHTML += skills.charAt(z);
      z++;
      setTimeout(typeWriter3, speed);
    }
}