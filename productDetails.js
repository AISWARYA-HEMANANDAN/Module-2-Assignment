const urlparams = new URLSearchParams(window.location.search)
const productId = urlparams.get('id')
const productContainer = document.getElementById("product details")

async function productDetails() {

    try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        const details = await response.json()
        document.getElementById("loading").style.display = 'none'
        displayProductDetails(details)

    } catch (error) {
        console.log(Error);
    }
}

function displayProductDetails(details) {
    const productData = `

    <div class="col-md-6 product-image-container">
        <img src=${details.image} alt="product">
    </div>
    <div class="col-md-6">
        <h2>${details.title}</h2>
        <p class="text-muted">${details.category}</p>
        <p>${details.description}</p>
        <h3 class="text-primary">$${details.price}</h3>
        <button class="btn btn-success">Buy Now</button>
    </div>

   `
    productContainer.innerHTML = productData
}
productDetails()