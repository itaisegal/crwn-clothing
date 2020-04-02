import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForSrtipe = price * 100;
  const publishablekey = 'pk_test_pLg32QixEQL3EGnABwa9htOS00BD9owF4T';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'POST',
      data: {
        amount: priceForSrtipe,
        token
      }
    })
      .then(response => {
        alert('Payment successful');
      })
      .catch(error => {
        console.log('Payment error: ', error);
        alert('There was an issue with the payment');
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothin Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForSrtipe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
