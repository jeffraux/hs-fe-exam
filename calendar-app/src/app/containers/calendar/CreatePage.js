import React, { useState } from 'react';
import { useToast } from '@chakra-ui/react';

import EventForm from './EventForm';
import H1 from '../../components/Typography/Headings/H1';
import Button from '../../components/Button';

import Api from '../../services/events';


function CreatePage({ history }) {
  const [label, setLabel] = useState('');
  const [status, setStatus] = useState('');
  const [date, setDate] = useState(null);
  const toast = useToast();

  const goBack = () => {
    history.goBack();
  }

  const addEvent = () => {
    if (label && status && date) {
      return Api.createEvent({ label, status, date })
        .then(() => {
          toast({
            title: "Event created.",
            description: "The event has been created.",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top-right",
          });
          goBack();
        });
    } else {
      toast({
        title: "Some fields are missing.",
        description: "All fields are required. Please fill-up all the details.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }
  }

  return (
    <div className="container flex flex-col max-w-sm">
      <div className="container mx-auto" m="10">
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
