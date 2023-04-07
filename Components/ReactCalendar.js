import {useState} from 'react';
import s from './ReactCalendar.module.css';



function ReactCalendar() {
const [month, setMonth] = useState();
const [selected, setSelected] = useState(null);
const [date, setDate] = useState();



const today = new Date();
const weekDayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const DAYS_IN_WEEK = 7;

const monthData = [
    [undefined, undefined, new Date(), new Date(), new Date(), new Date(), new Date()],
    [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
    [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
    [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
    [new Date(), new Date(), new Date(), new Date(), undefined, undefined, undefined],
  ];

  const handleDayClick = date => { //метод обработчик даты
    //console.log(date)
    setSelected({ selected });
    props.onChange(date);

  }; 

    return<>
   
<input type="month" onChange={e=>setMonth(e.target.value)}></input>
<table className={s.table}>
    <thead>
    <tr>
     {weekDayNames.map(name =>
      <th className={s.th} key={name}>{name}</th>
      )}
    </tr>
    </thead>
        <tbody>
        {monthData.map((week, index) =>
<tr key={index}>
  {week.map((date, index) => date ? //если дата есть, то показываем элемнт td
 <td className={s.td}
 key={index} 
 onClick={() => handleDayClick(date)} //стрелочная функция вызывает handelDayClick
 >{date.getDate()}</td>  //получение числа, который хранится в дате
 :                      // в противном случае пусто элемент td
 <td key={index} />

  )}
</tr>
)}       

  </tbody>
    
</table>

    </>
}
export default ReactCalendar;