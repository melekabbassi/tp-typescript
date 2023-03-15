export class Employee {
    firstName!: string;
    lastName!: string;
    department!: string;
    experience!: number;
}

export class Manager extends Employee {
    noSubordonnées!: number;

    constructor(noSubordonnées: number){
        super()
        this.noSubordonnées = noSubordonnées
    }
}