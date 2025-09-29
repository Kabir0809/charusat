'use client';
import { useState } from 'react';
import {Container } from 'react-bootstrap';
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

const colorMap = {
  Green: "#2ecc40",   // Academic
  Brown: "#a0522d",   // Exam
  Red: "#ff4d00",     // Holiday
  Yellow: "#ffd700",  // Institute level Celebrate day
  Blue: "#004e92"     // Institute Level Event, National/International Conference, University Level Event
};
const eventsData = [
  { id: 1, title: "Commencement of Class (ODD SEMESTER)", start: "2025-06-23", end: "2025-06-23", color: "#2ecc40", type: "Academic", description: "", link: "" },
  { id: 2, title: "Orientation Program", start: "2025-07-01", end: "2025-07-05", color: "#2ecc40", type: "Academic", description: "", link: "" },
  { id: 3, title: "End of Teaching, Learning and Conti. Evaluation", start: "2025-10-11", end: "2025-10-11", color: "#2ecc40", type: "Academic", description: "", link: "" },
  { id: 4, title: "Commencement of Class (EVEN SEMESTER)", start: "2025-12-15", end: "2025-12-15", color: "#2ecc40", type: "Academic", description: "", link: "" },
  { id: 5, title: "End of Teaching, Learning and Conti. Evaluation", start: "2026-04-10", end: "2026-04-10", color: "#2ecc40", type: "Academic", description: "", link: "" },
  { id: 6, title: "Sessional Exam - Odd Semester", start: "2025-09-08", end: "2025-09-19", color: "#a0522d", type: "Exam", description: "", link: "" },
  { id: 7, title: "Sessional Exam - Odd Semester", start: "2025-10-03", end: "2025-10-08", color: "#a0522d", type: "Exam", description: "", link: "" },
  { id: 8, title: "University Regular Examination (Odd Semester)", start: "2025-10-27", end: "2025-11-21", color: "#a0522d", type: "Exam", description: "", link: "" },
  { id: 9, title: "University Remedial Examination (Odd Semester)", start: "2025-12-08", end: "2025-12-12", color: "#a0522d", type: "Exam", description: "", link: "" },
  { id: 10, title: "Sessional Exam - Even Semester", start: "2026-03-09", end: "2026-03-31", color: "#a0522d", type: "Exam", description: "", link: "" },
  { id: 11, title: "University Regular Examination (EVEN Semester )", start: "2026-04-13", end: "2026-05-08", color: "#a0522d", type: "Exam", description: "", link: "" },
  { id: 12, title: "University Remedial Examination (Even Semester )", start: "2026-05-25", end: "2026-05-30", color: "#a0522d", type: "Exam", description: "", link: "" },
  { id: 13, title: "University Remedial Examinations (ODD & EVEN SEMESTER)", start: "2026-06-01", end: "2026-06-20", color: "#a0522d", type: "Exam", description: "", link: "" },
  { id: 14, title: "2nd Saturday Day off", start: "2025-07-12", end: "2025-07-12", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 15, title: "4th Saturday Day off", start: "2025-07-26", end: "2025-07-26", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 16, title: "Raksha Bandhan", start: "2025-08-09", end: "2025-08-09", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 17, title: "Independence Day", start: "2025-08-15", end: "2025-08-15", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 18, title: "Janmashtami", start: "2025-08-16", end: "2025-08-16", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 19, title: "4th Saturday Day off", start: "2025-08-23", end: "2025-08-23", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 20, title: "Ganesh Chaturthi", start: "2025-08-27", end: "2025-08-27", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 21, title: "2nd Saturday Day off", start: "2025-09-13", end: "2025-09-13", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 22, title: "4th Saturday Day off", start: "2025-09-27", end: "2025-09-27", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 23, title: "Gandhi Jayanti", start: "2025-10-02", end: "2025-10-02", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 24, title: "Dussehra", start: "2025-10-02", end: "2025-10-02", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 25, title: "DIWALI VACATION - FOR STUDENTS", start: "2025-10-13", end: "2025-10-26", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 26, title: "DIWALI VACATION - FOR ALL EMPLOYEES", start: "2025-10-18", end: "2025-10-26", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 27, title: "Declared as special holiday in lieu of 11th Oct (2nd Sat) Working Day", start: "2025-10-18", end: "2025-10-18", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 28, title: "Diwali", start: "2025-10-20", end: "2025-10-20", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 29, title: "Guru Nanak's Jayanti", start: "2025-11-05", end: "2025-11-05", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 30, title: "2nd Saturday Day off", start: "2025-11-08", end: "2025-11-08", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 31, title: "4th Saturday Day off", start: "2025-11-22", end: "2025-11-22", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 32, title: "Semester Break (FOR STUDENTS)", start: "2025-11-24", end: "2025-12-06", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 33, title: "2nd Saturday Day off", start: "2025-12-13", end: "2025-12-13", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 34, title: "Christmas", start: "2025-12-25", end: "2025-12-25", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 35, title: "4th Saturday Day off", start: "2025-12-27", end: "2025-12-27", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 36, title: "2nd Saturday Day off", start: "2026-01-10", end: "2026-01-10", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 37, title: "Makar Sankranti (Uttarayan)", start: "2026-01-14", end: "2026-01-15", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 38, title: "Republic Day", start: "2026-01-26", end: "2026-01-26", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 39, title: "2nd Saturday Day off", start: "2026-02-14", end: "2026-02-14", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 40, title: "Maha Shivaratri", start: "2026-02-15", end: "2026-02-15", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 41, title: "4th Saturday Day off", start: "2026-02-28", end: "2026-02-28", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 42, title: "Dhuleti", start: "2026-03-04", end: "2026-03-04", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 43, title: "2nd Saturday Day off", start: "2026-03-14", end: "2026-03-14", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 44, title: "Ramjan Eid", start: "2026-03-21", end: "2026-03-21", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 45, title: "Shree Ram Navami", start: "2026-03-27", end: "2026-03-27", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 46, title: "4th Saturday Day off", start: "2026-03-28", end: "2026-03-28", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 47, title: "2nd Saturday Day off", start: "2026-04-11", end: "2026-04-11", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 48, title: "Dr. Baba Saheb Ambedkar's Jayanti", start: "2026-04-14", end: "2026-04-14", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 49, title: "4th Saturday Day off", start: "2026-04-25", end: "2026-04-25", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 50, title: "2nd Saturday Day off", start: "2026-05-09", end: "2026-05-09", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 51, title: "Summer Vacation (FOR STUDENTS)", start: "2026-05-11", end: "2026-05-22", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 52, title: "4th Saturday Day off", start: "2026-05-23", end: "2026-05-23", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 53, title: "2nd Saturday Day off", start: "2026-06-13", end: "2026-06-13", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 54, title: "4th Saturday Day off", start: "2026-06-27", end: "2026-06-27", color: "#ff4d00", type: "Holiday", description: "", link: "" },
  { id: 55, title: "World Youth Skills Day", start: "2025-07-15", end: "2025-07-15", color: "#ffd700", type: "Institute level Celebrate day", description: "", link: "" },
  { id: 56, title: "National Anaesthesia and Operation theatre technologist day", start: "2025-07-21", end: "2025-07-21", color: "#ffd700", type: "Institute level Celebrate day", description: "", link: "" },
  { id: 57, title: "National Librarian's Day", start: "2025-08-12", end: "2025-08-12", color: "#ffd700", type: "Institute level Celebrate day", description: "", link: "" },
  { id: 58, title: "National Sport Day", start: "2025-08-29", end: "2025-08-29", color: "#ffd700", type: "Institute level Celebrate day", description: "", link: "" },
  { id: 59, title: "Teachers Day", start: "2025-09-05", end: "2025-09-05", color: "#ffd700", type: "Institute level Celebrate day", description: "", link: "" },
  { id: 60, title: "World Physiotherapy Day", start: "2025-09-08", end: "2025-09-08", color: "#ffd700", type: "Institute level Celebrate day", description: "", link: "" },
  { id: 61, title: "Engineers Day", start: "2025-09-15", end: "2025-09-15", color: "#ffd700", type: "Institute level Celebrate day", description: "", link: "" },
  { id: 62, title: "World Pharmacist Day", start: "2025-09-25", end: "2025-09-25", color: "#ffd700", type: "Institute level Celebrate day", description: "", link: "" },
  { id: 63, title: "World Sight Day", start: "2025-10-09", end: "2025-10-09", color: "#ffd700", type: "Institute level Celebrate day", description: "", link: "" },
  { id: 64, title: "World Anaesthesia Day", start: "2025-10-16", end: "2025-10-16", color: "#ffd700", type: "Institute level Celebrate day", description: "", link: "" },
  { id: 65, title: "World Radiography Day", start: "2025-11-20", end: "2025-11-20", color: "#ffd700", type: "Institute level Celebrate day", description: "", link: "" },
  { id: 66, title: "Annual day Celebration at all constitute institute", start: "2026-02-02", end: "2026-02-02", color: "#ffd700", type: "Institute level Celebrate day", description: "", link: "" },
  { id: 67, title: "International Mother Language Day", start: "2026-02-21", end: "2026-02-21", color: "#ffd700", type: "Institute level Celebrate day", description: "", link: "" },
  { id: 68, title: "National Science Day", start: "2026-02-28", end: "2026-02-28", color: "#ffd700", type: "Institute level Celebrate day", description: "", link: "" },
  { id: 69, title: "International Woman Day", start: "2026-03-08", end: "2026-03-08", color: "#ffd700", type: "Institute level Celebrate day", description: "", link: "" },
  { id: 70, title: "World Optometry Day", start: "2026-03-13", end: "2026-03-13", color: "#ffd700", type: "Institute level Celebrate day", description: "", link: "" },
  { id: 71, title: "World Medical Laboratory Technology Day", start: "2026-03-23", end: "2026-03-23", color: "#ffd700", type: "Institute level Celebrate day", description: "", link: "" },
  { id: 72, title: "World Health Day", start: "2026-04-07", end: "2026-04-07", color: "#ffd700", type: "Institute level Celebrate day", description: "", link: "" },
  { id: 73, title: "World Book Day", start: "2026-04-23", end: "2026-04-23", color: "#ffd700", type: "Institute level Celebrate day", description: "", link: "" },
  { id: 74, title: "International Nurses Day", start: "2026-05-12", end: "2026-05-12", color: "#ffd700", type: "Institute level Celebrate day", description: "", link: "" },
  { id: 75, title: "World Yoga Day", start: "2026-06-21", end: "2026-06-21", color: "#ffd700", type: "Institute level Celebrate day", description: "", link: "" },
  { id: 76, title: "Physio Aspirants Foundation Pro. (PH-PRO), RPCP", start: "2025-07-15", end: "2025-07-15", color: "#004e92", type: "Institute Level Event", description: "", link: "" },
  { id: 77, title: "Anti Ragging Week", start: "2025-08-12", end: "2025-08-18", color: "#004e92", type: "Institute Level Event", description: "", link: "" },
  { id: 78, title: "Prabandhan, IIIM", start: "2025-10-10", end: "2025-10-13", color: "#004e92", type: "Institute Level Event", description: "", link: "" },
  { id: 79, title: "Science Ingress, PDPIAS", start: "2025-10-10", end: "2025-10-11", color: "#004e92", type: "Institute Level Event", description: "", link: "" },
  { id: 80, title: "AGNITIO, CMPICA", start: "2025-12-04", end: "2025-12-04", color: "#004e92", type: "Institute Level Event", description: "", link: "" },
  { id: 81, title: "Science Manthan, PDPIAS", start: "2025-12-20", end: "2025-12-20", color: "#004e92", type: "Institute Level Event", description: "", link: "" },
  { id: 82, title: "IGNITE, CMPICA", start: "2026-01-23", end: "2026-01-23", color: "#004e92", type: "Institute Level Event", description: "", link: "" },
  { id: 83, title: "Pharma Battle, RPCP", start: "2026-02-05", end: "2026-02-07", color: "#004e92", type: "Institute Level Event", description: "", link: "" },
  { id: 84, title: "COGNIZANCE, CSPIT | DEPSTAR", start: "2026-02-19", end: "2026-02-20", color: "#004e92", type: "Institute Level Event", description: "", link: "" },
  { id: 85, title: "National Conference in collaboration with SPN", start: "2025-11-28", end: "2025-11-29", color: "#004e92", type: "National / International Conference", description: "", link: "" },
  { id: 86, title: "7th International Conference on Soft Computing and its Engineering Applications (icSoftComp2025)", start: "2025-12-09", end: "2025-12-11", color: "#004e92", type: "National / International Conference", description: "", link: "" },
  { id: 87, title: "Colloquium of Medical Research (National Conference)", start: "2025-12-16", end: "2025-12-17", color: "#004e92", type: "National / International Conference", description: "", link: "" },
  { id: 88, title: "CHAPCON 2025 (CHARUSAT Physiotherapy National Conference 2025)", start: "2025-12-26", end: "2025-12-27", color: "#004e92", type: "National / International Conference", description: "", link: "" },
  { id: 89, title: "National Conference", start: "2026-01-27", end: "2026-01-30", color: "#004e92", type: "National / International Conference", description: "", link: "" },
  { id: 90, title: "NBPL-2026 (Season-V)", start: "2026-02-06", end: "2026-02-07", color: "#004e92", type: "National / International Conference", description: "", link: "" },
  { id: 91, title: "National Conference - FOH", start: "2026-02-07", end: "2026-02-07", color: "#004e92", type: "National / International Conference", description: "", link: "" },
  { id: 92, title: "International Conference", start: "2026-02-20", end: "2026-02-21", color: "#004e92", type: "National / International Conference", description: "", link: "" },
  { id: 93, title: "International Conference on Artificial Intelligence, Communication Technologies & Smart Cities (ICACS)", start: "2026-03-03", end: "2026-03-04", color: "#004e92", type: "National / International Conference", description: "", link: "" },
  { id: 94, title: "State-Level School Principals Meet at CHARUSAT", start: "2025-09-06", end: "2025-09-06", color: "#004e92", type: "University Level Event", description: "", link: "" },
  { id: 95, title: "Vrund (Navratri Festival)", start: "2025-10-08", end: "2025-10-08", color: "#004e92", type: "University Level Event", description: "", link: "" },
  { id: 96, title: "Education Expo 2025", start: "2025-12-04", end: "2025-12-06", color: "#004e92", type: "University Level Event", description: "", link: "" },
  { id: 97, title: "Sanyojan 2026", start: "2025-12-06", end: "2025-12-06", color: "#004e92", type: "University Level Event", description: "", link: "" },
  { id: 98, title: "Book Exhibition 2025", start: "2025-12-18", end: "2025-12-20", color: "#004e92", type: "University Level Event", description: "", link: "" },
  { id: 99, title: "SPOURAL'25 Sport Events", start: "2026-01-01", end: "2026-01-27", color: "#004e92", type: "University Level Event", description: "", link: "" },
  { id: 100, title: "15th Convocation", start: "2026-01-03", end: "2026-01-03", color: "#004e92", type: "University Level Event", description: "", link: "" },
  { id: 101, title: "Pre-Uttarayan Celebration at CHARUSAT", start: "2026-01-13", end: "2026-01-13", color: "#004e92", type: "University Level Event", description: "", link: "" },
  { id: 102, title: "CHARUSAT 26th Foundation Day", start: "2026-01-28", end: "2026-01-28", color: "#004e92", type: "University Level Event", description: "", link: "" },
  { id: 103, title: "SPOURAL'25 Cultural Events", start: "2026-01-29", end: "2026-01-31", color: "#004e92", type: "University Level Event", description: "", link: "" },
  { id: 104, title: "Liberal Arts", start: "2026-02-24", end: "2026-02-27", color: "#004e92", type: "University Level Event", description: "", link: "" },
  { id: 105, title: "CHARUSAT Marathon 2026", start: "2026-03-09", end: "2026-03-09", color: "#004e92", type: "University Level Event", description: "", link: "" },
  { id: 106, title: "4th Saturday Day off", start: "2026-01-24", end: "2026-01-24", color: "#ff4d00", type: "Holiday", description: "", link: "" }
];

