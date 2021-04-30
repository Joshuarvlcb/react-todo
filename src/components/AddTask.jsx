import React, { useState } from 'react'


const AddTask = ({onAdd,clicked,data}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [remind, setReminder] = useState(false)
    const [id, setId] = useState(4)
    const [textIn, setTextIn] = useState('')


const setData = (e)=>  {
    e.preventDefault();
    setText(data.text);
    setDay(data.day);
    setReminder(data.reminder);
}

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
    return (
        <form  className = 'taskForm' onSubmit = {clicked ? setData : onSubmit}>
            <div className="formInput">
                <label htmlFor="text">task</label>
                <input type="text" name = 'text' id = 'text' placeholder ='Add Task' value = {text}
                onChange = {(e) => setText(e.target.value)}
                />
            </div>

            <div className="formInput">
                <label htmlFor="day">day</label>
                <input type="text" name = 'day' id = 'text' placeholder ='Add Day And Time' value = {day}
                onChange = {(e) => setDay(e.target.value)}/>
            </div>

            <div className="formCheck">
                <label htmlFor="reminder">reminder</label>
                <input type="checkbox" name = 'reminder' id = 'text'  checked = {remind}
                onChange = {(e) => {setReminder(e.target.checked)}}/>
            </div>

            <input type="submit" name ='submit' id = 'submit' value = {clicked ? 'Edit' : 'Save Task'}
            style = {clicked ? {backgroundColor:'orange'} : {backgroundColor:'black'}}
            className = 'btn' 
            />

        </form>
    )
}



export default AddTask
