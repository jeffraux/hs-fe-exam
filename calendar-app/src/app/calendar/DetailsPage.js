import React, { useState } from 'react';
import {
  Flex,
  Center,
  Heading,
  Box,
  Button,
  useToast,
} from '@chakra-ui/react';

import Api from '../services/events';

import EventForm from './EventForm';

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
    <Flex align="center" justify="center" direction="column">
      <Center m="10">
        <Heading>{event.label}</Heading>
      </Center>
      <Box flex="1" alignSelf="flex-start" ml="5">
        <Button onClick={goBack}>Back</Button>
      </Box>
      <EventForm
        label={label}
        status={status}
        date={date}
        setLabel={setLabel}
        setStatus={setStatus}
        setDate={setDate}
      />
      <Box flex="1">
        <Button onClick={deleteEvent} mr="5" colorScheme="red">Delete</Button>
        <Button onClick={updateEvent} colorScheme="green">Update</Button>
      </Box>
    </Flex>
  );
}

export default DetailsPage;
