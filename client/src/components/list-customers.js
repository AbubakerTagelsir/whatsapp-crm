import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Customer = props => (
    <tr>
        <td>{props.customer.name}</td>
        <td>{props.customer.email}</td>
        <td>{props.customer.phone}</td>
        <td>{props.customer.address}</td>
        <td>{props.customer.age}</td>
        <td>
            <Link to={"/customer/edit/"+props.customer._id}>Edit</Link>
        </td>
    </tr>);

export default class CustomersList extends Component {
    constructor(props){
        super(props);
        this.state = {
            customers: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8069/api/customer').then(res => {
            this.setState({customers: res.data});
        }).catch(err => console.log(err));
    }
    customersList() {
        return this.state.customers.map(function(currentCustomer, i){
            return <Customer customer={currentCustomer} key={i} />;
        })
    }
    render() {
        return (
            <div>
                <h3>Customers List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.customersList() }
                    </tbody>
                </table>
            </div>        )
    }
}