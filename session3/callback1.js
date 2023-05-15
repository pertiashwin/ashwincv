var students = [
    {name:"Manish", class:"5th"},
    {name:"Amit", class:"6th"},
]

var newStudent = {name:"Sachin", class:"10th"}

function admitStudent(stu, callback1)
{
    setTimeout(() => {
        students.push(stu);
        callback1();
    }, 2000);
}

function displayStudents()
{
    setTimeout(() => {
    str = ""
    students.forEach(element => {
        str += element.name;
    });
    console.log(str);
}, 1000);
}    

admitStudent(newStudent, displayStudents)
