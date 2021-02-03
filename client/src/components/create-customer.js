import React, { Component } from 'react';
import axios from 'axios';
import {SERVER_URL} from '../utils/constants';

export default class CreateCustomer extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
            address: '',
            age: ''
        }
        this.onChangeCustomerAddress = this.onChangeCustomerAddress.bind(this);
        this.onChangeCustomerAge = this.onChangeCustomerAge.bind(this);
        this.onChangeCustomerEmail = this.onChangeCustomerEmail.bind(this);
        this.onChangeCustomerName = this.onChangeCustomerName.bind(this);
        this.onChangeCustomerPhone = this.onChangeCustomerPhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeCustomerName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeCustomerEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangeCustomerAddress(e) {
        this.setState({
            address: e.target.value
        });
    }
    onChangeCustomerPhone(e) {
        this.setState({
            phone: e.target.value
        });
    }
    onChangeCustomerAge(e) {
        this.setState({
            age: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Name: ${this.state.name}`);
        console.log(`Email: ${this.state.email}`);
        console.log(`Age: ${this.state.age}`);
        console.log(`Phone: ${this.state.phone}`);
        console.log(`Address: ${this.state.address}`);

        const newCustomer = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            age: this.state.age,
            address: this.state.address
        }
        
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.");
        const response = axios.post(SERVER_URL + '/api/customer', newCustomer, {headers:{'x-auth-token':''}}).then(res => console.log(res));
        console.log(response);

        this.setState({
            name: '',
            email: '',
            phone: '',
            age: '',
            address: ''
        });
        this.props.history.push('/');
    }
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Customer</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeCustomerName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeCustomerEmail}
                                />
                    </div>
                    <div className="form-group">
                        <label>Phone: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.phone}
                                onChange={this.onChangeCustomerPhone}
                                />
                    </div>
                    <div className="form-group">
                        <label>Address: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.address}
                                onChange={this.onChangeCustomerAddress}
                                />
                    </div>
                    <div className="form-group">
                        <label>Age: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.age}
                                onChange={this.onChangeCustomerAge}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Customer" className="btn btn-primary" />
                    </div>
                </form>
            </div>        
            );
    }
}