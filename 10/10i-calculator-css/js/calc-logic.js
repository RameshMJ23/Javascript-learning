
let calculation = localStorage.getItem('calculation')
  || "";

updateViewBar();

function updateCalculation(value){
  calculation += value;
  updateViewBar(); 
  localStorage.setItem('calculation', calculation);
}

function updateViewBar(){   
  document.querySelector('.view-bar').innerHTML = calculation;
}

function clearViewBar(){
  document.querySelector('.view-bar').innerHTML = 0;
}