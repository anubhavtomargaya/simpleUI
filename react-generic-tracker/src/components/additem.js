import { useState } from "react"



const AddItem = ({ savetask }) => {
    const [name, addtask] = useState('')
    const [Amount, addamount] = useState('')
    const [reminder, addreminder] = useState(false)


const submittask = (e) => {
    e.preventDefault()

    if(!name) {
        alert('add task')
        return
    }

    savetask({name, Amount, reminder})
    
    addtask('')
    addamount('')
    addreminder(false)

}
    return (
        <form className='add-form' onSubmit={submittask} >
            <div className='form-control'>
                <label> Add Task</label>
                    <input type='text' placeholder='Task' value={name} onChange={(e) => addtask(e.target.value)} />
            </div>
            <div className='form-control'>
                <label> Add Amount</label>
                    <input type='text' placeholder='Amount' value={Amount} onChange={(e) => addamount(e.target.value)} />
            </div>
            <div className='form-control'>
                <label> Reminder</label>
                    <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => addreminder(e.currentTarget.checked)} />
            </div>

            <input type='submit' value='Save' className='save-btn'/>

        </form>

    )
}

export default AddItem