var students = [];
function submit (){
    var students_show =[];
    for (var j = 1; j<=4; j++){
        var name_of_the_student = document.getElementById("name_of_the_student_"+j).value;
        console.log(name_of_the_student);
        students.push(name_of_the_student);
    }
 console.log(students);
 var length_of_students = students.length;
 console.log(length_of_students);

 for (k = 0; k<length_of_students; k++){
     students_show.push("<h4>NAME - "+ students[k] +"</h4>")
     console.log(students_show);
 }
 console.log(students_show);
 document.getElementById("display_name_with_commas").innerHTML = students_show;

 var remove_commas = students_show.join(" ");
 console.log(remove_commas);
 document.getElementById("display_name_without_commas").innerHTML = remove_commas;

 document.getElementById("submit_button").style.display = "none";
 document.getElementById("sort_button").style.display = "inline-block";
}
function sorting(){
    students.sort();
    console.log(students);
    students_show_sorted = [];
    var length_of_students = students.length;
    console.log(length_of_students);
   
    for (k = 0; k<length_of_students; k++){
        students_show_sorted.push("<h4>NAME - "+ students[k] +"</h4>")
        console.log(students_show_sorted);
    }
    console.log(students_show_sorted);
    document.getElementById("display_name_with_commas").innerHTML = students_show_sorted;
   
    var remove_commas = students_show_sorted.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
   
    document.getElementById("submit_button").style.display = "inline-block";
    document.getElementById("sort_button").style.display = "none";
}