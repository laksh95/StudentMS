document.addEventListener("DOMContentLoaded", function(event) { 
	if(localStorage.getItem("login")=="false"|| localStorage.getItem("login")==undefined) 	
		window.open("index.html","_self");
	else if(localStorage.getItem("login")=="a")
		window.open("adminLog.html","_self");
	else if(localStorage.getItem("login")=="t")
		window.open("teacher.html","_self");
	else
	{
	document.getElementById("editInfo").style.display="none";
	var student=JSON.parse(localStorage.getItem("studentDetails"));
	var user=localStorage.getItem("user");
	for(var i=0;i<student.length;i++)
	{
		if(user==student[i].suname)
		{
			document.getElementById("name").value=student[i].name;
			document.getElementById("uname").value=student[i].suname;
		}
	}
}
		});	
function edit()
{
	document.getElementById("info").style.display="none";
	document.getElementById("editInfo").style.display="block";
}
function editDetails()
{
	var user=localStorage.getItem("user");
	var ename=document.getElementById("esuname").value;
	var epass=document.getElementById("epass").value;
	var cpass=document.getElementById("cpass").value;
	if(epass!=cpass)
	{
		document.getElementById("passErr").innerHTML="password do not match";
		document.getElementById("epass").value="";
		document.getElementById("cpass").value="";
	}
	else{
		var student=[];
		var flag=0;
		student=JSON.parse(localStorage.getItem("studentDetails"));
		for(var i=0;i<student.length;i++)
		{
			if(user==student[i].suname)
			{
				flag=1;
				student[i].suname=document.getElementById("esuname").value;
				student[i].password=document.getElementById("epass").value;
				localStorage.setItem("studentDetails",JSON.stringify(student));
				document.getElementById("info").style.display="block";
				document.getElementById("editInfo").style.display="none";
			}
		}
		if(!flag)
		{
			document.getElementById("passErr").innerHTML="incorrect username";
			document.getElementById("esuname").value="";
			document.getElementById("epass").value="";
			document.getElementById("cpass").value="";			
		}
	}
}
function clearAll()
{
	document.getElementById("info").style.display="block";
	document.getElementById("editInfo").style.display="none";
	document.getElementById("esuname").value="";
	document.getElementById("epass").value="";
	document.getElementById("cpass").value="";
}
function logOut()
{
	localStorage.setItem("login","false");
	localStorage.setItem("user","false");
	window.open("index.html","_self");

}
