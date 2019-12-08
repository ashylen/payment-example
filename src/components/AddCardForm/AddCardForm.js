import React from "react";

// Modules
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reset as resetReduxForm, reduxForm, Field } from "redux-form";
import PropTypes from "prop-types";
import classNames from "classnames";

// Components
import Button from "../Button/Button";
import CustomInput from "../CustomInputs/CustomInput";

// Utilities
import styles from "./AddCardForm.module.scss";
import * as userActions from "../../actions/userActions";
import { required as isRequired } from "../../utilities/validators/required";
import { number as creditCardNumberValidator } from "../../utilities/validators/creditCard";

const renderSelect = field => (
  <div>
    <select {...field.input}>
      <option value="">-- Select --</option>
      {field.options}
    </select>
    {field.meta.touched && field.meta.error && (
      <div className={styles.error}>{field.meta.error}</div>
    )}
  </div>
);

class AddCardForm extends React.Component {
  handleSubmit = async values => {
    const { addCard, closeModalFn, idCurrentItem, fetchUserCards } = this.props;

    try {
      await addCard(values);
      await fetchUserCards();
    } catch (e) {
      console.error(e);
    }

    closeModalFn();
  };

  getYearOptions = () => {
    let options = [];

    for (
      let i = new Date().getFullYear();
      i < new Date().getFullYear() + 30;
      i++
    ) {
      options.push(<option value={i}>{i}</option>);
    }

    return options;
  };

  getMonthOptions = () => {
    let options = [];

    for (let i = 1; i < 13; i++) {
      options.push(<option value={i}>{i}</option>);
    }

    return options;
  };

  render() {
    const { handleSubmit, reset, pristine, submitting } = this.props;

    return (
      <React.Fragment>
        <div className={styles.wrapper}>
          <div className={classNames(styles.formHeader)}>Add card</div>
          <form
            onSubmit={handleSubmit(this.handleSubmit)}
            className={classNames(styles.form, {
              [styles.disabled]: submitting
            })}
          >
            <Field
              name="number"
              placeholder=" "
              component={CustomInput}
              type="text"
              validate={[isRequired, creditCardNumberValidator]}
              label="Number"
            />
            <Field
              name="card_holder"
              placeholder=" "
              component={CustomInput}
              type="text"
              validate={[isRequired]}
              label="Name and surname"
            />
            <Field
              name="ccv"
              placeholder=" "
              component={CustomInput}
              type="text"
              validate={[isRequired]}
              label="Card holder"
            />
            <br />
            <span>Expiration month</span>
            <Field
              name="expiration_month"
              placeholder=" "
              component={renderSelect}
              type="text"
              options={this.getMonthOptions()}
              validate={[isRequired]}
              label="Expiration month"
            ></Field>
            <br />
            <span>Expiration year</span>
            <Field
              name="expiration_year"
              placeholder=" "
              component={renderSelect}
              type="text"
              options={this.getYearOptions()}
              validate={[isRequired]}
              label="Expiration year"
            ></Field>
            <br />
            <div className={styles.modalNavigation}>
              {/* {pristine ? null : (
                <Button cssClass="" type="button" disabled={pristine} onClick={reset}>
                  Wyczyść
                </Button>
              )} */}
              <Button type="submit" disabled={submitting}>
                Dodaj
              </Button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

AddCardForm.defaultProps = {
  idCurrentItem: null
};

AddCardForm.propTypes = {
  addCard: PropTypes.func.isRequired,
  closeModalFn: PropTypes.func.isRequired,
  idCurrentItem: PropTypes.number,
  fetchUserCards: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  fetchUserCards: bindActionCreators(userActions.fetchUserCards, dispatch),
  addCard: bindActionCreators(userActions.addCard, dispatch),
  reset: bindActionCreators(resetReduxForm, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(
  reduxForm({
    form: "addNewArticleForm"
  })(AddCardForm)
);
