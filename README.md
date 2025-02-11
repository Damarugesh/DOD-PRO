What This Does:
Initially, the status shows "Waiting for delivery..."
When the user clicks "Start Delivery", the drone begins its journey and updates the location every few seconds (simulating the process).
The location changes through three stages: "Donor's Hospital", "On the Way", and "Receiving Hospital", with a countdown timer indicating the estimated time left for delivery.
Once the organ is delivered, the app stops updating, and it shows "Organ Delivered!" and the location as "Delivery Complete".
Future Improvements:
This is a very basic simulation. In a real-world application, the status updates would be pulled from a server in real-time, and the system would need more complex logic for drone tracking, geolocation, and handling organ condition monitoring during transportation.

If you're interested in integrating real-time tracking, you'd need a back-end server with real drone data, and you could use APIs like Google Maps or Mapbox for real-world tracking and geolocation.

Let me know if you'd like to dive deeper into any of these areas!
