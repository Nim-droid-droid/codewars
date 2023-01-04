/*
Calculate BMI
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

function bmi(weight, height) {
  // (bmi = weight / height2) height 2 so 2 height
  // const bmi = weight / height/ height
  const bmi = weight / (height * height);

  // if(bmi <= 18.5){return "Underweight"}
  // if(bmi <= 25.0){return "Normal"}
  // if(bmi <= 30.0){return "Overweight"}
  // if(bmi > 30){return "Obese"}

  // since theres 4 conditions i need to check for i can just use TO
  return bmi <= 18.5 ? "Underweight" : bmi <= 25.0 ? "Normal" : bmi <= 30.0 ? "Overweight" : "Obese";
}