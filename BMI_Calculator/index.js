// const form = document.querySelector('form');

// form.addEventListener("submit",function(event){
//     event.preventDefault();

// let height = parseInt(document.querySelector('#height').value);
// let weight = parseInt(document.querySelector('#weight').value);
// let result = document.querySelector('#results');

// if(  isNaN(weight)|| height<=0 ){
//     result.innerHTML = "Please Enter Valid Input ";
// }
// else if( isNaN(weight) ||weight <= 0){
//     result.innerHTML = "Please Enter valid Input ";
// } 
// else{
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//     result.innerHTML = `<span>Your BMI is: ${bmi}</span>`; // Display the result
// }
// });



const forms = document.querySelector('form');

forms.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get height and weight values
    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let result = document.querySelector('#results');

    // Validate height input
    if (isNaN(height) || height <= 0) {
        result.innerHTML = `Please enter a valid height.`;
    }
    // Validate weight input
    else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = `Please enter a valid weight.`;
    } 
    // Calculate BMI if inputs are valid
   else{
    const bMi = (weight / ((height * height) / 10000)).toFixed(2); 
    // Display the result

        if(bMi <  18.6){
            result.innerHTML = `<span> UnderWight: ${bMi}</span>`; 
        }
        else if ( bMi > 18.6 || bMi < 24.9){
            result.innerHTML = `<span>Normal Wight: ${bMi}</span>`; 
        }
        else{
            result.innerHTML = `<span>Over Wight: ${bMi}</span>`; 
        }
}
});


















// const form = document.querySelector('form');

// form.addEventListener("submit",function(event){
//     event.preventDefault();

//     let height = parseFloat(document.querySelector('#height').value).toFixed(2);
//     let weight = parseFloat(document.querySelector('#weight').value).toFixed(2);
//     let results = document.querySelector('#results');


//     if(isNaN(height) || height <= 0){
//         results = "please enter valid input ";
//     }










// })