/* browser support on android devices*/
$(function () {
  var nua = navigator.userAgent
  var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
  if (isAndroid) {
    $('select.form-control').removeClass('form-control').css('width', '100%')
  }
})
/* browser support on android devices*/
/* enables tooltip everywhere*/
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
/*enables tooltip every where*/
$(document).ready(
  ()=> {
 /* scroll indicator customizer*/ 
 $('#scroll_indicator').addClass('d-none d-md-block')  
 /* scroll indicator customizer*/
 var aa1=scrollY; var aa2= scrollMaxY;
 var height22=(aa1/aa2) * 100;
 var height22=height22+'%'
 $('#scroll_indicator').css('width',height22) 
   })

/* end of the first page called index.html codes  */
$('#hide_msg_1').click(
  ()=>{
    $('#msg_1').addClass('animate__animated') 
    $('#msg_1').addClass('animate__hinge')
  $(this).prop('data-dismiss','alert')
  }
) 
//data-dismiss="alert5"
$('#hide_msg_2').click(
  ()=>{
    $('#msg_2').addClass('animate__animated') 
    $('#msg_2').addClass('animate__hinge')
  $(this).prop('data-dismiss','alert')
  }
)
//the toggles Nav item called developers
$('#navbarText').on('show.bs.collapse',()=>{
$('#developers').removeClass('d-none')
})

$('#navbarText').on('hide.bs.collapse',()=>{
$('#developers').addClass('d-none') 
})
// End Of the Nav item called developers togggles 
// navbar collpase toggles 
$('.nav-link-toggle').click(
    ()=>{
        $('.collapse').collapse('hide')
    }
)
// the end of  navbar collpase toggles 

//scroll indicator
$(window).scroll(
  ()=>{
 var aa1=scrollY; var aa2= scrollMaxY;
    var height2=(aa1/aa2) * 100;
    var height2=height2+'%'
    $('#scroll_indicator').css('width',height2)    
  }
) 
// the end of scroll indicator

//get the current date
$(document).ready( 
    ()=>{ 
var year=new Date()
var today=year.getFullYear()
$('#current_date').html(today)

//$('td').addClass('px-1')
})

