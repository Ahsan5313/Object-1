
function Student (name, age, study, hobbies){

          this.name = name;
          this.age = age;
          this.study = study;
          this.hobbies = hobbies;
}
var student_detail1 = new Student("Ahsanul Huq <br/>", "21 <br/>", "BBA running<br/>", "cricket<br/>") ;
var student_detail2 = new Student("hsanul Huq", 20, "BBA running", "football") ;
var student_detail4 = new Student("Tasan Huq", 40, "Actor", "sing song") ;
var student_detail4 = new Student("Anamul Huq", 21, "BBA running", "tinis") ;

document.write("Name =" +student_detail1.name);
document.write("Age =" +student_detail1.age);
document.write("Study =" +student_detail1.study);
document.write("Hobbies =" +student_detail1.hobbies);