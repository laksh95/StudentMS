document.addEventListener("DOMContentLoaded",function(event){
	if(localStorage.getItem("login")=="t")
		window.open("teacher.html","_self");
	else if(localStorage.getItem("login")=="s")
		window.open("student.html","_self");
	else if(localStorage.getItem("login")=="a")
		window.open("adminLog.html","_self");
	else if(localStorage.getItem("login")=="undefined"|| localStorage.getItem("login")=="false")
	{

	}
});
function checkUser()
{
	var uname=document.getElementById("uname").value;
	var pass=document.getElementById("pass").value;
	if(checkAdmin(uname,pass)){
		localStorage.setItem("login","a")
		localStorage.setItem("user",uname);
		window.open("adminLog.html","_self")
	}
	else if(checkTeacher(uname,pass)){
		localStorage.setItem("login","t")
		localStorage.setItem("user",uname);
		window.open("teacher.html","_self");
	}
	else if(checkStudent(uname,pass)){
		localStorage.setItem("login","s")
		localStorage.setItem("user",uname);
		window.open("student.html","_self");
	}
	else
	{
		localStorage.setItem("login","null");
		alert("incorrect login details");
		document.getElementById("uname").value="";
		document.getElementById("pass").value="";
	}
}
function checkTeacher(uname,pass)
{
	var flag=0;
	var teach=JSON.parse(localStorage.getItem("teacherArray"));
	if(teach=="undefined" || teach==null)
	{
		return false;
	}
	for(var i=0;i<teach.length;i++)
	{
		if(teach[i].username==uname && teach[i].password==pass)
			return true;
	}
	return false;
}
function checkStudent(uname,pass)
{
	var flag=0;
	var student=JSON.parse(localStorage.getItem("studentDetails"));
	if(student=="undefined" || student==null)
	{
		return false;
	}
	for(var i=0;i<student.length;i++)
	{
		if(student[i].suname==uname && student[i].password==pass)
			return true;
	}
	return false;
}
function checkAdmin(uname,pass)
{
	if(uname=="admin" && pass=="password")
		return true;
	return false;
}