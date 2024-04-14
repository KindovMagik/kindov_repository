const sideA = document.querySelector('.side_a');
const sideB = document.querySelector('.side_b');
const sideC = document.querySelector('.side_c');

const isRight = () => {

  let hypotenuse;
  let quadOfLegs;

  let  getQuadOfLegs = (sideA, sideB, sideC) => {
    let firstLeg = Math.pow(Math.min(sideA, sideB, sideC),2);
    let secondLeg = Math.pow((sideA + sideB + sideC - Math.min(sideA, sideB, sideC) - Math.max(sideA, sideB, sideC)), 2);
    quadOfLegs = firstLeg + secondLeg;
  };

  let getHypotenuse = (sideA, sideB, sideC) => hypotenuse = Math.pow(Math.max(sideA, sideB, sideC), 2);

   getHypotenuse(+sideA.value, +sideB.value, +sideC.value);
   getQuadOfLegs(+sideA.value, +sideB.value, +sideC.value);


const result = document.querySelector('.result');
result.innerText = hypotenuse === quadOfLegs ? 'прямоугольный' : 'не прямоугольный';
};

const button = document.querySelector('.btn_submit');
button.addEventListener('click', isRight);



