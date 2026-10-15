const form=document.querySelector('form')
//here height and weight will be empty so we need to get the values from the input fields

form.addEventListener('submit',function(e){
    e.preventDefault();//prevent the form from submitting and refreshing the page

    const weight=parseFloat(document.querySelector('#weight').value)
    const height=parseFloat(document.querySelector('#height').value)
    const result=document.querySelector('#result')

    if(height=='' || height<0 || weight=='' || weight<0 || isNaN(height) || isNaN(weight)){
        result.innerHTML='Please enter valid values for height ${height} and weight ${weight}.'
    }
    else {
        const bmi=weight/(height/100)**2
        //show result in the result div
        result.innerHTML= `<span>Your BMI is ${bmi.toFixed(2)}</span>`;
        //message based on bmi value
        if(bmi<18.5){
            result.innerHTML+=`<span>You are underweight.</span>`;
        }
        else if(bmi>=18.5 && bmi<24.9){
            result.innerHTML+=`<span>You have a normal weight.</span>`;
        }
        else if(bmi>=25 && bmi<29.9){
            result.innerHTML+=`<span>You are overweight.</span>`;
        }
        else{
            result.innerHTML+=`<span>You are obese.</span>`;
        }
    }
});