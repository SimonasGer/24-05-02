let container = document.createElement("section");
container.classList.add("container");

for (let i = 0; i < 2; i++){
    let row = document.createElement("div");
    row.classList.add("row");
    document.querySelector('.container').appendChild(row);
    for (let j = 0; j < 8; j++){
        let element = document.createElement("div");
        element.classList.add("col");
        element.style.backgroundColor = "red";
        element.style.width = "200px";
        element.style.height = "200px";
        document.querySelector('.row').appendChild(element);
    }
}

