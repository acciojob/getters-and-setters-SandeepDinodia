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
		return `${this.name} is studying`
	}
}

class Teacher extends Person {
	teach(){
		return `${this.name} is teaching`
	}
}
const student= new student("sandeep",28);
student.study();

const teacher = new teacher("rishabh",30);
teacher.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
