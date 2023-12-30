import { EventItemStyled, EventThirdTitleStyled } from "components/App.styled"

export const EventItem = ({
    name,
    location, 
    speaker, 
    type, 
    date, 
    time, 
    iconPerson: IoPersonSharp,
    iconCalendar: FaCalendarAlt,
    iconLocation: MdOutlineLocationOn,
    iconAlarm: CiAlarmOn,
    iconTicket: IoTicket,
}) => {
    return (
        <EventItemStyled>
            <EventThirdTitleStyled>{name}</EventThirdTitleStyled>
            <p><MdOutlineLocationOn/> {location}</p>
            <p><IoPersonSharp/> {speaker}</p>
            <p><IoTicket/> {type}</p>
            <p><FaCalendarAlt/> {date}</p>
            <p><CiAlarmOn/> {time} hours</p>
        </EventItemStyled>
    )
}