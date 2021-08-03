name_of_student_array=[];
function Submit(){
    var name1=document.getElementById("name1").value;
    var name2=document.getElementById("name2").value;
    var name3=document.getElementById("name3").value;
    var name4=document.getElementById("name4").value;
    var name5=document.getElementById("name5").value;
    

    name_of_student_array.push(name1);
    name_of_student_array.push(name2);
    name_of_student_array.push(name3);
    name_of_student_array.push(name4);
    name_of_student_array.push(name5);
    console.log(name_of_student_array);
    document.getElementById("display_name").innerHTML=name_of_student_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function Sorting(){
    name_of_student_array.sort();
    console.log(name_of_student_array);
    document.getElementById("display_name").innerHTML=name_of_student_array;
}