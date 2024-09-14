let result = '';

function clear() {
  result = '';
  document.getElementById('A').innerHTML = result;
}

function addNumber(num) {
  result += num;
  document.getElementById('A').innerHTML = result;
}

function addOperator(op) {
  result += op;
  document.getElementById('A').innerHTML = result;
}

function equal() {
  let res = eval(result);
  document.getElementById('A').innerHTML = res;
  result = res;
}

function zero() {
  addNumber(0);
}

function one() {
  addNumber(1);
}

function two() {
  addNumber(2);
}

function three() {
  addNumber(3);
}

function four() {
  addNumber(4);
}

function five() {
  addNumber(5);
}

function six() {
  addNumber(6);
}

function seven() {
  addNumber(7);
}

function eight() {
  addNumber(8);
}

function nine() {
  addNumber(9);
}

function dot() {
  addNumber('.');
}

function add() {
  addOperator('+');
}

function sub() {
  addOperator('-');
}

function mul() {
  addOperator('*');
}

function div() {
  addOperator('/');
}