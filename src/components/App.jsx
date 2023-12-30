import { Title } from "./App.styled";
import { EventList } from "./EventList/EventList";
import dataArray from '../upcoming-events';

export const App = () => {
  return (
    <>
      <Title>24th Core Worlds Coalition Conference</Title>
      <EventList events={dataArray}></EventList>
    </>
  );
};




// App: 
//  Container  
//    Title  
//  Container 
//  Container
//    EventList - event: array
//    EventItem - name: string
//                location: string
//                speaker: string
//                type: sting ['free', 'vip', 'paid']
//                time: object
//    Container