//view password
$('#view-password').click(
()=>{
var password_type=$('#exampleInputPassword1').prop('type')
if (password_type=='password') {
$('#exampleInputPassword1').prop('type','text')  
}else{
  $('#exampleInputPassword1').prop('type','password')}}) 
  //the end of view password 
  //on submit validation
  $('#login_form').submit(
    ()=>{
      var email=$('#exampleInputEmail1').val()
      var password=$('#exampleInputPassword1').val()
//email and password validation      
let valid_email=/[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/;
let valid_pword=password.length
if (valid_email.test(email) &&(valid_pword<14) ) {
  return true
} else {
  $('#modal-notification').text('please enter valid password and email').addClass('bg-warning')  

  setTimeout(
    ()=>{
$('#modal-notification').text('').removeClass('bg-warning')
    },5000
  )
 return false 
}
//password and email validation end validation
    
    })
    /* end of the first page called index.html codes  */

    /* beggning of code for the file callled register.html */
//view password
  $('#view-password_1').click(
    ()=>{
    var password_type=$('#pword1').prop('type')
    if (password_type=='password') {
    $('#pword1').prop('type','text')  
    }else{
      $('#pword1').prop('type','password')}})
//view password 2
      $('#view-password_2').click(
        ()=>{
        var password_type=$('#pword2').prop('type')
        if (password_type=='password') {
        $('#pword2').prop('type','text')  
        }else{
          $('#pword2').prop('type','password')}})   
          
          
          $(function () {
            $('[data-toggle="popover"]').popover()
          })
    /* beggning of code for the file callled register.html */

    /*code of first-page.html*/
    /* end of the code called first-page.html*/



    /* codes for student-list.html*/
    function myFunction() {
      // Declare variables
      var input, filter, table, tr, td, i, tf,exp;
      input = document.getElementById("student-list");
      filter = input.value.toUpperCase();
      table = document.getElementById("table1");
      tr = table.getElementsByTagName("tr");
    
      // Loop through all table rows, and hide those who don't match the search query
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        tf = tr[i].getElementsByTagName("td")[1];
        exp= tr[i].getElementsByTagName("td")[2];
        other=tr[i].getElementsByTagName("td")[3];
        if (td || tf || exp || other ) {
          txt1Value = td.textContent || td.innerText;
          txValue = tf.textContent || tf.innerText;
          expValue = exp.textContent || exp.innerText;
          otherValue=other.textContent || other.innerText;
          if (txt1Value.toUpperCase().indexOf(filter) > -1 || txValue.toUpperCase().indexOf(filter) > -1 || expValue.toUpperCase().indexOf(filter) > -1 || otherValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }   
    
    //validate student data
    function student_fname() {
      var fname=$('#std-f-name').val()
     //console.log(fname)
     var vld_fname=/^[a-zA-Z]+$/;
     if(vld_fname.test(fname)&& (fname.length <= 30) ){
$('#valid-msg').text('valid first name').addClass('bg-success p-1').removeClass('bg-danger')
return true
     }
     else{ 
 $('#valid-msg').text('invalid first name').addClass('bg-danger p-1').removeClass('bg-success')
 return false      
      }
    }
    function student_lname() {
      var lname=$('#std-l-name').val()
      var vld_lname=/^[a-zA-Z]+$/;
      if(vld_lname.test(lname)&&(lname.length <= 30)){
 $('#valid-msg').text('valid last first name').addClass('bg-success p-1').removeClass('bg-danger')
return true     
}
      else{ 
  $('#valid-msg').text('invalid last name').addClass('bg-danger p-1').removeClass('bg-success')      
return false       
}
    }
    function student_class() {
    var classe=$('#std-class').val()
    var vld_class=/^[a-zA-Z0-9_]+$/
    if (vld_class.test(classe)&&(classe.length<11) ) {
      $('#valid-msg').text('valid class').addClass('bg-success p-1').removeClass('bg-danger')      
    return true
    } else {
      $('#valid-msg').text('invalid class').addClass('bg-danger p-1').removeClass('bg-success')      
   return false
    }
    }
    function student_dob() {
    var dob=$('#std-dob').val()
    
    if ( !(isNaN(dob))&&(dob.length<=5)&&(dob!=='')&&(dob<=3000)&&(dob>=1990) ) {
      $('#valid-msg').text('valid year').addClass('bg-success p-1').removeClass('bg-danger')     
   return true
    } else {
      $('#valid-msg').text('invalid year').addClass('bg-danger p-1').removeClass('bg-success')      
  return false
    }
    }
    function student_gender() {
    var gender=$('#std-gender').val()
    if (gender=='m' || gender=='f') {
      $('#valid-msg').text('valid gender').addClass('bg-success p-1').removeClass('bg-danger')   
   return true
    } else {
      $('#valid-msg').text('invalid gender').addClass('bg-danger p-1').removeClass('bg-success')       
   return false
    }
    }    
    
//on submit
$('#form-add-student').submit(
  ()=>{
   if ( student_fname() && student_lname() && student_class() && student_dob() && student_gender() ) {
     return true
   } else{ return false }
  })//on submit

// end of validating student data

//validate updated student data
//validate student data
function student_fname_updt() {
  var fname=$('#std-f-name_updt').val()
 //console.log(fname)
 var vld_fname=/^[a-zA-Z]+$/;
 if(vld_fname.test(fname)&& (fname.length <= 30) ){
$('#update-msg').text('valid first name').addClass('bg-success p-1').removeClass('bg-danger')
return true
 }
 else{ 
$('#update-msg').text('invalid first name').addClass('bg-danger p-1').removeClass('bg-success')
return false      
  }
}
function student_lname_updt() {
  var lname=$('#std-l-name_updt').val()
  var vld_lname=/^[a-zA-Z]+$/;
  if(vld_lname.test(lname)&&(lname.length <= 30)){
$('#update-msg').text('valid last first name').addClass('bg-success p-1').removeClass('bg-danger')
return true     
}
  else{ 
$('#update-msg').text('invalid last name').addClass('bg-danger p-1').removeClass('bg-success')      
return false       
}
}
function student_class_updt() {
var classe=$('#std-class_updt').val()
var vld_class=/^[a-zA-Z0-9_]+$/
if (vld_class.test(classe)&&(classe.length<11) ) {
  $('#update-msg').text('valid class').addClass('bg-success p-1').removeClass('bg-danger')      
return true
} else {
  $('#update-msg').text('invalid class').addClass('bg-danger p-1').removeClass('bg-success')      
return false
}
}
function student_dob_updt() {
var dob=$('#std-dob_updt').val()

if ( !(isNaN(dob))&&(dob.length<=5)&&(dob!=='')&&(dob<=3000)&&(dob>=1990) ) {
  $('#update-msg').text('valid year').addClass('bg-success p-1').removeClass('bg-danger')     
return true
} else {
  $('#update-msg').text('invalid year').addClass('bg-danger p-1').removeClass('bg-success')      
return false
}
}
function student_gender_updt() {
var gender=$('#std-gender_updt').val()
if (gender=='m' || gender=='f') {
  $('#update-msg').text('valid gender').addClass('bg-success p-1').removeClass('bg-danger')   
return true
} else {
  $('#update-msg').text('invalid gender').addClass('bg-danger p-1').removeClass('bg-success')       
return false
}
}    

//on submit
$('#form-update-student').submit(
()=>{
if ( student_fname_updt() && student_lname_updt() && student_class_updt() && student_dob_updt() && student_gender_updt() ) {
 return true
} else{ return false }
})//on submit

//validate student data
//end of validating updated student data
/*end of codes for student-list.html*/

/* borrowers.html for students*/

  
/* end of borrowers.html for students*/
