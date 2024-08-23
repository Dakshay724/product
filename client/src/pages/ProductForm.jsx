import React, { useState } from 'react';
import TextInput from '../components/TextInput';
import NumericInput from '../components/NumericInput';
import DropDown from '../components/DropDown';
import DateInput from '../components/DateInput';
import TextArea from '../components/TextArea';

const ProductForm = ({ product, onSave }) => {
  const { name='', price='', category='', expiry='', description='' } = product 
  const [formData, setFormData] = useState({
    name: name ,
    price: price ,
    category: category ,
    expiry: expiry ,
    description: description ,
  });

  // Generic change handler
  const handleChange = (key, value) => {
    setFormData(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  // Handle save action
  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div style={{ padding: '20px' }}>
      <TextInput
        label="Product Name"
        value={formData.name}
        onChange={(e) => handleChange('name', e.target.value)}
      />
      <NumericInput
        label="Product Price"
        value={formData.price}
        onChange={(e) => handleChange('price', e.target.value)}
      />
      <DropDown
        label="Product Category"
        value={formData.category}
        onChange={(e) => handleChange('category', e.target.value)}
        options={[
          { value: 'electronics', label: 'Electronics' },
          { value: 'clothing', label: 'Clothing' },
          { value: 'food', label: 'Food' },
        ]}
      />
      <DateInput
        label="Product Expiry"
        value={formData.expiry}
        onChange={(e) => handleChange('expiry', e.target.value)}
      />
      <TextArea
        label="Product Description"
        value={formData.description}
        onChange={(e) => handleChange('description', e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ProductForm;
