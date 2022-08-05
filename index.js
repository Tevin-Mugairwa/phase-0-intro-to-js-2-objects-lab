// Write your solution in this file!
const employee= 
{
   
  name:"",
  streetAdress:"",
   
};
function updateEmployeeWithKeyAndValue(employee,key,value)
{
     let newEmployee ={...employee};
     newEmployee[key]=value;
    
     return newEmployee;
    //let vals=object.values(Employee);
    //let Employee=[name, ...Employee];
    //let streetAdress=[streetAdress, ...Employee];
    //return Employee;
    //console.log(...Employee.name);
    //console.log(...Employee.streetAdress);
    //Employee.name(...Employee)
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
{
    employee[key]=value;
    return employee
}
function deleteFromEmployeeByKey(employee, key)
{
    let newName= Object.assign({},employee);
    delete newName[key];
    return newName;
}
function destructivelyDeleteFromEmployeeByKey(employee, key)
{
    delete employee[key];
    return employee;
}
