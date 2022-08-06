import React from "react";

const Form = () => {
    return (
        <form>
            {/* <label>Expense</label><br/> */}
            <input type="text" className="form" value="Description of Expense"/><br/>
            {/* <label>Amount</label><br/> */}
            <input type="text" className="form" value="Amount in rupees"/><br/>
            {/* <label></label><br/> */}
            <input type="text" className="form" value="Date"/><br/>
            {/* <label>Amount</label><br/> */}
            <input type="text" className="form" value="Category"/><br/>
            <button type="submit" className="addEvent" value="Save">
                <h4>Save</h4>
            </button>
        </form>
    )
} 
export default Form;