function checkName(str)
{
	var flag;
	for(var i =0 ; i<str.length ;i++){

		if((str.charCodeAt(i)>64 && str.charCodeAt(i)<92 ) || (str.charCodeAt(i)>96 && str.charCodeAt(i)<123) || (str.charCodeAt(i)==32)){
			flag=0;
		}
		else {
			flag = 1; 
		}
	}
	if(flag==0){
		return true;
	}
	else{
		return false;
	}
}
function checkAge(age)
{
		if(age<18 && age>65)
			return false;
		else 
			return true;
}
function checkRole(role)
{
	if(role=="HOD" || role=="teacher" || role=="Teacher" || role=="hod")
		return true;
	return false;
}
function checkPass(pass)
{
	if(pass.length<8)
		return false;
	return true;
}
function checkUser(name)
{
	console.log("user check");
	if(name.trim()=="")
		return false;
	return true;
}