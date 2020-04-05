class Department {
     name: string;
     private employees: string[] = [];

     constructor (n: string) {
        this.name = n;
     }

     describe() {
         console.log('department name is ' + this.name);
     }

     addEmployee(employee:string) {
         this.employees.push(employee);
     }

     printEmployeesInformation() {
        console.log('total employees: ' + this.employees.length);
        console.log('employees names: ' + this.employees);
     }
     
    
}

const accounting = new Department('Accounting');
accounting.addEmployee('Alvaro');
accounting.addEmployee('Pau');

accounting.describe();
accounting.printEmployeesInformation();
// const accountingCopy = {
//     name: 'copia',
//     describe: accounting.describe
// };

// accountingCopy.describe();