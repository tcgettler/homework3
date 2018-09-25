//Database of the employees listed.
const employeeList = [{
  fName: 'Jan',
  lName: 'Boering',
  officeNum: "001",
  phoneNum: '222-222-2222'
},
{
  fName: 'Juan',
  lName: 'Palacio',
  officeNum: "304",
  phoneNum: '489-789-8789'
},
{
  fName: 'Margie',
  lName: 'Tuttle',
  officeNum: "789",
  phoneNum: '789-789-7897'
},
{
  fName: 'Sara',
  lName: 'Guidotti',
  officeNum: "032",
  phoneNum: '222-789-4654'
},
{
  fName: 'Tyrell',
  lName: 'Caulfield',
  officeNum: "003",
  phoneNum: '566-621-0452'
},
{
  fName: 'Tasha',
  lName: 'Pullen',
  officeNum: "213",
  phoneNum: '789-766-5675'
},
{
  fName: 'Ty',
  lName: 'Johnson',
  officeNum: "211",
  phoneNum: '789-766-7865'
},
{
  fName: 'Sarah',
  lName: 'Zaccarin',
  officeNum: "345",
  phoneNum: '222-789-5231'
}
];

employeeList.sort(function(a, b){
  return a.lName > b.lName;
});
