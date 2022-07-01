import { Student } from "./Student.js";
var ManagerStudent = /** @class */ (function () {
    function ManagerStudent() {
        this.list = [];
        this.currentIndex = -1;
    }
    ManagerStudent.prototype.addStudent = function (firtName, lastName, math, literature, english) {
        var student = new Student(firtName, lastName, math, literature, english);
        var currentData = loadLocalStorage('list');
        if (!currentData) {
            var arr = [];
            arr.push(student);
            saveLocalStorage('list', arr);
        }
        else {
            if (this.currentIndex === -1) {
                currentData.push(student);
                saveLocalStorage('list', currentData);
            }
            else {
                currentData[this.currentIndex] = student;
                saveLocalStorage('list', currentData);
                this.currentIndex = -1;
            }
        }
        this.showList();
    };
    ManagerStudent.prototype.showList = function () {
        var data = loadLocalStorage('list');
        if (data) {
            var table = '';
            var arr = [];
            for (var i = 0; i < data.length; i++) {
                var student = new Student(data[i]._firstName, data[i]._lastName, data[i]._math, data[i]._literature, data[i]._english);
                arr.push(student);
            }
            for (var i = 0; i < arr.length; i++) {
                table += "<tr>";
                table += "<td>".concat(i + 1, "</td>");
                table += "<td>".concat(arr[i].fullName, "</td>");
                table += "<td>".concat(arr[i].math, "</td>");
                table += "<td>".concat(arr[i].literature, "</td>");
                table += "<td>".concat(arr[i].english, "</td>");
                table += "<td>".concat(arr[i].mediumScore, "</td>");
                table += "<td><button value=\"".concat(i, "\" class=\"delete\"><i class=\"fas fa-trash-alt\"></i></button></td>");
                table += "<td><button value=\"".concat(i, "\" class=\"edit\"><i class=\"fas fa-edit\"></i></button></td>");
                table += "</tr>";
            }
            document.getElementById('listStudent').innerHTML = table;
        }
    };
    ManagerStudent.prototype.deleteStudent = function (index) {
        var data = loadLocalStorage('list');
        data.splice(index, 1);
        saveLocalStorage('list', data);
        this.showList();
    };
    ManagerStudent.prototype.editStudent = function (index) {
        var data = loadLocalStorage('list');
        this.currentIndex = index;
        document.getElementById('firstName').value = data[index]._firstName;
        document.getElementById('lastName').value = data[index]._lastName;
        document.getElementById('math').value = data[index]._math;
        document.getElementById('literature').value = data[index]._literature;
        document.getElementById('english').value = data[index]._english;
    };
    ManagerStudent.prototype.bubblSortScore = function () {
        var data = loadLocalStorage('list');
        var arr = [];
        var table = '';
        for (var i = 0; i < data.length; i++) {
            var student = new Student(data[i]._firstName, data[i]._lastName, data[i]._math, data[i]._literature, data[i]._english);
            arr.push(student);
        }
        for (var i = 0; i < arr.length; i++) {
            for (var j = arr.length - 1; j > i; j--) {
                if (arr[i].mediumScore < arr[j].mediumScore) {
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        // saveLocalStorage('list', arr)
        for (var i = 0; i < arr.length; i++) {
            table += "<tr>";
            table += "<td>".concat(i + 1, "</td>");
            table += "<td>".concat(arr[i].fullName, "</td>");
            table += "<td>".concat(arr[i].math, "</td>");
            table += "<td>".concat(arr[i].literature, "</td>");
            table += "<td>".concat(arr[i].english, "</td>");
            table += "<td>".concat(arr[i].mediumScore, "</td>");
            table += "</tr>";
        }
        document.getElementById('listStudent').innerHTML = table;
    };
    ManagerStudent.prototype.bubbSortName = function () {
        var data = loadLocalStorage('list');
        var arr = [];
        var table = '';
        for (var i = 0; i < data.length; i++) {
            var student = new Student(data[i]._firstName, data[i]._lastName, data[i]._math, data[i]._literature, data[i]._english);
            arr.push(student);
        }
        for (var i = 0; i < arr.length; i++) {
            for (var j = arr.length - 1; j > i; j--) {
                if (arr[i].lastName.localeCompare(arr[j].lastName) == 1) {
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        saveLocalStorage('list', arr);
        for (var i = 0; i < arr.length; i++) {
            table += "<tr>";
            table += "<td>".concat(i + 1, "</td>");
            table += "<td>".concat(arr[i].fullName, "</td>");
            table += "<td>".concat(arr[i].math, "</td>");
            table += "<td>".concat(arr[i].literature, "</td>");
            table += "<td>".concat(arr[i].english, "</td>");
            table += "<td>".concat(arr[i].mediumScore, "</td>");
            table += "</tr>";
        }
        document.getElementById('listStudent').innerHTML = table;
    };
    ManagerStudent.prototype.searchStudent = function (searchName) {
        var data = loadLocalStorage('list');
        var arr = [];
        var table = '';
        for (var i = 0; i < data.length; i++) {
            var student = new Student(data[i]._firstName, data[i]._lastName, data[i]._math, data[i]._literature, data[i]._english);
            arr.push(student);
        }
        for (var i = 0; i < arr.length; i++) {
            // for (let j = 0; j < (arr[i].fullName).length; j++) {
            // console.log((arr[i].fullName).substring(0,j))
            if ((arr[i].fullName).indexOf(searchName) !== -1) {
                table += "<tr>";
                table += "<td>".concat(i + 1, "</td>");
                table += "<td>".concat(arr[i].fullName, "</td>");
                table += "<td>".concat(arr[i].math, "</td>");
                table += "<td>".concat(arr[i].literature, "</td>");
                table += "<td>".concat(arr[i].english, "</td>");
                table += "<td>".concat(arr[i].mediumScore, "</td>");
                table += "</tr>";
                document.getElementById('listStudent').innerHTML = table;
            }
        }
    };
    ManagerStudent.prototype.topList = function () {
        var data = loadLocalStorage('list');
        var arr = [];
        for (var i = 0; i < data.length; i++) {
            var student = new Student(data[i]._firstName, data[i]._lastName, data[i]._math, data[i]._literature, data[i]._english);
            arr.push(student);
        }
        var maxMediumScore = arr[0].mediumScore;
        var indexMediumScore = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].mediumScore > maxMediumScore) {
                maxMediumScore = arr[i].mediumScore;
                indexMediumScore = i;
            }
        }
        document.getElementById('mediumScore').innerHTML = arr[indexMediumScore].fullName;
        var maxMath = arr[0].math;
        var indexMath = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].math > maxMath) {
                maxMath = arr[i].math;
                indexMath = i;
            }
        }
        document.getElementById('math').innerHTML = arr[indexMath].fullName;
        var maxLiterature = arr[0].literature;
        var indexLiterature = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].literature > maxLiterature) {
                maxLiterature = arr[i].literature;
                indexLiterature = i;
            }
        }
        document.getElementById('literature').innerHTML = arr[indexLiterature].fullName;
        var maxEnglish = arr[0].english;
        var indexEnglish = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].english > maxEnglish) {
                maxEnglish = arr[i].english;
                indexEnglish = i;
            }
        }
        document.getElementById('english').innerHTML = arr[indexEnglish].fullName;
    };
    return ManagerStudent;
}());
export { ManagerStudent };
function saveLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
function loadLocalStorage(key) {
    if (localStorage.hasOwnProperty(key))
        return JSON.parse(localStorage.getItem(key));
    return [];
}
//# sourceMappingURL=Manager.js.map