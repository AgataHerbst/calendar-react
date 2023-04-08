import { memo, useContext, useMemo } from 'react';
import { LocaleContext } from './LocaleContext';
import s from './Calendar.module.css';

export default memo(function Calendar({ date, onClick }) {
    const
        locale = useContext(LocaleContext), //Механизм контекстов. Он позволяет передать в приложение и получить внутри любого компонента доступ к данным напрямую, минуя пропсы.Хук useContext() позволяет использовать контекст внутри компонента. 
        dayNames = useMemo(_ => [...Array(7)].map((_, i) => (new Date(2019, 0, i)).toLocaleDateString(locale, { weekday: 'short' })), [locale]),
        year = date.getFullYear(),
        month = date.getMonth(),
        daysInMonth = (new Date(year, month + 1, 0)).getDate(),
        firstDayOfWeek = (new Date(year, month, 1)).getDay(),
        startShift = (-1 + firstDayOfWeek + 7) % 7;

    return <table className={s.calendar}>
        <thead><tr>
            {dayNames.map(day => <th className={s.th} key={day}>{day}</th>)}
        </tr>
        </thead>
        <tbody
            onClick={evt => {
                const day = evt.target.closest('td').textContent;
                if (day && onClick) {
                    const
                        d = new Date(date.setDate(+day));
                    onClick(d);
                }
            }}>
            <Month start={startShift} max={daysInMonth} selected={date.getDate()} />
        </tbody>
    </table>;

});

function Week({ start, max }) {
    return <tr>
        {[...Array(7)].map((_, index) => +start + index).map(day =>//массив от 0 до 6 + стартовое значение значений, map вмсето цикла for в tr будет 7 элементов td (смотрим урок от 8.04)
            <td className={s.td} key={day}>
                {day > 0 && day <= max && day}
            </td>)}
    </tr>;
}

function Month({ start, max, selected }) { //start - начало недели, max - конец недели, выделенное число
    const
        result = [];
    for (let weekStart = 1 - start; weekStart <= +max; weekStart += 7) {
        result.push(<Week key={weekStart} start={weekStart} {...{ max, selected }} />);
    }
    return <>{result}</>;
}