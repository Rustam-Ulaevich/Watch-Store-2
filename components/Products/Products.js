class Products {
  render() {
    let htmlCatalog = "";

    CATALOG.forEach(({ id, name, img, price }) => {
      htmlCatalog += `
        <li class = 'products-element'>
          <span class = 'products-element__name'>${name}</span>
          <img class = 'products-element__img' src='${img}' />
          <span class = 'products-element__price'>${price.toLocaleString()} рублей</span>
          <button class = 'products-element__btn'>Add to cart</button>
        </li>
        `;
    });

    const html = `<ul class = 'products-container'>
    ${htmlCatalog} 
    </ul>`;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
productsPage.render();
