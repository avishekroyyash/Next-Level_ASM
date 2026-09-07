const getChaseVerdict= (target, scored, ballsLeft) =>{
    const runsNeeded = target - scored;
    const requiredRate = (runsNeeded / ballsLeft) * 6
    if(runsNeeded<=0){
        return '"Won"'
    }
    else if(ballsLeft<=0 && runsNeeded>0){
        return '"Lost"'
    }
    else if (requiredRate<=6){
        return `"Need ${runsNeeded} runs in ${ballsLeft} balls | Comfortable"`
    }
      else if (requiredRate>6 && requiredRate<=12){
        return `"Need ${runsNeeded} runs in ${ballsLeft} balls | Tough"`
    }
      else if (requiredRate>12){
        return `"Need ${runsNeeded} runs in ${ballsLeft} balls | Almost Impossible"`
    }

}

const result = getChaseVerdict(150,149,1)
console.log(result);