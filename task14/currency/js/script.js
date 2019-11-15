let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');


function exec(elem) {
    elem.addEventListener("input", function(event) {
        function reqData() {
            return new Promise(function(resolve, reject) {
                let request = new XMLHttpRequest();

                request.open('GET', 'js/current.json');
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                request.onreadystatechange = function() {
                    if (request.readyState === 4 && request.status == 200) {
                        resolve()
                    } else {
                        reject()
                    }
                }

                request.send();
            })
        }

        function clearInput() {
            inputRub = inputRub.innerHTML = "";
        }

        reqData()
            .then(() => {
                let data = JSON.parse(request.response);
                inputUsd.value = inputRub.value / data.usd;
            })
            .catch(() => inputUsd.value = "Что-то пошло не так!")
            .then(clearInput)
    })
}

exec(inputRub);

// inputRub.addEventListener('input', () => {
//     let request = new XMLHttpRequest();

//     request.open('GET', 'js/current.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();

//     request.addEventListener('readystatechange', function() {
//         if (request.readyState === 4 && request.status == 200) {
//             let data = JSON.parse(request.response);

//             inputUsd.value = inputRub.value / data.usd;
//         } else {
//             inputUsd.value = "Что-то пошло не так!";
//         }
//     });

// });