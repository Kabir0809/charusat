'use client';
import { useState } from 'react';
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  parseISO
} from 'date-fns';

const eventsData = [
  {
    id: 1,
    title: 'Student Induction Program 2025',
    start: '2025-06-19',
    end: '2025-06-26',
    color: '#ff4d00',
    description: 'A week-long induction for new students with workshops, campus tours, and orientation sessions.',
    link: '#'  
},
  {
    id: 2,
    title: 'Yoga Induction Program 2025',
    start: '2025-06-19',
    end: '2025-06-20',
    color: '#ff4d00',
    description: 'A week-long induction for new students with workshops, campus tours, and orientation sessions.',
    link: '#'
  },
  // Add more events as needed
];

export default function EventCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const months = [
    'January','February','March','April','May','June','July','August','September','October','November','December'
  ];
  const years = Array.from({length: 5}, (_, i) => new Date().getFullYear() - 2 + i);
  const [eventFilter, setEventFilter] = useState('');
  const [search, setSearch] = useState('');

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const weekStart = startOfWeek(monthStart);
  const weekEnd = endOfWeek(monthEnd);

  const calendarDays = eachDayOfInterval({ start: weekStart, end: weekEnd });

  const onPrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const onNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  // Filtered events for dropdown and search
  const filteredEventsData = eventsData.filter(evt => {
    const matchesEvent = eventFilter ? evt.title === eventFilter : true;
    const matchesSearch = search
      ? (evt.title + evt.description).toLowerCase().includes(search.toLowerCase())
      : true;
    return matchesEvent && matchesSearch;
  });
  const dayEvents = date => {
    const d = format(date, 'yyyy-MM-dd');
    return filteredEventsData.filter(evt => d >= evt.start && d <= evt.end);
  };
  const selectedEvents = dayEvents(selectedDate);

  return (
    <div className="calendar-outer">
      <div className="calendar-filters">
        <div>
          <select
            value={currentMonth.getMonth()}
            onChange={e => setCurrentMonth(new Date(currentMonth.getFullYear(), Number(e.target.value)))}
            className="filter-select"
          >
            {months.map((m, idx) => (
              <option key={m} value={idx}>{m}</option>
            ))}
          </select>
          <select
            value={currentMonth.getFullYear()}
            onChange={e => setCurrentMonth(new Date(Number(e.target.value), currentMonth.getMonth()))}
            className="filter-select"
          >
            {years.map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
          <select
            value={eventFilter}
            onChange={e => setEventFilter(e.target.value)}
            className="filter-select"
          >
            <option value="">All Events</option>
            {[...new Set(eventsData.map(evt => evt.title))].map(title => (
              <option key={title} value={title}>{title}</option>
            ))}
          </select>
        </div>
        <input
          type="text"
          placeholder="🔍 Search events..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="filter-search"
        />
      </div>
      <div className="calendar-container bg-white p-5 rounded-4 shadow-lg">
        <div className="calendar-flex">
          <div className="calendar-main">
            <div className="calendar-header">
              <button onClick={onPrevMonth} className="nav-btn left">&lt; PREV</button>
              <h3>{format(currentMonth, 'MMMM yyyy').toUpperCase()}</h3>
              <button onClick={onNextMonth} className="nav-btn right">NEXT &gt;</button>
            </div>
            <div className="grid header">
              {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d=><div key={d}>{d}</div>)}
            </div>
            <div className="grid body">
              {calendarDays.map(day => {
                const inMonth = isSameMonth(day, monthStart);
                const events = dayEvents(day);
                const isToday = isSameDay(day, new Date());
                return (
                  <div
                    key={day}
                    className={`cell ${inMonth ? '' : 'disabled'} ${isSameDay(day, selectedDate) ? 'selected' : ''} ${isToday ? 'today' : ''}`}
                    onClick={() => setSelectedDate(day)}
                  >
                    <span>{format(day, 'd')}</span>
                    <div className="dots">
                      {events.map(evt =>
                        <span key={evt.id} className="dot" style={{ background: evt.color }}>
                          <span className="event-tooltip">
                            <strong>{evt.title}</strong>
                            <br />
                            <span style={{ fontSize: '0.95em', color: '#444' }}>{evt.description}</span>
                            <br />
                            <span style={{ fontSize: '0.9em', color: '#888' }}>
                              {format(parseISO(evt.start), 'd MMM')} - {format(parseISO(evt.end), 'd MMM yyyy')}
                            </span>
                          </span>
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="calendar-events no-bg">
            <div className="event-list-header">
              <h4>EVENTS FOR {format(currentMonth, 'MMMM').toUpperCase()}</h4>
              <div className="selected-date-box">
                {format(selectedDate, 'd')}
              </div>
            </div>
            {selectedEvents.length === 0 ? (
              <div className="no-events">No events</div>
            ) : (
              selectedEvents.map(evt => (
                <a
                  key={evt.id}
                  className={`event-item-link`}
                  href={evt.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <div className="event-item-row">
                    <div className="range" style={{ background: evt.color }}>
                      {format(parseISO(evt.start), 'd - MMM')}
                      <br />
                      {format(parseISO(evt.end), 'd - MMM')}
                      <div className="event-year">{format(parseISO(evt.start), 'yyyy')}</div>
                    </div>
                    <div className="title">
                      <span className="event-title">{evt.title}</span>
                      {evt.description && (
                        <div className="desc">{evt.description}</div>
                      )}
                    </div>
                  </div>
                </a>
              ))
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .calendar-outer {
          background: #FFF8E7;
          min-height: 100vh;
          padding: 40px 0;
        }
        .calendar-filters {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .filter-select {
          padding: 0.7rem 1.2rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
          color: #333;
          background: #fff;
          transition: border-color 0.2s;
          cursor: pointer;
        }
        .filter-select:hover {
          border-color: #ff4d00;
        }
        .filter-search {
          padding: 0.7rem 1.2rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
          color: #333;
          background: #fff;
          transition: border-color 0.2s;
          width: 250px;
        }
        .filter-search:focus {
          border-color: #ff4d00;
          outline: none;
        }
        .calendar-container {
          max-width: 1400px;
          margin: 0 auto;
        }
        .calendar-flex {
          display: flex;
          gap: 3.5rem;
          margin-top: 0;
          align-items: flex-start;
        }
        .calendar-main {
          flex: 1.2;
          min-width: 380px;
        }
        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.2rem;
          background: none;
          padding: 0;
        }
        .calendar-header h3 {
          margin: 0 20px;
          font-size: 1.7rem;
          letter-spacing: 1px;
          font-weight: 600;
          color: #004e92;
          flex: 1;
          text-align: center;
        }
        .nav-btn {
          background: none;
          border: none;
          color: #004e92;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          padding: 0 10px;
          transition: color 0.2s;
        }
        .nav-btn:hover {
          color: #ff4d00;
        }
        .nav-btn.left {
          margin-right: auto;
        }
        .nav-btn.right {
          margin-left: auto;
        }
        .grid.header {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          background: #004e92;
          color: #fff;
          text-align: center;
          font-weight: 600;
          font-size: 1.1rem;
          border-radius: 6px 6px 0 0;
        }
        .grid.header > div {
          padding: 0.7rem 0;
          border-right: 1px solid #fff;
        }
        .grid.header > div:last-child {
          border-right: none;
        }
        .grid.body {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          text-align: right;
          background: #fff;
          border-radius: 0 0 6px 6px;
        }
        .cell {
          padding: 0.7rem 0.5rem 1.2rem 0.5rem;
          border: 1px solid #e5e5e5;
          position: relative;
          cursor: pointer;
          min-height: 60px;
          transition: background 0.2s;
          font-size: 1.1rem;
          background: #fff;
        }
        .cell.disabled span {
          color: #ccc;
        }
        .cell.selected {
          background: #eaf6ff;
          border: 2px solid #004e92;
        }
        .cell.today {
          border: 2px solid #ff4d00;
          background: #fff3e6;
        }
        .cell:hover {
          background: #f5faff;
        }
        .dots {
          display: flex;
          gap: 3px;
          position: absolute;
          bottom: 8px;
          left: 8px;
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          position: relative;
          cursor: pointer;
        }
        .dot:hover .event-tooltip {
          display: block;
        }
        .event-tooltip {
          display: none;
          position: absolute;
          left: 18px;
          top: -10px;
          z-index: 10;
          min-width: 220px;
          background: #fff8e7;
          color: #003366;
          border: 1px solid #ff4d00;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
          padding: 12px 16px;
          font-size: 13px;
          white-space: normal;
          pointer-events: none;
        }
        .calendar-events {
          flex: 1;
          background: none;
          border-radius: 0;
          box-shadow: none;
          padding: 0 0 0 0;
          min-width: 320px;
          max-width: 500px;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          margin-top: 0;
        }
        .calendar-events.no-bg {
          background: none;
          box-shadow: none;
          border-radius: 0;
          padding: 0 0 0 0;
        }
        .event-list-header {
          margin-bottom: 1.2rem;
          text-align: center;
        }
        .event-list-header h4 {
          margin: 0 0 1rem 0;
          color: #222;
          font-size: 1.15rem;
          font-weight: 600;
          letter-spacing: 1px;
        }
        .selected-date-box {
          display: inline-block;
          border: 1.5px solid #004e92;
          color: #004e92;
          font-size: 1.3rem;
          font-weight: 600;
          border-radius: 6px;
          padding: 0.25em 1.2em;
          margin-bottom: 1.2rem;
          background: #fff;
        }
        .no-events {
          color: #888;
          text-align: center;
          margin-top: 2rem;
        }
        .event-item-link {
          display: block;
          margin-bottom: 1.2rem;
          border-radius: 0;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          transition: box-shadow 0.2s;
        }
        .event-item-link:hover .event-item-row {
          box-shadow: 0 4px 16px rgba(0,78,146,0.10);
          background: #f8fbff;
        }
        .event-item-row {
          display: flex;
          align-items: stretch;
          border-radius: 0;
          overflow: hidden;
          border-bottom: 1px solid #eee;
          background: #fff;
        }
        .range {
          background: #ff4d00;
          color: #fff;
          padding: 0.7rem 1.2rem;
          text-align: center;
          min-width: 90px;
          font-size: 1.1rem;
          font-weight: 500;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .event-year {
          font-size: 1.1em;
          font-weight: bold;
          margin-top: 0.2em;
        }
        .title {
          padding: 0.7rem 1.2rem;
          align-self: center;
          font-weight: bold;
          color: #004e92;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .event-title {
          font-size: 1.1em;
          font-weight: 600;
          color: #222;
        }
        .desc {
          font-weight: 400;
          color: #888;
          font-size: 1em;
          margin-top: 0.3em;
        }
        @media (max-width: 1100px) {
          .calendar-flex {
            flex-direction: column;
            gap: 2.5rem;
          }
          .calendar-main, .calendar-events {
            width: 100%;
            min-width: 0;
            max-width: 100%;
          }
        }
        @media (max-width: 700px) {
          .calendar-container {
            padding: 1rem !important;
          }
          .calendar-main, .calendar-events {
            padding: 0 !important;
          }
          .calendar-header h3 {
            font-size: 1.1rem;
          }
            
        }
          .calendar-filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto 1.5rem auto;
  gap: 1rem;
  flex-wrap: wrap;
}
.filter-select {
  margin-right: 0.5rem;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  border: 1px solid #004e92;
  color: #004e92;
  font-weight: 500;
  background: #fff;
}
.filter-search {
  padding: 0.4rem 1rem;
  border-radius: 6px;
  border: 1px solid #004e92;
  color: #004e92;
  font-size: 1rem;
  min-width: 220px;
}
@media (max-width: 700px) {
  .calendar-filters {
    flex-direction: column;
    align-items: stretch;
    gap: 0.7rem;
  }
  .filter-search {
    min-width: 0;
    width: 100%;
  }
}
      `}</style>
    </div>
  );
}
