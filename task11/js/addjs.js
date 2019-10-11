// Additional task
    let addButton = document.querySelector(".add-button");

    let age = document.getElementById('age');

    function showUser(surname, name) {
        alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    }
    
    addButton.addEventListener("click", function() {
        showUser.apply(age, ["Vasya", "Pupkin"]);
    });