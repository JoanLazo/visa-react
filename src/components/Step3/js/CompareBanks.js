import React, { useState } from 'react';
import listOfBanks from './CardBanks';
import getLoan from './CalculateLoan';

const BankOptions = () => {
    const [payment, getPayment] = useState(1000);
    const [value, setValue] = useState('12');
    const [views, setViews] = useState('getLoan');

    const calculatePayment = (values) => {
        const interest = values * (Number(value)/100);
        const total = values + interest;
        const payment = total/Number(value);
        return [interest, total.toFixed(2), payment.toFixed(2)];
    };

    const handleChange = (e) => {
        setValue(e.target.value)
    };

    const sections = [  
        {
          name: 'listOfBanks', 
          component: <listOfBanks
            payment={payment}
            getPayment={getPayment}
            handleChange={handleChange}
            calculatePayment={calculatePayment}
            value={value}
            setViews={setViews}
          />
        },  
    ]; 

    const renderComponents = index => (sections.map(item => item.component)[index]);
    
    return (
      <>
        <SequenceController 
          sections={sections.length}
          actualSection={sections.map(item => item.name).indexOf(views)}
        />
        {renderComponents(sections.map(item => item.name).indexOf(views))}
      </>
    );
};
export default BankOptions;