import { ManagerStudent } from "./ManagerStudent.js";
var manager = new ManagerStudent();
function add() {
    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var math = document.getElementById('math');
    var literature = document.getElementById('literature');
    var english = document.getElementById('english');
    var btn = document.getElementById('add');
    btn.addEventListener('click', function () {
        manager.addStudent(firstName.value, lastName.value, +math.value, +literature.value, +english.value);
    });
    manager.showList();
}
add();
function delete1() {
    var del = document.getElementsByClassName('delete');
    var _loop_1 = function (i) {
        del[i].addEventListener('click', function () {
            manager.deleteStudent(del[i].value);
            delete1();
        });
    };
    for (var i = 0; i < del.length; i++) {
        _loop_1(i);
    }
}
delete1();
function edit1() {
    var edit = document.getElementsByClassName('edit');
    var _loop_2 = function (i) {
        edit[i].addEventListener('click', function () {
            manager.editStudent(edit[i].value);
            edit1();
        });
    };
    for (var i = 0; i < edit.length; i++) {
        _loop_2(i);
    }
}
edit1();
function sortScore() {
    var sort = document.getElementById('sort');
    sort.addEventListener('click', function () {
        manager.bubblSort();
    });
}
sortScore();
//# sourceMappingURL=Main.js.map