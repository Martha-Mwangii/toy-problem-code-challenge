function SpeedDetector(speed) {
    const speedLimit = 70;
    const NoOfKmPerDemeritPoints = 5;
  
    if (speed <= speedLimit) {//if the speed is below 70 print ok
      console.log("Ok");
      return;
    }
  
    
    const points = Math.floor((speed - speedLimit) / NoOfKmPerDemeritPoints);//calculate demerit points
  
    if (points > 12) {//if points are above 12 suspend the license
      console.log("License suspended");
    } else {
    console.log("Points: " + points);//if demerit points are 12 and below it print the points e.g 2
     
    }
  }
  SpeedDetector(80); //function SpeedDetector is called