import { ManagerStudent } from "./Manager.js";
var manager = new ManagerStudent();
manager.bubbSortName();
function sortScore() {
    var sort = document.getElementById('sort');
    sort.addEventListener('click', function () {
        manager.bubblSortScore();
    });
}
sortScore();
function search() {
    var nameSearch = document.getElementById('nameSearch');
    // let search = document.getElementById('search') as HTMLButtonElement;
    nameSearch.addEventListener('keyup', function () {
        var name = nameSearch.value;
        manager.searchStudent(name);
    });
}
search();
manager.topList();
//# sourceMappingURL=Main-khachhang.js.map