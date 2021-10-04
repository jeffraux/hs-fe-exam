import React, { useState } from 'react';

import Api from '../../services/events';
import useToastContext from '../../hooks/useToastContext';

import EventForm from './EventForm';
import H1 from '../../components/Typography/Headings/H1';
import Button from '../../components/Button';


function DetailsPage({ location, history }) {
  const { event } = location.state;
  const [label, setLabel] = useState(event.label);
  const [status, setStatus] = useState(event.status);
  const [date, setDate] = useState(event.date);
  const showToast = useToastContext();

  const goBack = () => {
    history.goBack();
  }

  const deleteEvent = () => {
    Api.deleteEvent(event.id)
      .then(() => {
        showToast({
          id: 'event-delete',
          color: 'red',
          message: 'Event deleted',
        });
        goBack();
      });
  }

  const updateEvent = () => {
    Api.updateEvent(event.id, { label, status, date })
      .then(() => {
        showToast({
          id: 'event-update',
          color: 'green',
          message: 'Event updated',
        });
        goBack();
      });
  }

  return (
    <div className="container flex flex-col max-w-sm mx-auto">
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
