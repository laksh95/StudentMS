document.addEventListener("DOMContentLoaded", function(event) { 
	if(localStorage.getItem("login")=="false"|| localStorage.getItem("login")==undefined) 	
		window.open("index.html","_self");
	else if(localStorage.getItem("login")=="s")
		window.open("student.html","_self");
	else if(localStorage.getItem("login")=="t")
		window.open("teacher.html","_self");
	else{
	showNone();
	document.getElementById("ctrl").style.display="block";
	}
		});
function showNone()
{
	document.getElementById("dpt").style.display="none";
	document.getElementById("ctrl").style.display="none";
	document.getElementById("subject").style.display="none";
	document.getElementById("teacher").style.display="none";
	document.getElementById("sdept").style.display="none";
}
function goHome()
{
	showNone();
	document.getElementById("ctrl").style.display="block";
}
function showDeptm()
{
	showNone();
	document.getElementById("dpt").style.display="block";
	makeList();
}
function showSubject()
{
	showNone();
	document.getElementById("subject").style.display="block";
}
var givenDept=["Computer Science","Chemical","Civil","Automobile","Mechanical","Information Technology","Electrical","Electronics"];
function makeList()
{
	var li=document.getElementById("depts");
	li.innerHTML="";
	for(var i=0;i<givenDept.length;++i)
	{
		var op=document.createElement("option");
		op.textContent=givenDept[i];
		li.appendChild(op);
	}
}
function checkDept(departments,dep)
{
	console.log("checkDept()");
	var flag=1;
	for(var i=0;i<departments.length;i++){
		if(dep=="" || dep==departments[i])
		{
			console.log(departments[i]+"loop");
			flag=0;
		}	
	}
	for(i=0;i<givenDept.length;i++)
	{
		if(dep==givenDept[i])
			flag=1;
	}
	if(flag)
		return true;
	else
		return false;
}
function addDept()
{
	var dep=[];
	var dept=document.getElementById("dep").value;
	console.log(dept);
	if(dept=="")
	{
		document.getElementById("depts").value="";
		document.getElementById("error").innerHTML="Field empty";
	}
	else
	{
		if(localStorage.getItem("department")=="undefined" || localStorage.getItem("department")==null || localStorage.getItem("department")=="null")
		{
			dep.push(dept);
			console.log(dept);
			localStorage.setItem("department",JSON.stringify(dep));
			document.getElementById("error").innerHTML="Department added";
			document.getElementById("ctrl").style.display="block";
			document.getElementById("deptName").style.display="none";
		}
		else
		{
			dep=JSON.parse(localStorage.getItem("department"));
			
			if(checkDept(dep,dept))
			{
				dep.push(dept);
				localStorage.setItem("department",JSON.stringify(dep));
				document.getElementById("ctrl").style.display="block";
				document.getElementById("dpt").style.display="none";

			}
			else
			{
				document.getElementById("depts").innerHTML="";
				document.getElementById("error").innerHTML="Incorrect department";
			}
		}
	}
}
function addTeacher()
{
	showNone();
	document.getElementById("teacher").style.display="block";
	document.getElementById("dpt").style.display="none";
}
function checkDeptName(dep,dept)
{
	for(var i=0;i<dep.length;i++)
		if(dept==dep[i])
			return true;
	return false;
}
function checkSubject(sub,dept)
{
	var sarray=JSON.parse(localStorage.getItem("subjectArray"));
	for(var i=0;i<sarray.length;i++)
	{
		if(sub==sarray[i].subname && dept==sarray[i].departname){
			return true;
		}
	}
	return false;
}
function getValues()
{
	var name=document.getElementById("tname").value;
	var uname = document.getElementById("uname").value;
	var pass=document.getElementById("pass").value;
	var dept=document.getElementById("dptName").value;
	var age=document.getElementById("age").value;
	var role=document.getElementById("role").value;
	var sub=document.getElementById("subname").value;
	var dep=JSON.parse(localStorage.getItem("department"));
	var flag=1;
	if(!checkName(name))
	{	
		flag=0;
		document.getElementById("nameErr").innerHTML="Please enter characters only";
		document.getElementById("tname").value="";

	}
	if(!checkDeptName(dep,dept))
	{
		flag=0;
		document.getElementById("deptErr").innerHTML="Please enter a valid department name";
		document.getElementById("dpt").value="";

	}
	if(!checkSubject(sub,dept))
	{
		flag=0;
		document.getElementById("subErr").innerHTML="Subject annd department do not match";
		document.getElementById("subname").value="";
	}
	if(!checkAge(age))
	{
		flag=0;
		document.getElementById("ageErr").innerHTML="Please enter valid Age(in number) between 18 and 65";
		document.getElementById("age").value="";
	}
	if(!checkRole(role))
	{
		flag=0;
		document.getElementById("roleErr").innerHTML="Please enter valid role(HOD or Teacher)";
		document.getElementById("role").value="";
	}
	if(!checkPass(pass))
	{
		flag=0;
		document.getElementById("passErr").innerHTML="Please enter a valid password. Minimum 8 characters";
		document.getElementById("pass").value="";
	}
	if(!checkUser(uname))
	{
		flag=0;
		document.getElementById("usernameErr").innerHTML="Please enter a valid username";
		document.getElementById("uname").value="";
	}
	if(flag)
	{
		var teacher=[];
					var teach ={"username":uname,
						"name":name,
						"password":pass,
						"age":age,
						"dept":dept,
						"sub":sub,
						"role":role,
						};

		if(localStorage.getItem("teacherArray")=="undefined" || localStorage.getItem("teacherArray")=="null" || localStorage.getItem("teacherArray")==null)
		{
			teacher.push(teach);
			localStorage.setItem("teacherArray",JSON.stringify(teacher));
			showNone();
			document.getElementById("ctrl").style.display="block";
		}
		else
		{
			teacher=JSON.parse(localStorage.getItem("teacherArray"));
			teacher.push(teach);
			localStorage.setItem("teacherArray",JSON.stringify(teacher));
			showNone();
			document.getElementById("ctrl").style.display="block";
		}
	}
}
function addSubject()
{
	var subname=document.getElementById("sname").value;
	var depname=document.getElementById("dname").value;
	var flag=1;
	var dep=JSON.parse(localStorage.getItem("department"));
	if(!checkName(subname))
	{
		flag=0;
		document.getElementById("snameErr").innerHTML="Please enter a valid Subject Name(only characters)";
		document.getElementById("sname").value="";

	}
	if(!checkDeptName(dep,depname))
	{
		flag=0;
		document.getElementById("dnameErr").innerHTML="Department Name entered does not exist.";
		document.getElementById("dname").value="";
	}
	if(flag)
	{
		var subject=[];
		var sub={
			"subname":subname,
			"departname":depname
		};
		if(localStorage.getItem("subjectArray")=="undefined" || localStorage.getItem("subjectArray")=="null" || localStorage.getItem("subjectArray")==null)
		{
			subject.push(sub);
			localStorage.setItem("subjectArray",JSON.stringify(subject));
			showNone();
			document.getElementById("ctrl").style.display="block";
		}
		else
		{
			subject=JSON.parse(localStorage.getItem("subjectArray"));
			subject.push(sub);
			localStorage.setItem("subjectArray",JSON.stringify(subject));
			showNone();
			document.getElementById("ctrl").style.display="block";
		}
	}
	else{

	}
}
function showOptions()
{
	showNone();
	document.getElementById("sdept").style.display="block";
}
function listByDept()
{
	// var li=document.getElementById("disp");
	 document.getElementById("display").innerHTML="";
	 var dp=JSON.parse(localStorage.getItem("department"));
	 var tch=JSON.parse(localStorage.getItem("teacherArray"));
	 var li="";
	 for(var i=0;i<dp.length;i++)
	 {
	 	li+=dp[i]+" - ";
	 	for(var j=0;j<tch.length;j++)
	 	{
	 		if(tch[j].dept==dp[i])
	 		{
	 			li+=tch[j].name+"<br>";
	 		}
	 	}
	 	li+="<br>";
	 }
	 document.getElementById("display").innerHTML=li;
}
function dispBysub()
{
	document.getElementById("display").innerHTML="";
	var sub=JSON.parse(localStorage.getItem("subjectArray"));
	var tch=JSON.parse(localStorage.getItem("teacherArray"));
	var li="";
	for(var i=0;i<sub.length;i++)
	{
		li+=sub[i].subname+" - ";
		for(var j=0;j<tch.length;j++)
		{
			if(tch[j].sub==sub[i].subname)
				li+=tch[j].name+"<br>";
		}
		li+="";
		console.log(li);
	}
	document.getElementById("display").innerHTML=li;	
}
function disp()
{
	var num=document.getElementById("opt").value;
	if(num==2)
	{
		listByDept();
	}
	else if(num==3)
	{
		dispBysub();
	}
}
function logOut()
{
	localStorage.setItem("login","false");
	window.open("index.html","_self");

}