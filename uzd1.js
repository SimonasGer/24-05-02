let students = ["Jonas", "Petras", "Paulius", "Saulius", "Andrius", "Aiste", "Greta", "Milda", "Monika", "Ema"];

for (student in students){
    let list = document.getElementById("list");
    let entry = document.createElement('li');
    let name = document.createTextNode(`Studentas ${Number(student) + 1}: ${students[student]}`);
    if ((students[student]).length > 6){
        entry.style.color = "red";
    } else {
        entry.style.color = "blue";
    }
    entry.appendChild(name);
    list.appendChild(entry);
}

let newList = [];

for (student of students){
    let name = student[0] + student.slice(-1);
    newList.push(name);
}
let string = newList.join("");

let list = document.getElementById("string");
let names = document.createTextNode(string);
list.appendChild(names);
