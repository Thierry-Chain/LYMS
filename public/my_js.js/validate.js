 //validate email
 function email_vali() {
    let email=$('#email').val();
    if (email!='') {
        let valid_email=/[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/;
        if (valid_email.test(email) ) {
$('#warn').show().text('This Email Is valid !!').removeClass('bg-danger').addClass('bg-success'); 
//return true;           
        } else{
            $('#warn').show().text('This Email Is Invalid').removeClass('bg-success').addClass('bg-danger');    
            //return false;        
        }    
    }else{
$('#warn').show().text('Please Enter Email Adress !').removeClass('bg-success').addClass('bg-danger'); 
//return false;        
    } 
    

}
//validate name
function ok(){
let name1=$('#name').val();
if (name1!='') {
//alert(name1);
val_name1=/^[a-zA-Z]+$/;
//val_name1.test(name1);
if (val_name1.test(name1)) {
$('#warn').show().text('This Name Is valid !!').removeClass('bg-danger').addClass('bg-success');
 //return true;   
} else{
    $('#warn').show().text('This Name Is Invalid').removeClass('bg-success').addClass('bg-danger');  
    //return false;      
}    
} else{
    $('#warn').show().text('Please Fill The Name').removeClass('bg-success').addClass('bg-danger');
    //return false;
}
$('#hint_nm').hide();
}

 function hint(){
     $('#hint1').show();
 }
 function hint_nm(){
    $('#hint_nm').show();
}
//password validation var pword1=$('#pword1').val();

 function pword_vali0(){
var pword1=$('#pword1').val();

let valid_pword=/(^[0-9]+[a-z][0-9]*[A-Z][0-9]*$|^[0-9]+[A-Z][0-9]*[a-z][0-9]*$|^[A-Z][0-9]*[a-z][0-9]+$|^[0-9]*[A-Z][0-9]+[a-z][0-9]*$|^[0-9]*[a-z][0-9]*[A-Z][0-9]+$|^[0-9]*[a-z][0-9]+[A-Z][0-9]*$)/;

if(valid_pword.test(pword1) ) {
   // alert('it is valid');
$('#warn').show().text('Password You Entered Is Valid').removeClass('bg-danger').addClass('bg-success');   
    //return true;   
}else if(pword1==""){ 

//alert('It Is Empty !!');
$('#warn').show().text('Please Enter The Password').removeClass('bg-success').addClass('bg-danger');  
//return false; 
}else{
//alert('It is normally invalid');
$('#warn').show().text('Please Enter Valid Password').removeClass('bg-success').addClass('bg-danger');  
//return false;
}
$('#hint1').hide();  
 }
 
//confirm password verification
 function pword_vali1(){
     let pword1=$('#pword1').val();
    let confirm_p=$('#pword2').val();//alert(pword1);
    if ( (pword1==confirm_p)&&(pword1!='')&&(confirm_p!='') ){
     //   alert('Two Password Matched ');
$('#warn').show().text('Correct Two Passwords Matched').removeClass('bg-danger').addClass('bg-success');        
    }else if( (pword1!=confirm_p)&&(pword1!='')&&(confirm_p!='') ){
       // alert('You Typed Two Different Passwords');
$('#warn').show().text('Passwords Does Not Match ! ').removeClass('bg-success').addClass('bg-danger');
    }else{}
     //return false;
     $('#hint1').hide();
}
//$('#pword1').off('mouseout')
