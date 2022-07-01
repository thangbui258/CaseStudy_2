import {ManagerStudent} from "./Manager.js";

let manager = new ManagerStudent();
manager.bubbSortName()

function sortScore() {
    let sort = document.getElementById('sort') as HTMLButtonElement;
    sort.addEventListener('click', function () {
        manager.bubblSortScore()
    })
}

sortScore()

function search() {
    let nameSearch = document.getElementById('nameSearch') as HTMLInputElement;
    // let search = document.getElementById('search') as HTMLButtonElement;
    nameSearch.addEventListener('keyup', function () {
        let name = nameSearch.value;
        manager.searchStudent(name)
    })
}

search()

manager.topList()

