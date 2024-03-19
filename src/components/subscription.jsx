import React from 'react'
import InputWithButton from "./input";
function Subscription() {
    const handleClick = (inputValue) => {
        console.log('Email-id:', inputValue);
      };
  return (
    <div>
    <h3>Be the first to know</h3>
    <p>Sign up for updates from mettā muse.</p>
    <InputWithButton
      buttonText="SUBSCRIBE"
      placeholder="Enter your e-mail..."
      onClick={handleClick}
    />
  </div>
  )
}

export default Subscription