'use client';
import EventCalendar from "@/components/calendar/EventCalendar";
import { eventsData } from "@/data/calendarEvents";

export default function CalendarPage() {
  return <EventCalendar events={eventsData} title="Academic Calendar 2025-26" />;
}