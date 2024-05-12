function sum_array(arr) {
    let sum = 0;
    arr.forEach(number => {
        sum += number;
    });
    return sum;
}

function formToObject(form) { 
    return Object.fromEntries(new FormData(form))
};