import React, { Component } from 'react';
import axios from 'axios'

class ExpenseList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expenses : [ ]
        }
    }
    
    

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            this.setState({
                expenses: res.data
            })
            console.log(res.data)
            })
    }


    render() {
        const {expenses} = this.state
        return (
            <div className='expenselist'>
                <h1>{this.props.title}</h1>
                <div className='dataheaders'>
                    <div>ID</div>
                    <div>Date</div>
                    <div>Amount</div>
                    <div>Category</div>
                    <div>Description</div>
                 </div>
                {expenses.map(expenses =>
                     <div className='datarow' key={expenses.id}>
                        <div>{expenses.id}</div>
                        <div>06-08-2022</div>
                        <div>890</div>
                        <div>Home</div>
                        <div>{expenses.title}</div>
                    </div>)}
            </div>
        );
    }
}

export default ExpenseList;