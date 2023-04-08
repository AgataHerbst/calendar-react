import { useState } from 'react';
import Calendar from '../components/input-date/Calendar';
import { LocaleContext } from '../components/input-date/LocaleContext';

export default function ReactCalendar() {
    const [month, setMonth] = useState(new Date);
    const [locale, setLocale] = useState('ru-RU');

    return <>
        <h1>CALENDAR</h1>
        <label> lang:
            <select value={locale} onChange={evt => setLocale(evt.target.value)}>
                {['ru-RU', 'en-US', 'ar', 'zh', 'ko', 'ja'].map(l =>
                    <option key={l} value={l}>{l}</option>)}

            </select>
        </label>
        <hr />

        <LocaleContext.Provider value={locale}>
            <main>
                <section>
                    <h2>Calendar</h2>

                    <input type="month"
                        value={month.getFullYear() + '-' + (1 + month.getMonth()).toString().padStart(2, '0')}
                        onChange={evt => setMonth(new Date(evt.target.value.slice(0, 4), evt.target.value.slice(5, 7) - 1))}
                    />
                    <Calendar date={month} />
                </section>
                <section>
                    <h2>Input Calendar</h2>
                    <input type="date" />
                </section>
            </main>
        </LocaleContext.Provider>
    </>
}

