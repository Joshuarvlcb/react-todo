import Listitem from "./listitem"

const Tasks = ({tasks,Ondelete,onToggle,edit,editData}) => {
    return <>
        {tasks.map((task,index) => (
            // <div key = {task.id}>
            // <h3>{task.text}</h3>
            // <p>{task.day}</p>
            // </div>
            <Listitem editData = {editData} key = {task.id} task={task} Ondelete = {Ondelete} onToggle = {onToggle} edit = {edit}  />
        ))}
    </>
}
export default Tasks