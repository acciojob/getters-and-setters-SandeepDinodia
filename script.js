//complete this code
class Person {
	constructor(name,age)
	this.name=name,
	this.age=age
}
get name(){
	return this.name
}
set age(){
	return this.age
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`);
	}
}
const student= new student("sandeep",28);
student.study();

const teacher = new teacher("rishabh",30);
teacher.teach();

console.log(student.name);
console.log(student.age);
console.log(teacher.name);

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
