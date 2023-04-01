import {useState} from 'react';
import s from './Calendar.module.css';

function Calendar () {
const [ date, setDate ] = useState();

console.log('Date', date);
    return <>
<div className={s.container}>
<h1>Выберите Дату: {date} </h1>
<input className={s.input} type="date" onChange={e=>setDate(e.target.value)}></input>
</div>

      
</>  


}

export default Calendar;