import { useState } from "react";
import { nanoid } from "nanoid";
import FooterColumnLinks from "./components/FooterColumnLinks";
import Product from "./components/Product";

import { initialProducts, footerLinks } from './fixtures';

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [editing, setEditing] = useState(false);

  // state variable for the product form
  
  
  const footerColumns = footerLinks.map(column => (
    <FooterColumnLinks key={column.title} data={column} />
  ));

  const productList = products.map(product => (
    <Product key={product.name} product={product} />
  ));

  function handleCancel(e) {
    e.preventDefault();
    setEditing(null);
  }

  // Product Form
  const productForm = (
    <form>
      <div className="control-group">
        <label htmlFor="product-name">Name: </label>
        <input
          id="product-name"
          name="name"
          type="text"
        />
      </div>
       
      <div className="control-group">
        <label htmlFor="product-category">Category:</label>
        <select
          id="product-category"
          name="category"
        >
          <option value="0">Uncategorized</option>
        </select>
      </div>

      <div className="control-group">
        <label htmlFor="product-price">Price: </label>
        <input
          id="product-price"
          name="price"
          type="number"
          step="0.01"
        />
      </div>

      <div className="control-group">
        <label htmlFor="product-quantity">Quantity: </label>
        <input
          id="product-quantity"
          name="quantity"
          type="number"
        />
      </div>
    
      <div className="btn-group">
        <button type="button" className="btn-primary">Save</button>
        <button type="button" className="btn-cancel" onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  );

  // Category Form
  const categoryForm = (
    <form>
      <div className="control-group">
        <label htmlFor="category-name">Category Name: </label>
        <input
          id="category-name"
          name="categoryName"
          type="text"
        />
      </div>

      <div className="btn-group">
        <button type="button" className="btn-primary">Save</button>
        <button type="button" className="btn-cancel" onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  );

  return (
    <div className="app"> {/* Changed class to className */}
      <section id="content">
        <header>
          <div>
            <h1>Shop Mart</h1>
            <div>
              <button className="icon-btn"><span>&#129293;</span><span className="badge">2</span></button>
              <button className="icon-btn"><span>&#128722;</span><span className="badge">1</span></button>
            </div>
          </div>
          
          <div>
            <nav>
              <button>Home</button>
              <button>Catalog</button>
              <button>All products</button>
              <button>Wishlist</button>
            </nav>
            <form>
              <input type="search" placeholder="search" />
              <button type="button">Go</button>
            </form>
          </div>

          <div>
            <button className="btn-primary" onClick={() => setEditing('product')}>New Product</button>
            <button className="btn-secondary" onClick={() => setEditing('category')}>New Category</button>
          </div>

          <div className="add-form">
            {editing === 'product' && productForm}
            {editing === 'category' && categoryForm}
          </div>
          
        </header>
        <main>
          {productList}
        </main>
      </section>
      <footer>
        <div>
          {footerColumns}
        </div>
        <div>
          &copy; Yves Rene Shema, 2024
        </div>
      </footer>
    </div>
  );
}

export default App;
