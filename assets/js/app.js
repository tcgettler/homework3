for (i=0; i < employeeList.length; i++){
    $('#fName').append(employeeList[i].fName);
    $('#lName').append(employeeList[i].lName);
    $('#officeNum').append(employeeList[i].officeNum);
    $('#phoneNum').append(employeeList[i].phoneNum);
    $().duplicate();
}
