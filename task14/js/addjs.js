// Additional task
class Options {
    constructor(height, width, bg = "yellow", fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    newDivElement(txt) {
        let divAbout = document.querySelector("#about"); //получен элемент в конец которго будет вставлен div
        let newDivElement = document.createElement('div'); //создан div для вставки
        newDivElement.innerHTML = `<strong>${txt}</strong>`; //создано содержание для div
        divAbout.append(newDivElement); //добавление нового элемента div
        console.log(divAbout);

        newDivElement.style.cssText = `
            height: ${this.height};
            width: ${this.width};
            background: ${this.bg};
            font-size: ${this.fontSize};
            text-align: ${this.textAlign};
        `;
    }
}

let oOptions = new Options("50px", "1000px", "red", "32pt", "right");
let testButton = document.querySelector("#test");
testButton.addEventListener("click", function() {
    oOptions.newDivElement("bla bla bla");
});