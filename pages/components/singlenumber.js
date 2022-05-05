import {useState,useEffect} from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios'

export const Singlenumber=({n})=>{
    const[checked,setChecked]=useState(false)
    useEffect(()=>{
setChecked(n.ticked)
    },[n])
    const handleChange = async(id) => {
        console.log(id)
        const res = await axios.post('http://localhost:3000/api/passwo',{id:`${id}`})
        setChecked(!checked)
};
return(
    <>
     <Checkbox    checked={checked}
        onChange={()=>handleChange(n._id)}
        inputProps={{ 'aria-label': 'primary checkbox' }} />
        <h5>{n.number}</h5>
    </>
)
}

export default Singlenumber