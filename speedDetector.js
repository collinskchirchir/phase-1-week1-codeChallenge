/* Challenge 2: Speed Detector (Toy Problem)
Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.
*/
// Prompt User
let speed = prompt("Input speed of a car(km/s): ", "");

// Validate if input is not null and is a positive number
if (speed !== null && speed >= 0)
{  
   // declare an empty variable to store message
   let driverMsg;

   // Condition if speed is less than 70
   if(speed < 70)
   {
      driverMsg = "OK"
   }
   
   // Condition if speed is more than/equal to 70
   else
   {
      let demeritPoint = Math.ceil((speed - 70)/5);
      if(demeritPoint < 12)
      {
         driverMsg = `Demerit Points: ${demeritPoint}`
      }
      else
      {
         driverMsg = `Demerit Points: ${demeritPoint}, LICENSE SUSPENDED!`
      }
   }
   alert(driverMsg)
}

// Runs if user input is not valid
else
{
   alert(`Invalid input!`)
}