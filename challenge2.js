//this code shows the speed and demerit points
let speed = 100;
let demerit;

function speedCalculator() {
    if (speed <= 70) {
        return "OK";
    }
    else if (speed > 70){
        demerit = ((speed - 70) / 5);
    } 
    if (demerit >12) {
        return "Licence suspended";
    }

  return `points: ${demerit}`;
}
  console.log (speedCalculator());      