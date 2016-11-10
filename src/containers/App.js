import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from '../components/ContactForm'
import { Grid, Row } from 'react-bootstrap';

import { auth } from '../actions'

class App extends Component {
    handleSubmit = (values) => {
        // Do something with the form values
        console.log('values');
        console.log(values);
        console.log(this.props.auth)
        const { state } = this.props
        console.log('state');
        console.log(state );
        const { auth } = this.props
        console.log('auth')
        console.log(auth)
        auth(values)

    }
    render() {
        const { validateAuth } = this.props.state
        console.log('validate')
        console.log(validateAuth)
        return (
        <Grid>
            <Row>
                <ContactForm val = {validateAuth} onSubmit={this.handleSubmit} />
            </Row>
        </Grid>

        );
    }
}

export default connect((state) =>{
        console.log('state')

        const { validateAuth } = state
    console.log(validateAuth)

        return { state }
    },  { auth }
)(App)
