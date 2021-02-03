import React, { Component } from 'react';
import axios from 'axios';

export default class EditCustomer extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            address: '',
            age: ''
        };

        this.onChangeCustomerName = this.onChangeCustomerName.bind(this);
        this.onChangeCustomerEmail = this.onChangeCustomerEmail.bind(this);
        this.onChangeCustomerPhone = this.onChangeCustomerPhone.bind(this);
        this.onChangeCustomerAddress = this.onChangeCustomerAddress.bind(this);
        this.onChangeCustomerAge = this.onChangeCustomerAge.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        axios.get('http://localhost:8069/api/customer/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    email: response.data.email,
                    phone: response.data.phone,
                    address: response.data.address,
                    age: response.data.age,
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
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
        const obj = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address,
            age: this.state.age
        };
        console.log(obj);
        axios.put('http://localhost:8069/api/customer/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Edit Customer</h3>
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
                        <input type="submit" value="Save Customer" className="btn btn-primary" />
                    </div>
                </form>
            </div>        
        )
    }
}