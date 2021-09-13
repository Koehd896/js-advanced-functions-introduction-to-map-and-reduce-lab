function mapToNegativize(numbers) {
    const negNums = []
    numbers.forEach(num => negNums.push(num / -1))
    return negNums;
}

function mapToNoChange(numbers) {
    const nums = [];
    numbers.forEach(num => nums.push(num));
    return nums;
}

function mapToDouble(numbers) {
    const nums = [];
    numbers.forEach(num => nums.push(num * 2));
    return nums;
}

function mapToSquare(numbers) {
    const nums = [];
    numbers.forEach(num => nums.push(num ** 2));
    return nums;
}

function reduceToTotal(numbers, start = 0) {
    let total = start;
    numbers.forEach(num => total += num);
    return total;
}

function reduceToAllTrue(booleans) {
    let boolean = true;
    booleans.forEach(function(bool){if(!bool){boolean = false; return boolean}});
    return boolean;
}

function reduceToAnyTrue(booleans) {
    let boolean = false;
    booleans.forEach(function(bool){if(bool){boolean = true; return boolean}});
    return boolean;
}
