//Question 1
function circle(radius){
    pi = Math.PI;
    power = Math.pow(radius,2);
    const area = pi*power;
    return area;
}

const radius = 6;
console.log(circle(radius));

