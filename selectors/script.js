//$('h1').hide()
//$('h1.heading2').hide()
//$('.heading2').hide()
$('span').css('color', 'blue')
$('ul li:first').css('color', 'red')
$('ul li:last').css('color', 'green')
$('ul li:even').css('background-color', 'green')
$('ul li:odd').css('background-color', '#ccc')
$('ul li:nth-child(3n)').css('list-style', 'none')
// selecting type or value
//$(':text').hide()
//selecting attributes
$('[href]').css('color', 'red')
//selecting the actaul value
$('a[href="https://google.com/"]').css('color', 'green')
//selecting everything
//$('*').hide()
//event listeners
$('.btn-1').click(function(e) {
  alert(e.currentTarget.innerHTML)
})
$('.btn-2').on('mouseleave',function(){
$("#p-1").toggle()
})
