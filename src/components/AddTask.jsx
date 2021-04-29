import React, { useState } from 'react'


const AddTask = ({onAdd,editDataText,clicked}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [remind, setReminder] = useState(false)
    const [id, setId] = useState(4)
    const [textIn, setTextIn] = useState('')



const onSubmit = (e) => {
    e.preventDefault()
    console.table({text,day,remind})


    if(!text){
        return alert('please type something')
    }
    if(!day){
        return alert('please type something')
    
    }
    setText('')
    setDay('')
    setReminder(false)


    onAdd({text,day,remind,id})
    setId(id + 1)
}
if(clicked){
console.log('ji')
}

// const addDate = () => {

//    setDay(editDataText()[1])
    
// }


    return (
        <form  className = 'taskForm' onSubmit = {onSubmit}>
            <div className="formInput">
                <label htmlFor="text">task</label>
                <input type="text" name = 'text' id = 'text' placeholder ='Add Task' value = {textIn}
                onChange = {(e) => !clicked ? setText(e.target.value): clicked}
                />
            </div>

            <div className="formInput">
                <label htmlFor="day">day</label>
                <input type="text" name = 'day' id = 'text' placeholder ='Add Day And Time' value = {day}
                onChange = {(e) => setDay(e.target.value)}/>
            </div>

            <div className="formCheck">
                <label htmlFor="reminder">reminder</label>
                <input type="checkbox" name = 'reminder' id = 'text'  value = {remind}
                onChange = {(e) => {setReminder(e.target.checked)}}/>
            </div>

            <input type="submit" name ='submit' id = 'submit' value = 'Save Task'
            className = 'btn' 
            
            />

        </form>
    )
}



export default AddTask
