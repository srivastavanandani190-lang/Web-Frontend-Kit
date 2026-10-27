const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener('click', function(e) {
        console.log(e);//mouse event
        console.log(e.target);

        if(e.target.id === 'grey') {
            body.style.backgroundColor = 'lightgrey';
            // body.style.backgroundColor = e.target.id;
        } 
        else if(e.target.id === 'blue') {
            body.style.backgroundColor = 'lightblue';
        } 
        else if(e.target.id === 'green') {
            body.style.backgroundColor = 'lightgreen';
        } 
        else if(e.target.id === 'red') {
            body.style.backgroundColor = 'lightcoral';
        } 
        else if(e.target.id === 'yellow') {
            body.style.backgroundColor = 'lightyellow';
        } 
        else if(e.target.id === 'orange') {
            body.style.backgroundColor = 'lightsalmon';
        } 
        else if(e.target.id === 'purple') {
            body.style.backgroundColor = 'plum';
        }

    });
});
