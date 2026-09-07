function getCngFare(distance, isNight=false, waitingMinutes=0){
    // console.log(isNight,'isnight ');
    waitingMinutes=waitingMinutes*2;
//   console.log(waitingMinutes,'this is waitingminuter of ');
  const money1= 50+waitingMinutes;
  const parcent1 = (money1*20)/100;
    const money = 50+(distance-2)*15 + waitingMinutes
    // console.log(money,'money after 50 distance');
      const parcent = (money*20)/100
    //   console.log(parcent,'20% after money ');
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

const result = getCngFare(5,false,10)
console.log(result);