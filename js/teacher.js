document.addEventListener("DOMContentLoaded", function(event) { 
	 if(localStorage.getItem("login")=="false"|| localStorage.getItem("login")==undefined) 	
		window.open("index.html","_self");
	else if(localStorage.getItem("login")=="s")
		window.open("student.html","_self");
	else if(localStorage.getItem("login")=="a")
		window.open("adminLog.html","_self");
	else
	{
	document.getElementById("set3").style.display="none";
	document.getElementById("student").style.display="none";
	var teach=JSON.parse(localStorage.getItem("teacherArray"));
	var user=localStorage.getItem("user");
	
		for(var i=0;i<teach.length;i++)
		{
			if(user==teach[i].username)
			{
				var wel="Welcome, "+ teach[i].name;
				document.getElementById("head").innerHTML=wel;
				document.getElementById("name").value=teach[i].name;
				document.getElementById("age").value=teach[i].age;
				document.getElementById("role").value=teach[i].role;
				if(localStorage.getItem("personalDetails")!=undefined || localStorage.getItem("personalDetails")!=null)
				{
					var det=JSON.parse(localStorage.getItem("personalDetails"));
					for(var j=0;j<det.length;j++)
					{
						if(teach[i].name==det[j].name)
						{
							document.getElementById("hsc").value=det[j].hsc;
							document.getElementById("ssc").value=det[j].ssc;
							document.getElementById("under").value=det[j].under;
							document.getElementById("master").value=det[j].master;							
						}
					}
				}
				else
				{
					document.getElementById("hsc").value="";
					document.getElementById("ssc").value="";
					document.getElementById("under").value="";
					document.getElementById("master").value="";				
				}
			}
		}

	}
		});
function logOut()
{
	localStorage.setItem("login","false");
	localStorage.setItem("user","false");
	window.open("index.html","_self");

}
function editDetails()
{
	document.getElementById("set3").style.display="block";
	var person=JSON.parse(localStorage.getItem("personalDetails"));
	var name=document.getElementById("name").value;
	for(var i=0;i<person.length;i++)
	{
		if(person[i].name==name)
		{
			document.getElementById("ehsc").value=person[i].hsc;
			document.getElementById("essc").value=person[i].ssc;
			document.getElementById("eunder").value=person[i].under;
			document.getElementById("emaster").value=person[i].master;	
		}
	}
}
function clearAll()
{
	document.getElementById("ehsc").value="";
	document.getElementById("essc").value="";
	document.getElementById("eunder").value="";
	document.getElementById("emaster").value="";
	document.getElementById("set3").style.display="none";

}
function saveDetails()
{
	var name=document.getElementById("name").value;
	var hschool=document.getElementById("ehsc").value;
	var sschool=document.getElementById("essc").value;
	var un=document.getElementById("eunder").value;
	var pst=document.getElementById("emaster").value;
	var detail=[];
	var p={
		"name":name,
		"hsc":hschool,
		"ssc":sschool,
		"under":un,
		"master":pst
	};
	if(localStorage.getItem("personalDetails")==undefined || localStorage.getItem("personalDetails")==null)
	{
		detail.push(p);
		localStorage.setItem("personalDetails",JSON.stringify(detail));
		clearAll();
		window.open("teacher.html","_self");
	}
	else
	{
		detail=JSON.parse(localStorage.getItem("personalDetails"));
		for(var j=0;j<detail.length;j++)
		{
			if(name==detail[j].name)
			{
				detail[j].hsc=hschool;
				detail[j].ssc=sschool;
				detail[j].under=un;
				detail[j].master=pst;
				localStorage.setItem("personalDetails",JSON.stringify(detail));
				break;
			}
		}
		clearAll();
		window.open("teacher.html","_self");
	}
}
function addStudent()
{
	var role=document.getElementById("role").value;
	if(role!="hod" || role!="HOD")
	{
		document.getElementById("roleErr").value="Only HOD can add student";
	}
	else{
		document.getElementById("info").style.display="none";
		document.getElementById("set3").style.display="none";
		document.getElementById("student").style.display="block";
	}
}
function addStudentDetails()
{
	var sname=document.getElementById("sname").value;
	var suname=document.getElementById("suname").value;
	var pass=document.getElementById("password").value;
	var cpass=document.getElementById("cpassword").value;
	var flag=1;
	if(pass!=cpass)
	{
		flag=0;
		document.getElementById("passErr").innerHTML="password do not match";
		document.getElementById("password").value="";
		document.getElementById("cpassword").value="";
	}
	if(!checkName(sname))
	{
		flag=0;
		document.getElementById("sname").value="";
		document.getElementById("nameErr").innerHTML="Enter Characters Only";
	}
	if(!flag)
	{
		document.getElementById("passErr").innerHTML="";
		document.getElementById("nameErr").innerHTML="";	
	}
	else
	{
		var studentDetail=[];
		var student={
			"name":sname,
			"suname":suname,
			"password":pass
		};
		if(localStorage.getItem("studentDetails")==undefined || localStorage.getItem("studentDetails")==null)
		{
			studentDetail.push(student);
			localStorage.setItem("studentDetails",JSON.stringify(studentDetail));
			document.getElementById("info").style.display="block";
			document.getElementById("student").style.display="none";

		}
		else
		{
			studentDetail=JSON.parse(localStorage.getItem("studentDetails"));
			studentDetail.push(student);
			localStorage.setItem("studentDetails",JSON.stringify(studentDetail));
			document.getElementById("info").style.display="block";
			document.getElementById("student").style.display="none";

		}
	}
}
function cancel()
{
	document.getElementById("info").style.display="block";
	document.getElementById("student").style.display="none";
}