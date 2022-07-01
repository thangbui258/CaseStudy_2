import {ManagerStudent} from "./Manager.js";

let manager = new ManagerStudent();

function add() {
    let firstName = document.getElementById('firstName') as HTMLInputElement
    let lastName = document.getElementById('lastName') as HTMLInputElement
    let math = document.getElementById('math') as HTMLInputElement
    let literature = document.getElementById('literature') as HTMLInputElement
    let english = document.getElementById('english') as HTMLInputElement
    let btn = document.getElementById('add') as HTMLButtonElement
    btn.addEventListener('click', function () {
        manager.addStudent(firstName.value, lastName.value, +math.value, +literature.value, +english.value)
        delete1()
        edit1()
    })
    manager.showList()
}

add()

function delete1() {
    let del = document.getElementsByClassName('delete');
    for (let i = 0; i < del.length; i++) {
        del[i].addEventListener('click', function () {
            manager.deleteStudent(del[i].value);
            delete1()
        })
    }
}
delete1()

function edit1() {
    let edit = document.getElementsByClassName('edit');
    for (let i = 0; i < edit.length; i++) {
        edit[i].addEventListener('click', function () {
            manager.editStudent(edit[i].value);
            edit1()
        })
    }
}
edit1()



