// src/components/AddProduct.jsx

import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const AddProduct = () => {
  const [productData, setProductData] = useState({
    productName: '',
    description: '',
    price: '',
    category: ''
  });

  const handleInputChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', productData);
    // Add logic to handle form submission (e.g., send data to backend)
    // This example logs the form data to console.
  };

  return (
    <div className="add-product-container">
      <h2 className="section-title">Add Product</h2>
      <form onSubmit={handleFormSubmit} className="add-product-form">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Product Name"
              variant="outlined"
              fullWidth
              name="productName"
              value={productData.productName}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Price"
              variant="outlined"
              fullWidth
              type="number"
              name="price"
              value={productData.price}
              onChange={handleInputChange}
              InputProps={{ inputProps: { min: 0 } }} // Ensure positive numbers only
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              name="description"
              value={productData.description}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Category"
              variant="outlined"
              fullWidth
              name="category"
              value={productData.category}
              onChange={handleInputChange}
              required
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: '20px' }}
        >
          Add Product
        </Button>
      </form>
    </div>
  );
}

export default AddProduct;
