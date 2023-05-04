import Button from "./button"
import Item from "./item"
const Items = ({tasks, delItems, ToggleReminder}) => {
    
    return(
        <div className='task-container'>
            {tasks.map((i)=>(
                <Item task={i} delTask={delItems} onDclick={ToggleReminder} />
            ))}
            
        </div>
    )
}
export default Items