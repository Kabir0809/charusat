'use client';
// components/YearlyCalendar.jsx
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // <-- FIXED

const eventsData = [
	{
		title: "International Yoga Day",
		startDate: "2025-06-21",
		endDate: "2025-06-21",
		description: "Yoga event by Student Welfare Board",
		link: "/events/yoga-day",
	},
	{
		title: "Student Induction Program 2025",
		startDate: "2025-06-19",
		endDate: "2025-06-26",
		description: "New student orientation program",
		link: "/events/induction-2025",
	},
    {
		title: "Student Induction Program 2025",
		startDate: "2025-07-19",
		endDate: "2025-07-19",
		description: "New student orientation program",
		link: "/events/induction-2025",
	},
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const YearlyCalendar = () => {
	const [year, setYear] = useState(2025);
	const [filterMonth, setFilterMonth] = useState("All");
	const [searchQuery, setSearchQuery] = useState("");
	const router = useRouter();

	const getEventsForDate = (dateStr) => {
		return eventsData.filter((event) => {
			const start = new Date(event.startDate);
			const end = new Date(event.endDate);
			const date = new Date(dateStr);
			return date >= start && date <= end;
		});
	};

	const filteredEvents = eventsData.filter((event) => {
		const matchMonth =
			filterMonth === "All" ||
			new Date(event.startDate).getMonth() === parseInt(filterMonth);
		const matchSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
		return matchMonth && matchSearch;
	});

	const renderMonth = (monthIndex) => {
		const firstDay = new Date(year, monthIndex, 1).getDay();
		const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

		const rows = [];
		let date = 1;
		for (let i = 0; i < 6; i++) {
			const row = [];
			for (let j = 0; j < 7; j++) {
				if ((i === 0 && j < firstDay) || date > daysInMonth) {
					row.push(<td key={j}></td>);
				} else {
					const fullDateStr = `${year}-${String(monthIndex + 1).padStart(
						2,
						"0"
					)}-${String(date).padStart(2, "0")}`;
					const events = getEventsForDate(fullDateStr).filter((e) =>
						filteredEvents.includes(e)
					);

					row.push(
						<td
							key={j}
							style={{
								verticalAlign: "top",
								padding: 4,
								border: "1px solid #ccc",
								height: 80,
								position: "relative",
							}}
						>
							<div style={{ fontWeight: 600 }}>{date}</div>
							<ul
								style={{
									listStyle: "none",
									margin: 0,
									padding: 0,
								}}
							>
								{events.map((event, idx) => (
									<li key={idx}>
										<a
											href="#"
											onClick={(e) => {
												e.preventDefault();
												router.push(event.link);
											}}
											title={event.description}
											style={{ color: "#004080", fontSize: 11 }}
										>
											{event.title.length > 20
												? event.title.slice(0, 17) + "..."
												: event.title}
										</a>
									</li>
								))}
							</ul>
						</td>
					);
					date++;
				}
			}
			rows.push(<tr key={i}>{row}</tr>);
		}
		return (
			<table
				style={{
					width: "100%",
					borderCollapse: "collapse",
					fontSize: 12,
				}}
			>
				<thead>
					<tr>
						{days.map((day, idx) => (
							<th
								key={idx}
								style={{
									background: "#003366",
									color: "white",
									border: "1px solid #ccc",
								}}
							>
								{day}
							</th>
						))}
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	};

	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	return (
		<div style={{ padding: 20, fontFamily: "Arial" }}>
			<div style={{ textAlign: "center", marginBottom: 20 }}>
				<button
					onClick={() => setYear(year - 1)}
					style={{ marginRight: 10 }}
				>
					Prev
				</button>
				<strong style={{ fontSize: 24 }}>{year}</strong>
				<button onClick={() => setYear(year + 1)} style={{ marginLeft: 10 }}>
					Next
				</button>
			</div>

			<div
				style={{
					display: "flex",
					justifyContent: "center",
					gap: 20,
					marginBottom: 20,
				}}
			>
				<select onChange={(e) => setFilterMonth(e.target.value)}>
					<option value="All">All Months</option>
					{monthNames.map((month, idx) => (
						<option key={idx} value={idx}>
							{month}
						</option>
					))}
				</select>
				<input
					type="text"
					placeholder="Search events..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
			</div>

			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(3, 1fr)",
					gap: 20,
				}}
			>
				{monthNames.map((month, idx) => (
					<div
						key={idx}
						style={{
							border: "1px solid #aaa",
							borderRadius: 6,
							boxShadow: "0 0 5px #ccc",
							padding: 10,
							display:
								filterMonth === "All" ||
								parseInt(filterMonth) === idx
									? "block"
									: "none",
						}}
					>
						<h4
							style={{
								textAlign: "center",
								color: "#003366",
							}}
						>
							{month}
						</h4>
						{renderMonth(idx)}
					</div>
				))}
			</div>
		</div>
	);
};

export default YearlyCalendar;
