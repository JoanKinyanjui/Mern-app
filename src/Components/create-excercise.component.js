import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

function CreateExcercise() {
  const [users,setUsers]=useState([]);
  const[username,setUsername]=useState('');
  const[description,setDescription]=useState('');
  const[duration,setDuration]=useState(0);
  const[date,setDate]=useState(new Date());
  

  useEffect(()=>{
    axios.get('https://localhost/5000/users')
    .then(response=>{
      if(response.data.length>0){
        {users.map((user)=>(
        users:<p> {user.username}</p>
        username: response.data[0].username
        ))}
      }
    })
    setUsers(['test user'])
    setUsername('test user')
  },[])
//OnChangeHandlers
  const onChangeUsername = (e) =>{
    setUsername(e.target.value)
  }
  const onChangeDescription = (e) =>{
    setDescription(e.target.value)
  }
  const onChangeDuration = (e) =>{
    setDuration(e.target.value)
  }
  const onChangeDate = (e) =>{
    setDate(e.target.value)
  }

  //onSubmit
  const onSubmit =(e)=>{
    e.preventDefault();
    const excercise ={
     username : {username},
     description:{description},
     duration:{duration},
     date:{date},

    }
    console.log(excercise)
    axios.post('hhtps://localhost:5000/excercise/add',excercise)
    .then(res=>console.log(res.data))

    window.location='/'
  }
  return (
    <div>
      CreateExcercise
        <form onSubmit = {onSubmit}> 
          <div className='form-group'>
            <label>username:</label>
            <select ref='userInput'
            required
            className='form-control'
            value={username}
            onChange={onChangeUsername}>
{users.map((user)=>(
  <option key={user.id}>
{user}
  </option>
))}
  </select>
          </div>
          <div className='form-group'>
<label>Description:</label>
<input type='text'
className='form-control'
value={description}
onChange={onChangeDescription}
/>
          </div>
          <div className='form-group'>
<label>Duration(in minutes):</label>
<input type='text'
className='form-control'
value={duration}
onChange={onChangeDuration}
/>
          </div>
          <div className='form-group'>
<label>Date:</label>
<DatePicker
selected ={date}
onChange={onChangeDate}
/>
          </div>
          <div className='form-group'>
<input type='submit' value='Create Excercise log' className='btn btn-primary'/>
          </div>

        </form>
    </div>
  )
}

export default CreateExcercise
