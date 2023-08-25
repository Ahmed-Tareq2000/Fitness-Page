let btn = document.getElementById("mybtn");

window.onscroll = function () {
  if (scrollY > 600) {
    btn.style.display = "block";
  } else{
    btn.style.display = "none";
  }
};


btn.onclick = function () {
    scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
};

let home = document.getElementById('home');
let about = document.getElementById('about');
let program = document.getElementById('program');
let package = document.getElementById('package');
let transformation = document.getElementById('transformation');

onload = function () {
    home.style.color = '#30A4B8';
};

home.addEventListener('click',function(){
  home.style.color = '#30A4B8';
  about.style.color = 'white';
  program.style.color = 'white';
  package.style.color = 'white';
  transformation.style.color = 'white';
});

about.addEventListener('click',function(){
    about.style.color = '#30A4B8';
    home.style.color = 'white';
    program.style.color = 'white';
    package.style.color = 'white';
    transformation.style.color = 'white';
});

program.addEventListener('click',function(){
    program.style.color = '#30A4B8';
    about.style.color = 'white';
    home.style.color = 'white';
    package.style.color = 'white';
    transformation.style.color = 'white';
});

package.addEventListener('click',function(){
    package.style.color = '#30A4B8';
    home.style.color = 'white';
    transformation.style.color = 'white';
    program.style.color = 'white';
    about.style.color = 'white';
});

transformation.addEventListener('click',function(){
    transformation.style.color = '#30A4B8';
    home.style.color = 'white';
    program.style.color = 'white';
    about.style.color = 'white';
    package.style.color = 'white';
});


let weight = document.getElementById('weight');
let height = document.getElementById('height');
let last = document.getElementById('last');
let classification = document.getElementById('classification');


function getResult() {
    if (weight.value != "" && height.value != "") {
        let result = +weight.value / (+height.value) ** 2;
        last.innerHTML = parseFloat(result).toFixed(2);
        last.style.background = "#30A4B8";
        last.style.fontWeight = "bold";
        if (result <= 18.5) {
          classification.style.display = 'block';
          classification.style.background = "#30A4B8";
          classification.innerHTML = 'Underweight';
          // console.log('Underweight');
        }
        else if (result > 18.5 && result <= 24.9) {
          classification.style.display = 'block';
          classification.style.background = "#30A4B8";
          classification.innerHTML = 'Healthy Weight';
          // console.log('Healthy Weight');
        }
        else if (result > 25 && result <= 29.9) {
          classification.style.display = 'block';
          classification.style.background = "#30A4B8";
          classification.innerHTML = 'Overweight';
          // console.log('Overweight');
        }
        else if (result >= 30) {
          classification.style.display = 'block';
          classification.style.background = "#30A4B8";
          classification.innerHTML = 'Obesity'
          // console.log('Obesity');
        }
    } else {
      last.innerHTML = "";
      last.style.background = "#5f0a0a";
      classification.style.background = "#5f0a0a";
      classification.style.display = 'none';
    }
};