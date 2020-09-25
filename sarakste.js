document
    .getElementsByClassName('btn')
    .addEventListener('click', function(event){
        event.preventDefault ();
        var input = document.getElementsById('username');
        // var input1 = document.getElementById('message');
        var elements = document.getElementsByClassName('some');

        var newElement = `<p>${input.value}</p>`
        // var newElement1 = `<p>${input1.value}</p>`

        for (var element of elements) {
            element.innerHTML = newElement
        
            document
            .getElementsByClassName('box')
            .innerHTML += newElement

        input.value = ''
        }

        // for (var element of elements) {
        //     element.innerHTML = newElement1
        
        //     document
        //     .getElementsByClassName('box')
        //     .innerHTML += newElement

        // input1.value = ''
        // }
    })