import {useState} from 'react';
import Button from './Button.jsx'

const Header = ({color:propColor,title,onShowAdd,showAdd}) => {
    const [color,setColor] = useState('red');
    const showing = true;
    const headerText = 'lightblue';
    const onclick = () => {
        console.log('click')
    }

return (
     <header  className = 'header'>
    <h2 style = {{color:propColor}}>{title}</h2>
    <Button  style = {{color: showAdd ? 'red' :'green'}} text = 'Open' onclick = {onShowAdd}
    
    text = {showAdd ? 'closed' : 'open'}
    />
</header>
)
}
Header.defaultProps = {
    title:'Todo List',
    color:'orange'
}


export default Header