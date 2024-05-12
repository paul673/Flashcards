function sum_array(arr) {
    let sum = 0;
    arr.forEach(number => {
        sum += number;
    });
    return sum;
}

function formToObject(form) { 
    console.log(form);
    return Object.fromEntries(new FormData(form))
};