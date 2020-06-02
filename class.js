class Employee {
  constructor(name) {
    this.name = name;
  }
  save = () => {
    console.info(`Saved ${this.name}`);
  };
}

const newEmp = new Employee("Amil");

newEmp.save();
