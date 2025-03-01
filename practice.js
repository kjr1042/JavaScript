class Employee {
    constructor(EmpId, EmpName, EmpDesg, EmpDept) {
      (this.EmpId = EmpId),
        (this.EmpName = EmpName),
        (this.EmpDesg = EmpDesg),
        (this.EmpDept = EmpDept);
    }
    showDetails() {
      console.log(
        `The Employee details ${this.EmpId} ${this.EmpName} ${this.EmpDesg} ${this.EmpDept}`
      );
    }
  }
  
  const employee = new  Employee(1001,'Palak Singh','Manager','IT');
  console.log(JSON.stringify(employee));
  
  const employee2 =JSON.parse(JSON.stringify(employee));
  console.log(employee2)
  console.log(typeof employee);
  console.log(JSON.stringify(employee));
  
  console.log(employee.EmpName);
  
  employee.showDetails();
  
  employee.showDetails = function () {
    console.log(
      `The Employee Details ${this.EmpId} ${this.EmpName} ${this.EmpDesg} ${this.EmpDept}`
    );
  };
  
  employee.showDetails();
  
  // //INHERITANCE
  
  // class Project extends Employee {
  //   constructor(ProjectId, ProjectName, EmpId, EmpName, EmpDesg, EmpDept) {
  //     super(EmpId, EmpName, EmpDesg, EmpDept);
  //     (this.ProjectId = ProjectId), (this.ProjectName = ProjectName);
  //   }
  //   showProjectDetails() {
  //     console.log(`Project Details Are ${this.ProjectId} ${this.ProjectName}`);
  //   }
  // }
  // console.warn("------------------------------------------------")
  // const ProjectObj = new  Project(1111,'ReactApp','Bhavesh','Manager','IT');
  // ProjectObj.showDetails();
  // ProjectObj.showProjectDetails()