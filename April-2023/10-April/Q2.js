let launch = false;
let crew = true;
let computer = "green";

if (crew && computer === "green") {
  console.log("Crew & computer cleared.");
  launch = true;
} else {
  console.log("WARNING: Crew or computer not ready!");
  launch = false;
}

if (launch) {
  console.log("10, 9, 8, 7, 6, 5, 4, 3, 2, 1...");
  console.log("Fed parrot...");
  console.log("Ignition...");
  console.log("Liftoff!");
} else {
  console.log("Launch scrubbed.");
}
