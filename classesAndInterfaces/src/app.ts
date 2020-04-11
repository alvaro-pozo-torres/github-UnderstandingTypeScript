class Department {
    //  private name: string;
     private employees: string[] = [];

     constructor (private readonly id: string, public name: string) {
        // this.name = n;
     }

     describe(this: Department) {
         console.log(`Department (${this.id}): ${this.name}`);
     }

     addEmployee(employee:string) {
         this.employees.push(employee);
     }

     printEmployeesInformation() {
        console.log('total employees: ' + this.employees.length);
        console.log('employees names: ' + this.employees);
     }
     
    
}

const accounting = new Department('acc', 'Accounting');
accounting.addEmployee('Alvaro');
accounting.addEmployee('Pau');

accounting.describe();
accounting.printEmployeesInformation();
// const accountingCopy = {
//     name: 'copia',
//     describe: accounting.describe
// };

// accountingCopy.describe();