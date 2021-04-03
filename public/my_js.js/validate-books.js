/* validate data of lend_1_book.html only */
$('#lend_1_bk').submit(
    ()=>{ 
var book_name=$('#book_name').val()
var book_id=$('#book_id').val()
var book_type=$('#book_type').val()
if (book_name==''||book_id==''||book_type=='') {
    $('#on_books-message').text(' Fill empty fields ').removeClass('bg-danger').addClass('bg-success')
    $('.modal').modal('show')
    return false
}else if(book_name.length>40||book_id.length>12||book_type.length>40){
    $('#on_books-message').text(' Enter valid values on book name and book id and book type ').removeClass('bg-danger').addClass('bg-success')
    $('.modal').modal('show')
    return false
}
 else {
 return true   
}
    })
/* validate data of lend_1_book.html only */


/* validate data of lend_1_or_2_books.html only */
    
$('#lend_book_1').click(
    ()=>{
var book1_name=$('#book1_name').val()
var book1_id=$('#book1_id').val()
var book1_type=$('#book1_type').val()

var book2_name=$('#book2_name').val()
var book2_id=$('#book2_id').val()
var book2_type=$('#book2_type').val()
if (book1_name=='' || book1_id=='' || book1_type=='') {
    $('#on_books-message_1').text(' Fill empty fields ').removeClass('bg-success').addClass('bg-danger')
    $('.modal').modal('show')
    return false    
}
if ( (book2_name!=='' || book2_id!=='' || book2_type!=='')&&(book1_name!==''&&book1_id!==''&&book1_type!=='') ) {
    $('#on_books-message_1').html(' If you want to lend two books use second button that is called <kbd class=""><b>"Lend 2 Books"</b></kbd>  ').removeClass('bg-success').addClass('bg-danger')
    $('.modal').modal('show')
    return false    
}
if (book1_name.length>40 || book1_id.length>10 || book1_type.length>35) {
    $('#on_books-message_1').text(' Enter valid values on book name , book id and book type ').removeClass('bg-success').addClass('bg-danger')
    $('.modal').modal('show')
    return false    
}
    })


    $('#lend-all-books').click(
        ()=>{
    var book1_name=$('#book1_name').val()
    var book1_id=$('#book1_id').val()
    var book1_type=$('#book1_type').val()
    
    var book2_name=$('#book2_name').val()
    var book2_id=$('#book2_id').val()
    var book2_type=$('#book2_type').val()

    if ( book2_name=='' || book2_id=='' || book2_type=='' || book1_name==''||book1_id==''||book1_type=='' ) {
        $('#on_books-message_1').html(' Fill empty spaces on book1 and book2').removeClass('bg-success').addClass('bg-danger')
        $('.modal').modal('show')
        return false    
    }

    if ( (book2_name!=='' || book2_id!=='' || book2_type!=='')  && (book1_name==''&&book1_id==''&&book1_type=='')  ) {
        $('#on_books-message_1').html(' You must lend book 1 firstly then second one or lend two books in one time').removeClass('bg-success').addClass('bg-danger')
        $('.modal').modal('show')
        return false    
    }

    if ( book2_name.length>40 || book2_id.length>10 || book2_type.length>35 || book1_name.length>40||book1_id.length>10||book1_type.length>35 ) {
        $('#on_books-message_1').text('Enter valid values on book name , book id and book type ').removeClass('bg-success').addClass('bg-danger')
        $('.modal').modal('show')
        return false    
    }
    
        })
        
/* validate data of lend_1_or_2_books.html only */
