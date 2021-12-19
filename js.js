const btnNo=document.querySelector('#btnNo')
btnNo.addEventListener('mouseover',function(){
  
  const randomX=parseInt(Math.random()*50)
  const randomY=parseInt(Math.random()*50)
  
  btnNo.style.setProperty('top',randomX+'%')
  btnNo.style.setProperty('left',randomY+'%')
  
  btnNo.style.setProperty('transform','translate(-${ramdowX}%,-${ramdoY}%)');
  
})


btnNo.addEventListener('click',function(){
  
  const randomX=parseInt(Math.random()*50)
  const randomY=parseInt(Math.random()*50)
  
  btnNo.style.setProperty('top',randomX+'%')
  btnNo.style.setProperty('left',randomY+'%')
  
  btnNo.style.setProperty('transform','translate(-${ramdowX}%,-${ramdoY}%)');
  
})