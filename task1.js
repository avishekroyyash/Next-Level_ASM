
function describeValue(a) {
    const type = typeof a;
    const truth = a ? "truthy" : "falsy";

    return `${type} | ${truth}`;
}


const result = describeValue(NaN)
console.log(result);

