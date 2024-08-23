import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { debounce } from 'lodash';
import TextInput from '../components/TextInput';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import ProductForm from './ProductForm';
import { createProduct,deleteProduct,fetchProducts } from '../store/productSlice';
const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const products = useSelector((state) => state.Product.product);
  const [isModalOpen, setModalOpen] = useState(false);
  const [product, setProduct] = useState('');
  const dispatch = useDispatch();

  const handleSearch = debounce((term) => {
    dispatch({ type: 'FILTER_PRODUCTS', payload: term });
  }, 300);




  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSaveProduct = (newProduct) => {
    dispatch(createProduct(newProduct));
    dispatch(fetchProducts());
    handleCloseModal();
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
          <ul style={{ listStyleType: 'none', padding: 0 }}>
        {products.map((product,index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px',
              borderBottom: '1px solid #ddd',
              position: 'relative',
            }}
          >
            <div>{product.name}</div>
            <div
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                opacity: 0,
                visibility: 'hidden',
                transition: 'opacity 0.3s ease, visibility 0.3s ease',
                display: 'flex',
                gap: '10px',
              }}
            >
              <Button
                variant="outlined"
                onClick={() =>{setProduct(product); handleOpenModal()}}
                style={{ padding: '5px' }}
              >
                Edit
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => dispatch(deleteProduct(product._id))}
                style={{ padding: '5px' }}
              >
                Remove
              </Button>
            </div>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
              }}
              onMouseEnter={(e) => {
                const actionButtons = e.currentTarget.querySelector('div:nth-child(2)');
                actionButtons.style.opacity = 1;
                actionButtons.style.visibility = 'visible';
              }}
              onMouseLeave={(e) => {
                const actionButtons = e.currentTarget.querySelector('div:nth-child(2)');
                actionButtons.style.opacity = 0;
                actionButtons.style.visibility = 'hidden';
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                }}
              >
                <div>{product.name}</div>
                <div
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    opacity: 0,
                    visibility: 'hidden',
                    transition: 'opacity 0.3s ease, visibility 0.3s ease',
                    display: 'flex',
                    gap: '10px',
                  }}
                >
                  <Button
                    variant="outlined"
                    onClick={() => {setProduct(product); handleOpenModal()}}
                    style={{ padding: '5px' }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => dispatch(deleteProduct(product._id))}
                    style={{ padding: '5px' }}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
            <Dialog open={isModalOpen}  onClose={handleCloseModal} fullWidth maxWidth="sm">
        <DialogTitle>Add New Product</DialogTitle>
        <DialogContent>
          <ProductForm product={product} onSave={handleSaveProduct} />
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
