let $=document
let backToTop=$.querySelector('.back')
let headerProducts=$.querySelector('.products-header')
let sectionProduct= $.querySelector('.section2')


////////////////////////////////////////////////////////////////////////////////////////

function backToTopHandeler(){
    //window.scrollTo(0 , 0)
    document.documentElement.scrollTo(0, 0)
}


function headerProductHandeler(e){
    e.preventDefault()
    document.documentElement.scrollTo(0, 1370)
}



////////////////////////////////////////////////////////////////////////////////////////

backToTop.addEventListener('click' , backToTopHandeler)
headerProducts.addEventListener('click' , headerProductHandeler)


///////////////////////////////////////////////////////////////////////////////////////

let customScroll = document.querySelector('#scroll')

window.addEventListener('scroll', function () {
    
    let scrollTop = window.scrollY

    let documentHeight = document.body.clientHeight

    let windowHeight = window.innerHeight

    let scrollPercent = scrollTop / (documentHeight - windowHeight)

    let scrollPercentRounded = Math.round(scrollPercent * 100)

    customScroll.style.width = scrollPercentRounded + '%'

    console.log(scrollPercentRounded);
})
//////////////////////////////////////////////////////////////////////////////////////

let objectArry=[
    {id:1 , title:'سیستم کابینت آشپزخانه' , img:'./images/cobinet.jpg'},
    {id:2 , title:'میز کار' , img:'./images/work chair.jpg'},
    {id:3 , title:'کمد و کمد دیواری' , img:'./images/image 2.jpg'},
    {id:4 , title:'کابینت فانتزی' , img:'./images/mini cubin.jpg'},
    {id:5 , title:'میز بار' , img:'./images/bar chair.jpg'},
    {id:6 , title:'پارتیشن' , img:'./images/partition.jpg'},
]

objectArry.forEach(function(product) {
    sectionProduct.insertAdjacentHTML('beforeend' , '<div class="produt-one"><div class="main-item"><img src="' +  product.img + '" alt=""><span><a href="../product/product.html?id=' + product.id + '">' +  product.title + '</a></span></div>')
    })