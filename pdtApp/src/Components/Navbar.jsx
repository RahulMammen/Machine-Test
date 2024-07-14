
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const buttonStyle = {
  textDecoration: 'none',
  marginRight: '10px',
};

const Navbar = () => {
  return (
    <nav>
      <Link to="/" style={buttonStyle}>
        <Button variant="contained" color="primary">
          Home
        </Button>
      </Link>
      <Link to="/add-product" style={buttonStyle}>
        <Button variant="contained" color="primary">
          Add Product
        </Button>
      </Link>
    </nav>
  );
}

export default Navbar;
