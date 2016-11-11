import React, { Component,PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form'
import './login-page.sass'


class LoginPage extends Component {



    render() {

        const { handleSubmit, val:{loading, validate, result}} = this.props

        const Btn = (
                <button className = "contact-form__submit"
                        type="submit">
                        Login
                </button>
        );
        const loadingBtn = (

                <button className = "contact-form__submit contact-form__submit_type_loading"
                        type="submit">
                </button>
        )
        const action=loading ? loadingBtn : Btn

        const form = (
            <div>
                <h1 className = "contact-form__title">Login</h1>
                <form className = "contact-form__form" onSubmit={handleSubmit}>

                    <div>
                        <Field name="login"   placeholder="Login"  className = "contact-form__item"  component="input" className = {"contact-form__item" + (!result && validate ? ' contact-form__item_type_invalid' : '')} type="text"/>
                    </div>

                    <div>
                        <Field name="password"  placeholder="Password"   className = "contact-form__item"  component="input" type="text"/>
                    </div>

                    <div className = "contact-form__btn">{ action }</div>
                </form>
           </div>

        )

        const resSuccess = (
            <div className = "contact-form__success">Successful logged</div>
        )

        const content = validate && result ? resSuccess : form

         return (
             <section className = "contact-form">
                 {content}
             </section>
         )
    }
}



LoginPage = reduxForm({
    form: 'contact'
})(LoginPage);

export default LoginPage

LoginPage.propTypes = {
    onSubmit: PropTypes.func.isRequired,
     val: PropTypes.shape({
            loading: PropTypes.bool.isRequired,
            result: PropTypes.bool,
            validate: PropTypes.bool.isRequired
            })
}
