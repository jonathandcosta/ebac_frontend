function exercise(corredor) {
  console.log(corredor);
}

function lateNights(pace, km) {
  this.pace = pace;
  this.km = km;
  this.weather = weather;
  this.intensity = intensity;
}

function day(pace, km) {
  lateNights.call(this, pace, km);
}

function night(pace, km) {
  lateNights.call(this, pace, km);
}

const weather = ["hot", "cold", "frozen"];
const intensity = ["short", "median", "long"];

const corrida1 = new day("Corrida São Silvestre", 43, weather, intensity);
const corrida2 = new night("Corrida de New York", 30, weather, intensity);
const corrida3 = new lateNights("Corrida Santiago", 72, weather, intensity);

exercise(corrida1);
exercise(corrida2);
exercise(corrida3);
