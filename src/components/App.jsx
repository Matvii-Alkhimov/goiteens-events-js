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