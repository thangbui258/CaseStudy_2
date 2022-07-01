import {Student} from "./Student.js";

function showList() {
    let data = loadLocalStorage('list')
    if (data) {
        let table = ''
        let arr = [];
        for (let i = 0; i < data.length; i++) {
            let student = new Student(data[i]._firstName,data[i]._lastName, data[i]._math, data[i]._literature, data[i]._english)
            arr.push(student);
        }

        for (let i = 0; i < arr.length; i++) {
            table += `<tr>`;
            table += `<td>${i + 1}</td>`
            table += `<td>${arr[i].fullName}</td>`
            table += `<td>${arr[i].math}</td>`
            table += `<td>${arr[i].literature}</td>`
            table += `<td>${arr[i].english}</td>`
            table += `<td>${arr[i].mediumScore}</td>`


            table += `</tr>`
        }
        document.getElementById('listStudent').innerHTML = table;

    }
}
