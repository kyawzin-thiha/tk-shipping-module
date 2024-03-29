import LeftMenu from '@/components/shared/LeftMenu';
import ItemsTable from '@/components/shared/ItemsTable';
import { Input } from "@/components/ui/input";
import { useState } from 'react';
import Button from '@mui/material/Button';

const ItemsHome = () => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default? form submission
      submitForm();
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const submitForm = () => {
    // Handle form submission logic here; should include a check if the number if valid from ShopVox, if not send err message
    console.log('Form submitted with value:', inputValue);
    // Reset the input value after submission
    setInputValue('');
  };

  return (
    <div className="flex">
      <LeftMenu />
      <div>
        <div className="container">
          <div className="header-form-container">
            <h2 className="h2-semibold">Items to Package</h2>
            <p className="text-gray-500 mt-2">
              Import items from ShopVox or CSV below: 
            </p>
          </div>
          <div className="form-container">
            <div className="form-input-row flex items-center">
              <label htmlFor="item-name" className="block text-sm font-medium text-gray-700 mb-4 mr-3">ShopVox SO #:</label>
              <div className="col-span-1 input-style-modal">
                <Input
                  id="item-name"
                  type="text"
                  value={inputValue}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
              </div>
              <div className="col-span-2 mb-4 ml-auto mr-10"> 
                <Button className="blue-button-custom">
                  <img src="/assets/icons/cloud-arrow-up-solid.svg" alt="add" className="plus-icon" />
                  Import Items from CSV
                </Button>
              </div>
            </div>
          </div>
          
        </div>    
        <ItemsTable />
      </div>
    </div>
  );
};

export default ItemsHome;
