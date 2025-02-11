let statusElement = document.getElementById("status");
let locationElement = document.getElementById("location");
let timeElement = document.getElementById("time");

let locations = ["Donor's Hospital", "On the Way", "Receiving Hospital"];
let deliveryTimes = [5, 3, 1]; // Time remaining in minutes

let currentLocationIndex = 0;
let interval;

function startDelivery() {
  // Start the delivery
  statusElement.textContent = "Drone on the way...";
  document.getElementById("startDelivery").disabled = true;
  interval = setInterval(updateDelivery, 3000); // Update every 3 seconds
}

function updateDelivery() {
  if (currentLocationIndex < locations.length) {
    // Simulate the location and remaining time change
    locationElement.textContent = locations[currentLocationIndex];
    timeElement.textContent = `${deliveryTimes[currentLocationIndex]} minutes`;

    // After a certain period, change to the next location
    currentLocationIndex++;
  } else {
    // Stop the delivery once it reaches the last location
    statusElement.textContent = "Organ Delivered!";
    locationElement.textContent = "Delivery Complete";
    timeElement.textContent = "No further travel";
    clearInterval(interval);
  }
}
