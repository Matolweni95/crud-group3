import React, { useEffect, useState } from 'react';
import '../css/Classcard.css'
import { Link } from 'react-router-dom';
import { supabase } from './Supabase';
import { MyContext } from '../../App';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Classcard = () => {

  const [classes, setClass] = useState([]);
  const { contextValue, updateContextValue } = useContext(MyContext);
  const navigate = useNavigate();

  useEffect (() => {
    async function fetchClass(){
      const {data , error } =  await supabase
      .from('Class')
      .select('*')

      if(!error){
        setClass(data)
        
      }else {
        console.log('error fetching data')
      }
    
    }
    fetchClass()
    console.log(classes)
},[])

  const onSubmit = (id)=> {
    updateContextValue(id);
    console.log(contextValue)
    navigate('/LearnerList')
  }

  return (
    <div className='classcard'>
      {classes.map((classlist, index) => (
        <div key={index} className='card'>
        <h1>{classlist.Classname}</h1>
        {/* <Link to='/LearnerList'> */}
          <button className='card__btn' onClick={() => {onSubmit(classlist.ClassID)}}>See Class</button>
        {/* </Link> */}
      </div>
      ))}
      
    </div>
  )
}

export default Classcard