// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg +  shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = 1;
let weatherStatus = "clear";

// Write code to generate the LC04 report here:

let theline = "-------------------------------------";

console.log(theline);
console.log("> LC04 - LAUNCH CHECKLIST");
console.log(theline);
console.log("Date:" +  date);
console.log("Time:" + time);
console.log();

console.log(theline);
console.log("> ASTRONAUT INFO");
console.log(theline);
console.log("* count:" +  astronautCount);
console.log("* status:" + astronautStatus);
console.log();

console.log(theline);
console.log("> FUEL DATA");
console.log(theline);
console.log("* Fuel temp celsius:" + fuelTempCelsius + "c");
console.log("* Fuel level:" + (fuelLevel + 100) + "%");
console.log();

console.log(theline);
console.log("> MASS DATA");
console.log(theline);
console.log("* Crew mass:" + crewMassKg + "kg");
console.log("* Fuel mass:" + fuelMassKg + "kg");
console.log("* Shuttle mass:" + shuttleMassKg +"kg");
console.log("* Total mass:" +  totalMassKg + "kg");
console.log();

console.log(theline);
console.log("> FLIGHT PLAN");
console.log(theline);
console.log("* weather:" + weatherStatus);
console.log();

console.log(theline);
console.log("> OVERALL STATUS");
console.log(theline);
console.log("* Clear for takeoff: YES");


// Write code to generate the LC04 report here:




// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.