export default function EventCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const weekStart = startOfWeek(monthStart);
  const weekEnd = endOfWeek(monthEnd);

  const calendarDays = eachDayOfInterval({ start: weekStart, end: weekEnd });

  const onPrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const onNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const dayEvents = date => {
    return eventsData.filter(evt => {
      const d = format(date, 'yyyy-MM-dd');
      return d >= evt.start && d <= evt.end;
    });
  };

  const selectedEvents = dayEvents(selectedDate).filter(evt => {
    const isSunday = selectedDate.getDay() === 0;
    // Check if the selected date is a holiday
    const isHoliday = dayEvents(selectedDate).some(e => e.type.toLowerCase() === "holiday");
    // Hide "Exam" events on Sundays or holidays
    return !(evt.type.toLowerCase() === "exam" && (isSunday || isHoliday));
  });

  return (
    <div className="calendar-outer">
      <Container className="bg-white p-4 rounded-3 shadow-sm">
      {/* <div className="calendar-container bg-white p-5 rounded-4 shadow-lg"> */}
        <h2 className="header-title">Academic Calendar 2025-26</h2>
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
                const isSunday = day.getDay() === 0;
                // Check if the day is a holiday (any event of type "Holiday" on this day)
                const isHoliday = dayEvents(day).some(evt => evt.type.toLowerCase() === "holiday");
                // Filter out exams on Sundays and holidays
                const events = dayEvents(day).filter(
                  evt => !(evt.type.toLowerCase() === "exam" && (isSunday || isHoliday))
                );
                const isToday = isSameDay(day, new Date());
                return (
                  <div
                    key={day}
                    className={`cell${inMonth ? '' : ' disabled'}${isSameDay(day, selectedDate) ? ' selected' : ''}${isToday ? ' today' : ''}${isSunday ? ' sunday' : ''}`}
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
              <h3>EVENTS FOR {format(currentMonth, 'MMMM').toUpperCase()}</h3>
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
    {evt.start === evt.end ? (
      <>
        {format(parseISO(evt.start), 'd - MMM')}
        <div className="event-year">{format(parseISO(evt.start), 'yyyy')}</div>
      </>
    ) : (
      <>
        {format(parseISO(evt.start), 'd - MMM')}
        <br />
        {format(parseISO(evt.end), 'd - MMM')}
        <div className="event-year">{format(parseISO(evt.start), 'yyyy')}</div>
      </>
    )}
  </div>
                    <div className="title">
                      <span className="event-title">{evt.title}</span>
                      <span
    className="event-type-chip"
    style={{
      background: evt.color,
      color: "#fff",
      borderRadius: "12px",
      padding: "2px 8px",
      fontSize: "0.85em",
      fontWeight: 500,
      
      display: "inline-block",
      width: "fit-content",
      lineHeight: 1.2
    }}
  >
    {evt.type}
  </span>
                      {evt.description && (
                        <div className="desc">{evt.description}</div>
                      )}
                    </div>
                  </div>
                </a>
              ))
              )
}
          </div>
        </div>
      {/* </div> */}
      </Container>
      <style jsx>{`
        .calendar-outer {
          background: #FFF8E7;
          min-height: 70vh;
          padding: 40px 0;
        }
        // .calendar-container {
        //   max-width: 1200px;
        //   margin: 0 auto;
        // }
        .header-title {
    color: white;
    background-color: #ff4d00;
    padding: 5px;
    border-radius: 8px;
          margin-bottom: 1rem;
          text-align: center;
          font-weight: bold;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .calendar-flex {
          display: flex;
          gap: 3.5rem;
          margin-top: 0;
          align-items: flex-start;
        }
        .calendar-main {
          flex: 0.8;
          min-width: 400px;
          max-width: 500px;
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
          .event-type-chip {
  display: inline-block;
  width: fit-content;
  min-width: 0;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.85em;
  font-weight: 500;
  line-height: 1.2;
  vertical-align: middle;
}
         .cell.sunday {
  background: #ff4d00 !important; /* Deep orange for Sundays */
  color: #fff !important;
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
          flex: 2;
          min-width: 400px;    // increased from 320px to 400px
          max-width: 700px; 
          background: none;
          border-radius: 0;
          box-shadow: none;
          padding: 0 0 0 0;
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
      `}</style>
    </div>
  );
}
