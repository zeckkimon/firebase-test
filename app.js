class Dog {
    constructor(name, dob, sex, color) {
        this.name = name;
        this.dob = dob;
        this.sex = sex;
        this.color = color;
    }

    toString() {
        return `Name: ${this.name}, Year of Birth: ${this.dob}, Sex: ${this.sex}, Color:${this.color} `
    }
}

const dogArray = []; // for now we use an in global array to store Dog objects

form1 = document.getElementById("form1");
// attach a handler to form1 submit event to create & store Dog object and reflect in list
form1.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameInput = form1.querySelector("#name");
    const dobInput = form1.querySelector("#dob");
    const sexInput = form1.querySelector("#sex");
    const colorInput = form1.querySelector("#color");

    const dog = new Dog(nameInput.value, dobInput.value, sexInput.value, colorInput.value);

    dogArray.push(dog);  // store in array DB

    refreshList();

})


function refreshList() {
    const list = document.getElementById("list"); // get a handle to list element
    list.innerHTML = "";
    for (let dog of dogArray) {
        const li = document.createElement("LI");  // create new <li> element
        li.innerText = dog.toString();  // include Dog info inside <li>
        list.appendChild(li);   // attach the new <li> to the list
    }
}
