import React from "react";

import CartView from "../../components/CartView/CartView";

const Stepper = () => {
  return (
    <div className="Stepper">
      <header className="Stepper-header">
        <CartView />
      </header>
    </div>
  );
};

export default Stepper;
