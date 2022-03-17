"use strict"

form.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log('clicked on validate')
  })

const form = document.getElementById('form');
var sum = form.querySelector('.sum');
if(sum.value > 0){
    console.log('WORK');
}
else {
    console.log('DONTWORK')
}

/*document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e){
        e.preventDefault();

        let error = formValidate(form);

        if (error===0){

        }else {
            alert('Заполните обязательные поля');
        }
    }

    function formValidate(form){
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for(let index = 0; index < formReq.length; index++){
            const input = formReq[index];
            formRemoveError(input);

            if(input.classList.contains('._sum')){
                if(checkSum(input)){
                    formAddError(input);
                    error++;
                }                
            }else if(input.getAttripute("type") === "input" && input.value <= 0){
                formAddError(input);
                error++;
            } else {
                if(input.value === ''){
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }

    function formAddError(input){
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input){
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function checkSum(input){
        return sum>0;
    }
});*/