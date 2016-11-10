import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import './contact-form.sass'
import { FormControl, FormGroup} from 'react-bootstrap';

class ContactForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        const {loading, validate, result} = this.props.val
        console.log('ContactForm')
        console.log(loading)
        console.log(validate)
        console.log(result)

        const Btn = (
            <div className = "contact-form__btn">
                <button className = "contact-form__submit" type="submit">Login</button>
            </div>
        );
        const gear = (
            <div>loading</div>
        )
        const action=loading ? gear : Btn

        const form = (
            <section className = "contact-form">

                <h1 className = "contact-form__title">Login</h1>

                <form onSubmit={handleSubmit}>


                        <Field name="login"  placeholder = "Login"  className = "contact-form__item"  component="input" className = {"contact-form__item" + (!result && validate ? ' contact-form__item_type_invalid' : '')} type="text"/>



                        <Field name="password"   placeholder = "Password" className = "contact-form__item" component="input" type="text"/>


                    { action }
                </form>
            </section>

        )

        const resSuccess = (
            <div>success</div>
        )

        const resFail = (
            <div>fail</div>
        )

         if(validate&&result){
             return resSuccess
         } else {
             return form
         }
    }
}


// Decorate the form component
ContactForm = reduxForm({
    form: 'contact' // a unique name for this form
})(ContactForm);

export default ContactForm
