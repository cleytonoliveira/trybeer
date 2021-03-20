import React, { useContext } from 'react';
import CheckoutContext from '../../context/CheckoutContext';

function FormCheckout() {
  const { handleChange, address } = useContext(CheckoutContext);

  return (
    <div>
      <label htmlFor="rua">
        Rua:
        <input
          type="text"
          id="rua"
          name="rua"
          value={ address.rua }
          onChange={ handleChange }
          data-testid="checkout-street-input"
        />
      </label>
      <label htmlFor="numero">
        Número da casa:
        <input
          type="number"
          id="numero"
          name="numero"
          value={ address.numero }
          onChange={ handleChange }
          data-testid="checkout-house-number-input"
        />
      </label>
    </div>
  );
}

export default FormCheckout;
