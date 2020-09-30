$('#submit').click(function(){
    $('.error2').hide();
    var isValid = true;

   
// Error about not filled
    if($('#name').val() == '') {
        $('#task-name-error').show();
        isValid = false;
    }
    if($('#surname').val() == '') {
        $('#task-name-error').show();
        isValid = false
    }
    if($('#password1').val() == '') {
        
        $('#task-name-error').show();
        isValid = false
        
    }
    if($('#password2').val() == '') {
        $('#task-name-error').show();
        isValid = false;
    }

    
// Error about passwords
    if($('#password1').val() !== $('#password2').val()) {
        $('#task-name-error-2').show();
        isValid = false;
    }

    if($('#password1').val().length <= 8){
        $('#task-name-error-5').show();
        isValid = false
        }
// Error about check-box
    if($('#check-box').prop("checked") == false){
        $('#task-name-error-4').show();
        isValid = false;
        }
    return isValid;
})
















// document
//     .getElementById('main-form')
//     .addEventListener('click', function (event) 
//     {
//         event.preventDefault();

//         var input = document.getElementById('name');
//         if (input.value === '') {   
//             document.getElementById('task-name-error').style.display = 'block';
//             document.getElementById('name').style.bordercolor = "red";
//             return false;
//     }         
//         var input1 = document.getElementById('surname');
//         if (input1.value === '') {   
//             document.getElementById('task-name-error').style.display = 'block';
//             return false;
//     } 
//         var input2 = document.getElementById('password1');
//         if (input2.value === '') {   
//             document.getElementById('task-name-error').style.display = 'block';
//             return false;
//     } 
//         var input3 = document.getElementById('password2');
//         if (input3.value === '') {   
//             document.getElementById('task-name-error').style.display = 'block';
//             return false;
//     } 
//         var input4 = document.getElementById('name');
//         if (input4.value === '') {   
//             document.getElementById('task-name-error').style.display = 'block';
//             return false;
//     } 
//         else 
//         {   document.getElementById('task-name-error').style.display = 'none';
//             return true
            
//         }
//     })
    

//     let btnClear = document.querySelector('button');
//     let inputs = document.querySelectorAll('input');

//     btnClear.addEventListener('click', () => {
//         inputs.forEach(input => input.value = '');
//     })


// function checkPassword(form) { 
//     password1 = form.password1.value; 
//     password2 = form.password2.value; 
    
//     if (password1 != password2) { 
//         document.getElementById('task-name-error-2').style.display = 'block'; 
//         return false; } 

//     else{ 
//         document.getElementById('task-name-error-2').style.display = 'none'
//             return true; } 
//     } 