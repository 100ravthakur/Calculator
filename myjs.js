const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.textContent === 'AC') {
      clearDisplay();
    } else if (button.textContent === '=') {
      calculate();

    } 
    else if (button.textContent === 'Delete') {

    deleteOne();
    } 
  
    else {
      appendToDisplay(button.textContent);
    }
  });
});


function deleteOne(){
  const display = document.getElementById('display');
  display.value= display.value.toString().slice(0 ,-1);


}


function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
  }

  function calculate() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  }

  function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
  }
 



 var target = document.getElementById("smile");

 target.addEventListener('click', function(){
  alert("hey ! this is my first js project");
 }
 );










// var buttons = document.getElementsByClassName("my-btn");
// var display = document.getElementById("dis-show");
 
// operand1 = 0;
// operand2 = null;
// operator = null;


// for (var i = 0; i < buttons.length; i++){

//     buttons[i].addEventListener('click',function(){
//             var value = this.getAttribute("data-value");

//             if(value == '+'){
              
//                 operator = '+'
//                 operand1 = parseFloat(display.textContent);

//             } 
//             else if(value == '='){
                

//                 clearDisplay();

//             }
//             else{
//                 display.innerText += value;
//             }
//     });
// }
// function clearDisplay() {
//     var display = document.getElementById("display");
//     display.value = '';
//   }
