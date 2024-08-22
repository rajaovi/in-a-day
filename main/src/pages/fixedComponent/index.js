import React, { useState } from 'react';
import Input from '../../components/input';

const FixedComponent = () => {
  const [rental, setRental] = useState('');
  const handleRental = (data) => {
    setRental(data);
  };
  return (
    <div className="fixed-component">
      <form>
        <div className="fixed-component__monthly-income">
          <h3>Monthly Source of Income</h3>
          <div>
            <select>
              <option value="salary">Salary</option>
              <option value="rent">Rent</option>
              <option value="investment">Investment</option>
            </select>
            <p>
              <Input
                inputType="text"
                inputReqired={false}
                value={rental}
                inputPlaceholder="Enter Value"
                onChangeInput={handleRental}
              />
            </p>
            <button>+</button>
          </div>
          <div>
            <select>
              <option value="rent">Rent</option>
              <option value="salary">Salary</option>
              <option value="investment">Investment</option>
            </select>
            <p>
              <Input
                inputType="text"
                inputReqired={false}
                value={rental}
                inputPlaceholder="Enter Value"
                onChangeInput={handleRental}
              />
            </p>
            <button>+</button>
          </div>
        </div>
        <div className="fixed-component__monthly-income">
          <h3>Monthly Savings of Income</h3>
          <div>
            <select>
              <option value="mf">MF</option>
              <option value="sip">SIP</option>
              <option value="gold">Gold</option>
            </select>
            <p>
              <Input
                inputType="text"
                inputReqired={false}
                value={rental}
                inputPlaceholder="Enter Value"
                onChangeInput={handleRental}
              />
            </p>
            <button>+</button>
          </div>
          <div>
            <select>
              <option value="sip">SIP</option>
              <option value="mf">MF</option>
              <option value="gold">Gold</option>
            </select>
            <p>
              <Input
                inputType="text"
                inputReqired={false}
                value={rental}
                inputPlaceholder="Enter Value"
                onChangeInput={handleRental}
              />
            </p>
            <button>+</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FixedComponent;
