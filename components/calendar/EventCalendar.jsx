"use client";

import { useState } from "react";
import { Container } from "react-bootstrap";
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
} from "date-fns";

export default function EventCalendar({
  events = [],
  title = "Academic Calendar",
  hideExamOnSundaysAndHolidays = true
}) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const weekStart = startOfWeek(monthStart);
  const weekEnd = endOfWeek(monthEnd);
  const calendarDays = eachDayOfInterval({ start: weekStart, end: weekEnd });

  const onPrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const onNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const dayEvents = (date) => {
    const d = format(date, "yyyy-MM-dd");
    return events.filter((evt) => d >= evt.start && d <= evt.end);
  };

  const selectedEventsRaw = dayEvents(selectedDate);
  const isSunday = selectedDate.getDay() === 0;
  const isHoliday = selectedEventsRaw.some((e) => e.type.toLowerCase() === "holiday");

  const selectedEvents = hideExamOnSundaysAndHolidays
    ? selectedEventsRaw.filter(
        (evt) => !(evt.type.toLowerCase() === "exam" && (isSunday || isHoliday))
      )
    : selectedEventsRaw;

  return (
    <div className="calendar-outer">
      <Container className="bg-white p-4 rounded-3 shadow-sm">
        <h2 className="header-title">{title}</h2>
        <div className="calendar-flex">
          <div className="calendar-main">
            <div className="calendar-header">
              <button onClick={onPrevMonth} className="nav-btn left">
                &lt; PREV
              </button>
              <h3>{format(currentMonth, "MMMM yyyy").toUpperCase()}</h3>
              <button onClick={onNextMonth} className="nav-btn right">
                NEXT &gt;
              </button>
            </div>

            <div className="grid header">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                <div key={d}>{d}</div>
              ))}
            </div>

            <div className="grid body">
              {calendarDays.map((day) => {
                const inMonth = isSameMonth(day, monthStart);
                const isToday = isSameDay(day, new Date());
                const sunday = day.getDay() === 0;
                const dayEvtsRaw = dayEvents(day);
                const dayIsHoliday = dayEvtsRaw.some((e) => e.type.toLowerCase() === "holiday");
                const dayEvts = hideExamOnSundaysAndHolidays
                  ? dayEvtsRaw.filter(
                      (evt) =>
                        !(evt.type.toLowerCase() === "exam" && (sunday || dayIsHoliday))
                    )
                  : dayEvtsRaw;

                return (
                  <div
                    key={day.toISOString()}
                    className={`cell${inMonth ? "" : " disabled"}${
                      isSameDay(day, selectedDate) ? " selected" : ""
                    }${isToday ? " today" : ""}${sunday ? " sunday" : ""}`}
                    onClick={() => setSelectedDate(day)}
                  >
                    <span>{format(day, "d")}</span>
                    <div className="dots">
                      {dayEvts.map((evt) => (
                        <span key={evt.id} className="dot" style={{ background: evt.color }}>
                          <span className="event-tooltip">
                            <strong>{evt.title}</strong>
                            <br />
                            <span style={{ fontSize: "0.95em", color: "#444" }}>
                              {evt.description}
                            </span>
                            <br />
                            <span style={{ fontSize: "0.9em", color: "#888" }}>
                              {format(parseISO(evt.start), "d MMM")} -{" "}
                              {format(parseISO(evt.end), "d MMM yyyy")}
                            </span>
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="calendar-events no-bg">
            <div className="event-list-header">
              <h3>EVENTS FOR {format(currentMonth, "MMMM").toUpperCase()}</h3>
              <div className="selected-date-box">{format(selectedDate, "d")}</div>
            </div>

            {selectedEvents.length === 0 ? (
              <div className="no-events">No events</div>
            ) : (
              selectedEvents.map((evt) => (
                <a
                  key={evt.id}
                  className="event-item-link"
                  href={evt.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <div className="event-item-row">
                    <div className="range" style={{ background: evt.color }}>
                      {evt.start === evt.end ? (
                        <>
                          {format(parseISO(evt.start), "d - MMM")}
                          <div className="event-year">
                            {format(parseISO(evt.start), "yyyy")}
                          </div>
                        </>
                      ) : (
                        <>
                          {format(parseISO(evt.start), "d - MMM")}
                          <br />
                          {format(parseISO(evt.end), "d - MMM")}
                          <div className="event-year">
                            {format(parseISO(evt.start), "yyyy")}
                          </div>
                        </>
                      )}
                    </div>
                    <div className="title">
                      <span className="event-title">{evt.title}</span>
                      {evt.type && (
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
                      )}
                      {evt.description && <div className="desc">{evt.description}</div>}
                    </div>
                  </div>
                </a>
              ))
            )}
          </div>
        </div>
      </Container>

      <style jsx>{`
        .calendar-outer {
          background: #fff8e7;
          min-height: 70vh;
          padding: 40px 0;
        }
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
          background: #ff4d00 !important;
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
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
          padding: 12px 16px;
          font-size: 13px;
          white-space: normal;
          pointer-events: none;
        }
        .calendar-events {
          flex: 2;
          min-width: 400px;
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
        .event-item-link:hover .event-item-row {
          box-shadow: 0 4px 16px rgba(0, 78, 146, 0.1);
          background: #f8fbff;
        }
        .event-item-row {
          display: flex;
          align-items: stretch;
          border-bottom: 1px solid #eee;
          background: #fff;
        }
        .range {
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
          .calendar-main,
          .calendar-events {
            width: 100%;
            min-width: 0;
            max-width: 100%;
          }
        }
        @media (max-width: 700px) {
          .calendar-header h3 {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </div>
  );
}