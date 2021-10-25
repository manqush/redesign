   
let  SearBtn=document.querySelector('.btnControle')
let  clickSear=document.querySelector('.clickSear')
let  SearBox=document.querySelector('.model-serch')

      SearBtn.addEventListener('click',function(){
       SearBox.style='display: none;'
      })
      clickSear.addEventListener('click',function(){
      SearBox.style='display: block;'
      })



// shop-single img
let BigImg=document.querySelector('.ShopImgBig')
let ItemImg=document.querySelectorAll('.ShopImgItem')
ItemImg.forEach((item)=>{
  item.addEventListener('click',()=>{
    BigImg.setAttribute('src',item.getAttribute('src'))
  })
})

//shop-single size
let SizeBtn=document.querySelectorAll('.ShopSize button')
SizeBtn.forEach((btn)=>{
  btn.addEventListener('click',()=>{
    SizeBtn.forEach((el)=>{
      el.classList.remove('active')
    })
    btn.classList.add('active')
  })
})

//shop-single part
let DcreasBtn=document.querySelector('.DcreasPart')
let CountBtn=document.querySelector('.CountPart')
let IncresBtn=document.querySelector('.IncresPart')
let toNub=parseInt(CountBtn.innerHTML)

IncresBtn.addEventListener('click',()=>{
  toNub +=1
  CountBtn.innerHTML=toNub
})
DcreasBtn.addEventListener('click',()=>{
  if(toNub !=0){toNub -=1}
  CountBtn.innerHTML=toNub
})

console.log(CountBtn.innerHTML)



