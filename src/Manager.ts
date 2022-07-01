import {Student} from "./Student.js";

export class ManagerStudent {
    list: object[]
    currentIndex: number

    constructor() {
        this.list = [];
        this.currentIndex = -1;
    }

    addStudent(firtName: string, lastName: string, math: number, literature: number, english: number) {
        let student = new Student(firtName, lastName, math, literature, english)
        let currentData = loadLocalStorage('list');
        if (!currentData) {
            let arr = [];
            arr.push(student);
            saveLocalStorage('list', arr);
        } else {
            if (this.currentIndex === -1) {
                currentData.push(student)
                saveLocalStorage('list', currentData)
            } else {
                currentData[this.currentIndex] = student;
                saveLocalStorage('list', currentData);
                this.currentIndex = -1;
            }
        }
        this.showList()
    }

    showList() {
        let data = loadLocalStorage('list')
        if (data) {
            let table = ''
            let arr = [];
            for (let i = 0; i < data.length; i++) {
                let student = new Student(data[i]._firstName, data[i]._lastName, data[i]._math, data[i]._literature, data[i]._english)
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
                table += `<td><button value="${i}" class="delete"><i class="fas fa-trash-alt"></i></button></td>`
                table += `<td><button value="${i}" class="edit"><i class="fas fa-edit"></i></button></td>`
                table += `</tr>`
            }


            document.getElementById('listStudent').innerHTML = table;

        }
    }

    deleteStudent(index) {
        let data = loadLocalStorage('list');
        data.splice(index, 1);
        saveLocalStorage('list', data)
        this.showList()

    }

    editStudent(index) {
        let data = loadLocalStorage('list');
        this.currentIndex = index;
        (document.getElementById('firstName') as HTMLInputElement).value = data[index]._firstName;
        (document.getElementById('lastName') as HTMLInputElement).value = data[index]._lastName;
        (document.getElementById('math') as HTMLInputElement).value = data[index]._math;
        (document.getElementById('literature') as HTMLInputElement).value = data[index]._literature;
        (document.getElementById('english') as HTMLInputElement).value = data[index]._english;
    }

    bubblSortScore() {
        let data = loadLocalStorage('list');
        let arr = [];
        let table = '';
        for (let i = 0; i < data.length; i++) {
            let student = new Student(data[i]._firstName, data[i]._lastName, data[i]._math, data[i]._literature, data[i]._english);
            arr.push(student);
        }
        for (let i = 0; i < arr.length; i++) {
            for (let j = arr.length - 1; j > i; j--) {
                if (arr[i].mediumScore < arr[j].mediumScore) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp
                }
            }
        }
        // saveLocalStorage('list', arr)
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

    bubbSortName() {
        let data = loadLocalStorage('list');
        let arr = [];
        let table = '';
        for (let i = 0; i < data.length; i++) {
            let student = new Student(data[i]._firstName, data[i]._lastName, data[i]._math, data[i]._literature, data[i]._english);
            arr.push(student);
        }

        for (let i = 0; i < arr.length; i++) {
            for (let j = arr.length - 1; j > i; j--) {
                if (arr[i].lastName.localeCompare(arr[j].lastName) == 1) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp
                }
            }
        }
        saveLocalStorage('list', arr)
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

    searchStudent(searchName) {
        let data = loadLocalStorage('list');
        let arr = [];
        let table = '';
        for (let i = 0; i < data.length; i++) {
            let student = new Student(data[i]._firstName, data[i]._lastName, data[i]._math, data[i]._literature, data[i]._english);
            arr.push(student);
        }
        for (let i = 0; i < arr.length; i++) {
            // for (let j = 0; j < (arr[i].fullName).length; j++) {
            // console.log((arr[i].fullName).substring(0,j))

            if ((arr[i].fullName).indexOf(searchName) !== -1) {
                table += `<tr>`;
                table += `<td>${i + 1}</td>`
                table += `<td>${arr[i].fullName}</td>`
                table += `<td>${arr[i].math}</td>`
                table += `<td>${arr[i].literature}</td>`
                table += `<td>${arr[i].english}</td>`
                table += `<td>${arr[i].mediumScore}</td>`
                table += `</tr>`

                document.getElementById('listStudent').innerHTML = table;
            }
        }
    }

    topList() {
        let data = loadLocalStorage('list');
        let arr = [];
        for (let i = 0; i < data.length; i++) {
            let student = new Student(data[i]._firstName, data[i]._lastName, data[i]._math, data[i]._literature, data[i]._english);
            arr.push(student);
        }

        let maxMediumScore = arr[0].mediumScore
        let indexMediumScore = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].mediumScore > maxMediumScore) {
                maxMediumScore = arr[i].mediumScore;
                indexMediumScore = i
            }
        }
        document.getElementById('mediumScore').innerHTML = arr[indexMediumScore].fullName;

        let maxMath = arr[0].math
        let indexMath = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].math > maxMath) {
                maxMath = arr[i].math;
                indexMath = i
            }
        }
        document.getElementById('math').innerHTML = arr[indexMath].fullName;

        let maxLiterature = arr[0].literature
        let indexLiterature = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].literature > maxLiterature) {
                maxLiterature = arr[i].literature;
                indexLiterature = i
            }
        }
        document.getElementById('literature').innerHTML = arr[indexLiterature].fullName;

        let maxEnglish = arr[0].english
        let indexEnglish = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].english > maxEnglish) {
                maxEnglish = arr[i].english;
                indexEnglish = i
            }
        }
        document.getElementById('english').innerHTML = arr[indexEnglish].fullName;
    }
}


function saveLocalStorage(key: string, data) {
    localStorage.setItem(key, JSON.stringify(data))
}

function loadLocalStorage(key) {
    if (localStorage.hasOwnProperty(key))
        return JSON.parse(localStorage.getItem(key))
    return [];
}