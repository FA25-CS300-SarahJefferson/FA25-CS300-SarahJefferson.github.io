
// Open Data
async function openData() {
    const data = await fetch('https://api.github.com/repos/FA25-CS300-SarahJefferson/FA25-CS300-SarahJefferson.github.io');;
    const open_data = await data.json();
    console.log("Open data: ", open_data);
}

openData();

//Users Data
async function usersData() {
    const data = await fetch('https://fa25-cs300-sarahjefferson.github.io/users_data.json');;
    const users_data = await data.json();
    console.log("Users data: ", users_data);
}

usersData();

//Product Data
async function productData() {
    const data = await fetch('https://fa25-cs300-sarahjefferson.github.io/products_data.json');;
    const product_data = await data.json();
    console.log("Product data: ", product_data);
}

productData();