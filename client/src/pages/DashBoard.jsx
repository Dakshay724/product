import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { debounce } from 'lodash';
import TextInput from '../components/TextInput';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import ProductForm from './ProductForm';
import { createProduct, deleteProduct, fetchProducts, searchProduct, updateProduct } from '../store/productSlice';
import './DashBoard.css';  // Import the stylesheet

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const products = useSelector((state) => state.Product.product);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const dispatch = useDispatch();

  const handleSearch = debounce((term) => {
    dispatch(searchProduct(term));
  }, 300);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSaveProduct = (newProduct) => {
    console.log(newProduct);
    if (newProduct?.isEdit) {
      dispatch(updateProduct(newProduct));
    } else {
      dispatch(createProduct(newProduct));
    }
    dispatch(fetchProducts());
    handleCloseModal();
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <TextInput
          label="Search Products"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            handleSearch(e.target.value);
          }}
        />
        <Button variant="contained" onClick={handleOpenModal}>
          Add New Product
        </Button>
      </div>
      <ul className="product-list">
        {products.map((product, index) => (
          <li key={index} className="product-item">
            <div>{product.name}</div>
            <div className="action-buttons">
              <Button
                variant="outlined"
                onClick={() => {
                  const newProduct={...product,isEdit: true};
     
                  setSelectedProduct(newProduct);
                  handleOpenModal();
                }}
              >
                Edit
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => dispatch(deleteProduct(product._id))}
              >
                Remove
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <Dialog open={isModalOpen} onClose={handleCloseModal} fullWidth maxWidth="sm">
        <DialogTitle>{selectedProduct?.isEdit ? 'Edit Product' : 'Add New Product'}</DialogTitle>
        <DialogContent>
          <ProductForm product={selectedProduct} onSave={handleSaveProduct} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Dashboard;
