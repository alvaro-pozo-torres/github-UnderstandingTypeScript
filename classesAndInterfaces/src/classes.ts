abstract class Department {
     static fiscalYear = 2020;
     
     protected employees: string[] = [];

     constructor (protected readonly id: string, public name: string) {
        // this.name = n;
     }

     static createEmployee(name: string) {
         return {name: name};
     }

     abstract describe(this: Department): void;

     addEmployee(employee:string) {
         this.employees.push(employee);
     }

     printEmployeesInformation() {
        console.log('total employees: ' + this.employees.length);
        console.log('employees names: ' + this.employees);
     }
}

class ITDepartment extends Department {
    admins: string[];

    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    describe() {
        console.log('IT department ID: ' + this.id);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if (this.lastReport) {
            return 'Last report: ' + this.lastReport;
        }
        throw new Error('No last report found');        
    }

    set mostRecentReport(value: string) {
        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (this.instance) {
            return (this.instance);
        }
        this.instance = new AccountingDepartment('Acc', [])
        return this.instance;
    }

    describe() {
        console.log('Accounting department ID: ' + this.id);
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            console.log(`No se puede registrar a ${name} dentro del departamento ${this.name}`);
            return;
        }
        this.employees.push(name);
    }
    
    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log('Reports: ' + this.reports);
    }
}

const employee1 = Department.createEmployee('NewEmployee');
console.log(employee1, Department.fiscalYear);

// const accounting = new AccountingDepartment('acc01', []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting);
accounting.addEmployee('Alvaro');
accounting.addEmployee('Max');

console.log(accounting, accounting2);

accounting.describe();
accounting.printEmployeesInformation();
accounting.addReport('report 01');
accounting.addReport('report 02');
accounting.printReports();
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = 'report 03';
accounting.printReports();
console.log(accounting.mostRecentReport);

console.log(accounting, accounting2);

const itDep = new ITDepartment('it01', ['pau', 'naya']);
console.log(itDep);
itDep.addEmployee('Leo');
itDep.addEmployee('Trainer');

itDep.describe();
itDep.printEmployeesInformation();