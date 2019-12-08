import React, { useState } from "react";

// Modules
import { useSelector } from "react-redux";

// Utils
import styles from "./StepperView.module.scss";
import getTotalCost from "../../helpers/functions/getCartTotalCost";

// Components
import MainTemplate from "../../templates/MainTemplate/MainTemplate";
import CartItems from "../../components/CartItems/CartItems";
import CreditCard from "../../components/CreditCard/CreditCard";
import StepNav from "../../components/StepBreadcrumbs/StepBreadcrumbs";
import Button from "../../components/Button/Button";
import PaymentConfirmation from "../../components/PaymentConfirmation/PaymentConfirmation";

const Stepper = () => {
  const [step, setStep] = useState(2);
  const { cart } = useSelector(state => ({
    cart: state.cart.items
  }));

  const finalStep = 3;

  return (
    <MainTemplate>
      <main className={styles.main}>
        <StepNav step={step} />
        <div>
          {step === 1 && (
            <div className={styles.cartWrapper}>
              <CartItems items={cart} />
              <br />
              <div className={styles.total}>Total: {getTotalCost(cart)}$</div>
            </div>
          )}
          {step === 2 && <CreditCard />}
          {step === 3 && <PaymentConfirmation cartItems={cart} />}
        </div>
        <div className={styles.stepperNav}>
          {step > 1 && (
            <Button onClick={() => setStep(step - 1)}>Previous</Button>
          )}
          {step !== finalStep && (
            <Button onClick={() => setStep(step * 1 + 1)}>Next</Button>
          )}
        </div>
      </main>
    </MainTemplate>
  );
};

export default Stepper;
