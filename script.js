const goodsForWomen = [
    {
        imgUrl: 'https://images.asos-media.com/products/adidas-originals-essential-shorts-in-orchid-fusion/204438993-1-lightpink?$n_240w$&wid=168&fit=constrain',
        price: 34.00,
        name: 'adidas Originals'
    },
    {
        imgUrl: 'https://images.asos-media.com/products/asos-design-waisted-midi-tea-dress-with-buttons-in-black/204703777-1-black?$n_240w$&wid=238&fit=constrain',
        price: 34.00,
        name: 'purole gias'
    },
    {
        imgUrl: 'https://images.asos-media.com/products/asos-design-ribbed-scoop-neck-vest-midi-dress-in-black/204068886-2?$n_240w$&wid=238&fit=constrain',
        price: 34.00,
        name: 'nike original'
    },
    {
        imgUrl: 'https://images.asos-media.com/products/asos-design-pleated-bodice-flutter-sleeve-pleat-midi-dress-in-pine-green/204540315-2?$n_240w$&wid=238&fit=constrain',
        price: 44.00,
        name: 'red blade'
    },
    {
        imgUrl: 'https://images.asos-media.com/products/asos-design-lace-insert-pleated-midi-dress-with-embroidery-in-navy/203062571-2?$n_240w$&wid=238&fit=constrain',
        price: 54.00,
        name: 'adidas Originals'
    },
    {
        imgUrl: 'https://images.asos-media.com/products/asos-design-ruffle-off-shoulder-asymmetric-maxi-dress-in-cream-floral-print/204560744-2?$n_240w$&wid=238&fit=constrain',
        price: 94.00,
        name: 'adidas Originals'
    },
    {
        imgUrl: 'https://images.asos-media.com/products/asos-design-ribbed-scoop-neck-vest-mini-dress-in-black/204093946-2?$n_240w$&wid=238&fit=constrain',
        price: 82.00,
        name: 'blue dorn'
    },
    {
        imgUrl: 'https://images.asos-media.com/products/asos-design-twist-off-shoulder-maxi-dress-in-purple/204237906-2?$n_240w$&wid=238&fit=constrain',
        price: 22.00,
        name: 'the gray sac'
    },
    
    {
        imgUrl: 'https://images.asos-media.com/products/asos-edition-satin-bardot-drape-wrap-maxi-dress-in-cinnamon-rose/203594990-2?$n_240w$&wid=238&fit=constrain',
        price: 30.00,
        name: 'kenneth cole'
    },
    
]

const womenProducts = document.querySelector('.women-products')

womenProducts.innerHTML = `
    ${goodsForWomen.map(good => {
        return `
        <div class='each-product'>
                <div>
                    <img src="${good.imgUrl}" alt="product">
                </div>
                <div class="">$ <span class='price'>${good.price}</span></div>
                <div class="product-name">${good.name}</div>
                <button class='add'>ADD TO BAG</button>
            </div>`
    }).join('')}
`

const addBtns = document.querySelectorAll('.add')

addBtns.forEach(addBtn => {
    addBtn.addEventListener('click', addItemToBag)
})

let allNumbs
let numberOfItems
const myCart = document.querySelector('.my-cart')
const subtotalPrice = document.querySelector('.subtotal-price')

function addItemToBag(e){
    const currentItem = e.target.parentElement
    const img = currentItem.querySelector('img')
    const price = currentItem.querySelector('.price')
    const productName = currentItem.querySelector('.product-name')
    

    //select total number of items
    numberOfItems = document.querySelector('.no-of-items')

    numberOfItems.textContent = +numberOfItems.textContent + 1

    const li = document.createElement('li')
    li.classList.add('cart-item')

    li.innerHTML = `
    <div class='img-box'><img src="${img.src}" alt="product"></div>
    <div>
        <div>${productName.textContent}</div>
        <div>$ <span class='price'>${price.textContent}</span></div>
        <div class='item-bottom'>
            <div class='trash'><i class='fa fa-trash'></i></div>
            <div class='item-counter'>
                <button class='increment'>+</button>
                <span class='numb'>1</span>
                <button class='decrement'>-</button>
            </div>
        </div>
    </div>
    `

    console.log(myCart)

    myCart.appendChild(li)

    subtotalPrice.textContent = +subtotalPrice.textContent + +price.textContent

    const allIncrement = document.querySelectorAll('.increment')
    const allDecrement = document.querySelectorAll('.decrement')
    allIncrement.forEach(increaseBtn => {
        increaseBtn.addEventListener('click', increaseSubtotal)
    })

    allDecrement.forEach(decreaseBtn => {
        decreaseBtn.addEventListener('click', decreaseSubtotal)
    })

    allNumbs = document.querySelectorAll('.numb')

}





function increaseSubtotal(e){
    const cartItemNo = e.target.nextElementSibling
    cartItemNo.textContent = +cartItemNo.textContent + 1
    const currentItem = e.target.parentElement.parentElement.parentElement.parentElement

    const price = currentItem.querySelector('.price')

    let numbers = 0
    for(let i = 0; i < allNumbs.length; i++){
       numbers = +allNumbs[i].textContent + numbers
       numberOfItems.textContent = numbers
    }

    const currentItemPrice = cartItemNo.textContent * price.textContent
    subtotalPrice.textContent = +subtotalPrice.textContent + +price.textContent 
    
}

function decreaseSubtotal(e){
    const cartItemNo = e.target.previousElementSibling
    const currentItem = e.target.parentElement.parentElement.parentElement.parentElement
    const price = currentItem.querySelector('.price')

    subtotalPrice.textContent = +subtotalPrice.textContent - +price.textContent 

    if(cartItemNo.textContent > 1){
        cartItemNo.textContent = cartItemNo.textContent - 1
    }
    else {
        myCart.removeChild(currentItem)
        cartItemNo.textContent = cartItemNo.textContent - 1
    }

    

    
    
        let numbers = 0
    for(let i = 0; i < allNumbs.length; i++){
       numbers = +allNumbs[i].textContent + numbers
       numberOfItems.textContent = numbers
    }
}


















const bars = document.querySelector('.mobile-toggle')
const closeNav = document.querySelector('.close-mobile-nav')
const mobileNav = document.querySelector('.mobile-nav-container')

bars.addEventListener('click', displayMobileNav)
closeNav.addEventListener('click', removeMobileNav)

function displayMobileNav(){
    mobileNav.classList.add('display-mobile-nav')
}

function removeMobileNav(){
    mobileNav.classList.remove('display-mobile-nav')
}