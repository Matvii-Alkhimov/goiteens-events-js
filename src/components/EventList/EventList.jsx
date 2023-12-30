import { EventItem } from "components/EventItem/EventItem";
import { EventListStyled, ListContainerStyled } from "components/App.styled";
import { CiAlarmOn } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoTicket } from "react-icons/io5";

const getTime = (start, end) => {
    const dateStart = new Date(start);
    const dateEnd = new Date(end);
    const startTime = dateStart.getHours() + dateStart.getMinutes() / 60;
    const endTime = dateEnd.getHours() + dateEnd.getMinutes() / 60;
    return endTime - startTime;
}

const getDate = (start) => {
    const date = new Date(start);
    return date.toLocaleString();
}

export const EventList = ({events}) => {
    return (
        <ListContainerStyled>
            <EventListStyled>
                {events.map((event) => {
                    return <EventItem 
                        key={event.name}
                        name={event.name}
                        location={event.location}
                        speaker={event.speaker}
                        type={event.type}
                        date={getDate(event.time.start)}
                        time={getTime(event.time.start, event.time.end)}
                        iconPerson={IoPersonSharp}
                        iconCalendar={FaCalendarAlt}
                        iconLocation={MdOutlineLocationOn}
                        iconAlarm={CiAlarmOn}
                        iconTicket={IoTicket}
                    ></EventItem>
                })} 
            </EventListStyled>
        </ListContainerStyled>
    ) 
}