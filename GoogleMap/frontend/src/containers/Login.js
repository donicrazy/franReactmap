import React from 'react';
import { Component } from 'react';
import { render } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn, getTrucks } from '../redux/action';
import { compose } from 'redux';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput, MDBCardBody } from 'mdbreact';
import { makeSelectUserError } from '../redux/selector';
import { createStructuredSelector } from 'reselect';

class Login extends Component{
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',            
            error: '',
        }
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value,
            error: '',
        })
    }
    componentWillReceiveProps(nextProps) {
        if ( nextProps.error )
        {
            this.setState({
                error: nextProps.error
            })
        }
    }
    gotoMap = () => {
        const { history } = this.props;
        history.push('/map');
    }
    logInUser = (e) => {
        e.preventDefault();
        const { signIn } = this.props;
        const { username, password} = this.state;
        signIn({username, password, success:this.gotoMap});
    }

    render() {
        const { error } = this.state;
        return (
            <div className="signContainer">
            <MDBRow>
                <MDBCol md="6" className="centerSignUp">
                <MDBCard>
                    <MDBCardBody>
                    { error && (<span className="alertSign">{error}</span>) }
                    <form onSubmit={this.logInUser}> 
                        <p className="h4 text-center py-4">Sign up</p>
                        <div className="grey-text">
                        <MDBInput
                            label="Your name"
                            icon="user"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                            id="username"
                            onChange={this.handleChange}
                        />
                        <MDBInput
                            label="Your password"
                            icon="lock"
                            group
                            type="password"
                            validate
                            id="password"
                            onChange={this.handleChange}
                        />
                        </div>
                        <div className="text-center py-4 mt-3">
                        <MDBBtn color="cyan" type="submit">
                            Register
                        </MDBBtn>
                        </div>
                    </form>
                    </MDBCardBody>
                </MDBCard>
                </MDBCol>
            </MDBRow>
            </div>
        )
    }
}

const maptDispatchToProps = {
    signIn: signIn,
    getTrucks: getTrucks,
}

const mapStateToProps = createStructuredSelector({
    error: makeSelectUserError(),
})

export default compose(connect(mapStateToProps, maptDispatchToProps))(Login);