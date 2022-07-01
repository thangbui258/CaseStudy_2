export class Student{
    private _firstName: string;
    private _lastName: string;
    private _math: number;
    private _literature:number;
    private _english:number;
    constructor(firtName:string, lastName:string, math:number, literature: number, english: number) {
        this._firstName = firtName;
        this._lastName = lastName;
        this._math = math;
        this._literature = literature;
        this._english = english
    }

    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    get math(): number {
        return this._math;
    }

    get literature(): number {
        return this._literature;
    }

    get english(): number {
        return this._english;
    }

    get fullName():string{
        return this._firstName + ' ' + this._lastName;
    }

    get mediumScore(): number {
        return +(((+this._math) + (+this._literature) + (+this._english))/3).toFixed(2)
    }
}