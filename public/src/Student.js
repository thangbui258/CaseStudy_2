var Student = /** @class */ (function () {
    function Student(firtName, lastName, math, literature, english) {
        this._firstName = firtName;
        this._lastName = lastName;
        this._math = math;
        this._literature = literature;
        this._english = english;
    }
    Object.defineProperty(Student.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "math", {
        get: function () {
            return this._math;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "literature", {
        get: function () {
            return this._literature;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "english", {
        get: function () {
            return this._english;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "fullName", {
        get: function () {
            return this._firstName + ' ' + this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "mediumScore", {
        get: function () {
            return +(((+this._math) + (+this._literature) + (+this._english)) / 3).toFixed(2);
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
export { Student };
//# sourceMappingURL=Student.js.map