import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import LoginPage from '../components/LoginPage'
import { Grid, Row } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form'
import { auth } from '../actions'

class App extends Component {

    handleSubmit = (values) => {

        const { state } = this.props
        const { auth } = this.props

        if(values.login && values.password) auth(values)
        values.login =""
        values.password =""

    }

    render() {
        const { validateAuth } = this.props.state

        return (

        <Grid>
            <Row>
                <LoginPage val = {validateAuth} onSubmit={this.handleSubmit} />
            </Row>
        </Grid>

        );
    }
}

export default connect((state) =>{
        return { state }
    },  { auth }
)(App)

App.propTypes = {
    validateAuth: PropTypes.shape({
        data: PropTypes.Object,
        loading: PropTypes.bool.isRequired,
        result: PropTypes.bool.isRequired,
        validate: PropTypes.bool.isRequired
    })
}
