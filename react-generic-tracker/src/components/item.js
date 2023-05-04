import {FaTimes,FaPencilAlt} from 'react-icons/fa'


const Item = ({task, delTask, onDclick}) => {


    return (
        
        <div key={task.id} className={`item ${task.reminder ? 'item-reminder' :''}`} style={{cursor:'pointer'}} onDoubleClick={()=> onDclick(task.id)} >
            {task.name}
            <span>
               : {task.Amount} 
            </span>
            <span style={{float:'right'}}>
                <FaTimes style= {{color:'red', cursor:'pointer'}} onClick={() => delTask(task.id)} />
                <FaPencilAlt style={{margin:'0px 10px',cursor:'pointer', color:'grey'}} />
            </span>
        </div>
    )
}
export default Item