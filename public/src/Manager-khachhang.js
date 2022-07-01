import { Student } from "./Student.js";
function showList() {
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
            table += "</tr>";
        }
        document.getElementById('listStudent').innerHTML = table;
    }
}
//# sourceMappingURL=Manager-khachhang.js.map