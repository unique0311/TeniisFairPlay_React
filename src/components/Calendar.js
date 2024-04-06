import React from "react";
import {
  format,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  addDays,
  isSameMonth,
  isSameDay,
  parse,
  addMonths,
  subMonths,
  isValid,
} from "date-fns";

import "../components/CSS/calendar.css";
import nextImage from "../assets/next.png";
import previousImage from "../assets/previous.png";

class Calendar extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date(),
  };

  renderHeader() {
    const dateFormat = "MMMM yyyy";
    const monthFormat = "MMMM";

    const prevMonthDate = subMonths(this.state.currentMonth, 1);
    const prevMonthName = format(prevMonthDate, monthFormat);

    return (
      <div className="calendar__header">
        <div className="calendarHeader__year">
          <span>Events for {format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="calendarHeader__MonthsEvent">
          <p className="calendarHeader__eventResultHere">
            There were no results found.
          </p>
          <p className="calendarHeader__eventDateHere">
            Events in{" "}
            <strong>{format(this.state.currentMonth, dateFormat)}</strong>
          </p>
        </div>
        <div className="calendarHeader__NextPrevMonthContainer">
          <div
            className="calendarHeader__prevNextMonth"
            onClick={this.prevMonth}
          >
            <img src={previousImage} />
            <div className="calendarHeader__monthTitle">{prevMonthName}</div>
          </div>

          <div
            className="calendarHeader__prevNextMonth"
            onClick={this.nextMonth}
          >
            <div className="calendarHeader__monthTitle">
              {format(addMonths(this.state.currentMonth, 1), monthFormat)}
            </div>
            <img src={nextImage} />
          </div>
        </div>
      </div>
    );
  }

  renderFooter() {
    const monthFormat = "MMMM";

    const prevMonthDate = subMonths(this.state.currentMonth, 1);
    const prevMonthName = format(prevMonthDate, monthFormat);

    return (
      <div className="calendar__header">
        <div className="calendarHeader__NextPrevMonthContainer">
          <div
            className="calendarHeader__prevNextMonth"
            onClick={this.prevMonth}
          >
            <img src={previousImage} />
            <div className="calendarHeader__monthTitle">{prevMonthName}</div>
          </div>

          <div
            className="calendarHeader__prevNextMonth"
            onClick={this.nextMonth}
          >
            <div className="calendarHeader__monthTitle">
              {format(addMonths(this.state.currentMonth, 1), monthFormat)}
            </div>
            <img src={nextImage} />
          </div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "EEEE";
    const days = [];

    let startDate = startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center weekName__setting" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        // const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              !isSameMonth(day, monthStart)
                ? "disabled"
                : isSameDay(day, selectedDate)
                ? "selected"
                : ""
            }`}
            key={day}
            onClick={(e) => {
              const dayString = e.target.textContent;
              if (dayString.trim() !== "") {
                const clickedDate = new Date(this.state.currentMonth);
                clickedDate.setDate(parseInt(dayString, 10));
                this.onDateClick(clickedDate);
              }
            }}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  onDateClick = (day) => {
    this.setState({
      selectedDate: day,
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: addMonths(this.state.currentMonth, 1),
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: subMonths(this.state.currentMonth, 1),
    });
  };

  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
        {this.renderFooter()}
      </div>
    );
  }
}

export default Calendar;
