let productContainer = document.getElementById('product');
let search = document.getElementById('search');
let productList = productContainer.querySelectorAll('div')

search.addEventListener('keyup',function() {
    let enterValue = event.target.value.toUpperCase()

    for(count=0;count<productList.length;count=count+1){
        let productName = productList[count].querySelector('p').textContent


        if(productName.toUpperCase().indexOf(enterValue)<0){
            productList[count].style.display = "none"
        }
        else{
           productList[count].style.display = "block"

        }
    }

})