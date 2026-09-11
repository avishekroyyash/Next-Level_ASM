// task 1

function describeValue(a) {
    const type = typeof a;
    const truth = a ? "truthy" : "falsy";

    return `${type} | ${truth}`;
}


// task 2 


function getDayType(a) {

    a = a.toLowerCase();

    switch (a) {
        case 'friday':
            return 'Weekend';
        case 'saturday':
            return 'Weekend';

        case 'sunday':
              return 'Working Day';
        case 'monday':
              return 'Working Day';
        case 'tuesday':
              return 'Working Day';
        case 'wednesday':
              return 'Working Day';
        case 'thursday':
            return 'Working Day';

        default:
            return 'Invalid Day';
    }
}



// task 3


function validateUsername(name) {
    name = name.toLowerCase();

    if (name.length < 4) {
          return "Too Short";
    }

    if (name.includes(" ")) {
          return "No Space Allowed";
    }

    if (name.includes("admin")) {
         return "Reserved Word";
    }

  return "Available";
}


// task-4 
function getCngFare(distance, isNight=false, waitingMinutes=0){
    waitingMinutes=waitingMinutes*2;
  const money1= 50+waitingMinutes;
  const parcent1 = (money1*20)/100;
    const money = 50+(distance-2)*15 + waitingMinutes
      const parcent = (money*20)/100
if(0<distance && distance<=2 && isNight==false ){
return money1 ;
}
else if(0<distance && distance<=2 && isNight==true){
    return money1+ parcent1 ;
}
else if(distance>2 && isNight==false){
    return money;
}
else if(distance>2 && isNight==true){
    return money+parcent
}
else{
    return 0
}
}

// task 5

const getChaseVerdict = (target, scored, ballsLeft) => {
    const runsNeeded = target - scored;

    if (runsNeeded <= 0) {
        return "Won";
    }

    if (ballsLeft <= 0) {
        return "Lost";
    }

    const requiredRate = (runsNeeded / ballsLeft) * 6;

    if (requiredRate <= 6) {
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | Comfortable`;
    } 
    else if (requiredRate <= 12) {
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | Tough`;
    } 
    else {
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | Almost Impossible`;
    }
};



