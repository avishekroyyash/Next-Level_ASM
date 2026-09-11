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

const result = getChaseVerdict(150, 149, 1);
console.log(result);