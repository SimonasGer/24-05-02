const container = document.querySelector('.container');
const buttons = document.querySelector('.buttons');
document.querySelector(".show").addEventListener("click", ()=>{
    event.preventDefault();
    for (let j = 0; j < 10; j++) {
        const cell = document.createElement('img');
        cell.classList.add('cell');
        cell.classList.add(`img${j}`);
        cell.setAttribute("src", `${j}.png`);
        container.appendChild(cell);
    }
    const scramble = document.createElement("button");
    scramble.classList.add('scramble');
    scramble.appendChild(document.createTextNode("Maisyti"));
    buttons.appendChild(scramble);
    document.querySelector(".show").disabled = "true";
    let list = [0,1,2,3,4,5,6,7,8,9];
    document.querySelector(".scramble").addEventListener("click", ()=>{
        let index = list.length;
        while (index != 0){
            let rIndex = Math.floor(Math.random() * index);
            index--;
            [list[index], list[rIndex]] = [list[rIndex], list[index]];
        }
        let i = 0
        for (let index of list){
            let cell = document.querySelector(`.img${i}`)
            cell.setAttribute("src", `${index}.png`);
            i++;
        }
    })
    document.querySelectorAll(".cell").forEach(item => {
        item.addEventListener("dblclick", ()=>{
            item.setAttribute("src", "default.png");
        })
    });
})

