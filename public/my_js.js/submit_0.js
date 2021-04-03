function status0(){
 var pcode1=$('#pword1').val();
 var pcode2=$('#pword2').val();
 var u_name=$('#name').val();
 var u_email=$('#email').val(); 
var Valid_pcode1=/(^[0-9]+[a-z][0-9]*[A-Z][0-9]*$|^[0-9]+[A-Z][0-9]*[a-z][0-9]*$|^[A-Z][0-9]*[a-z][0-9]+$|^[0-9]*[A-Z][0-9]+[a-z][0-9]*$|^[0-9]*[a-z][0-9]*[A-Z][0-9]+$|^[0-9]*[a-z][0-9]+[A-Z][0-9]*$)/;
var valid_name=/^[a-zA-Z]+$/;
var valid_email=/[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/;

var name_status=valid_name.test(u_name);
var email_status=valid_email.test(u_email);
var pword1_status=Valid_pcode1.test(pcode1);
if (name_status&email_status&pword1_status&&(pcode1===pcode2)) {
   //alert('all are true');
$('#warn').show().text('All Are Correct').removeClass('bg-danger').addClass('bg-success');   
   return true;
}else if( (!name_status)&&(email_status&pword1_status&&(pcode1===pcode2) )){
   //alert('type in valid name');
$('#warn').show().text('Name You Entered Is Invalid').removeClass('bg-success').addClass('bg-danger');   
   return false;
}else if(!email_status&&(name_status&pword1_status&&(pcode1===pcode2))){
//alert('please type in a valid email address!!');
$('#warn').show().text('Email You Entered Is Invalid').removeClass('bg-success').addClass('bg-danger');
return false;
}else if(!pword1_status&&(name_status&email_status&&((pcode1===pcode2)||(pcode1!==pcode2)))){
//alert('please type in a valid password !!');
$('#warn').show().text('Password You Entered Is Invalid').removeClass('bg-success').addClass('bg-danger');
return false;
}else if((pcode1!==pcode2)&&(name_status&email_status&pword1_status)){
//alert('type equal passwords');
$('#warn').show().text('Password And Its Confirm Are Different').removeClass('bg-success').addClass('bg-danger');
return false;
}
else{
   //alert ('More Than One Data You Entered Are Wrong');
$('#warn').show().text('More Than One Data You Entered Are Wrong').removeClass('bg-success').addClass('bg-danger');
return false;
}

 } //this is the end of main function thst is called Status0