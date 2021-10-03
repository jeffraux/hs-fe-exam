import React, { useState } from 'react';
import { useToast } from '@chakra-ui/react';

import Api from '../../services/events';

import EventForm from './EventForm';
import H1 from '../../components/Typography/Headings/H1';
import Button from '../../components/Button';


function DetailsPage({ location, history }) {
  const { event } = location.state;
  const [label, setLabel] = useState(event.label);
  const [status, setStatus] = useState(event.status);
  const [date, setDate] = useState(event.date);
  const toast = useToast();

  const goBack = () => {
    history.goBack();
  }

  const deleteEvent = () => {
    Api.deleteEvent(event.id)
      .then(() => {
        toast({
          title: "Event deleted.",
          description: "The event has been deleted.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
        goBack();
      });
  }

  const updateEvent = () => {
    Api.updateEvent(event.id, { label, status, date })
      .then(() => {
        toast({
          title: "Event updated.",
          description: "The event has been updated.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
        goBack();
      });
  }

  return (
    <div className="container flex flex-col max-w-md">
    <div className="container flex py-6 justify-center">
      <H1>{event.label}</H1>
    </div>
    <div className="container flex self-start">
      <Button onClick={goBack}>Back</Button>
    </div>
    <EventForm
      label={label}
      status={status}
      date={date}
      setLabel={setLabel}
      setStatus={setStatus}
      setDate={setDate}
    />
    <div className="container flex justify-end">
      <Button onClick={deleteEvent} color="red">Delete</Button>
      <Button onClick={updateEvent} customClass="ml-4" color="green">Update</Button>
    </div>
  </div>
  );
}

export default DetailsPage;
