import React, { useState } from 'react';

import Api from '../../services/events';
import useToastContext from '../../hooks/useToastContext';

import EventForm from './EventForm';
import H1 from '../../components/Typography/Headings/H1';
import Button from '../../components/Button';


function CreatePage({ history }) {
  const [label, setLabel] = useState('');
  const [status, setStatus] = useState('');
  const [date, setDate] = useState(null);
  const showToast = useToastContext();

  const goBack = () => {
    history.goBack();
  }

  const addEvent = () => {
    if (label && status && date) {
      return Api.createEvent({ label, status, date })
        .then(() => {
          showToast({
            id: 'event-create',
            color: 'blue',
            message: 'Event created',
          });
          goBack();
        });
    } else {
      showToast({
        id: 'event-create-invalid',
        color: 'red',
        message: 'Some fields are missing',
        width: 56,
      });
    }
  }

  return (
    <div className="container flex flex-col max-w-sm mx-auto">
      <div className="container flex py-6 justify-center">
        <H1>Create</H1>
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
        <Button onClick={addEvent} color="blue">Add</Button>
      </div>
    </div>
  );
}

export default CreatePage;
