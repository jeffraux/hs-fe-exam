import React, { useState } from 'react';
import {
  Flex,
  Center,
  Heading,
  Box,
  Button,
  useToast,
} from '@chakra-ui/react';
import moment from 'moment';

import Api from '../services/events';

import EventForm from './EventForm';

function CreatePage({ history }) {
  const [label, setLabel] = useState('');
  const [status, setStatus] = useState(null);
  const [date, setDate] = useState(moment().toDate());
  const toast = useToast();

  const goBack = () => {
    history.goBack();
  }

  const addEvent = () => {
    Api.createEvent({ label, status, date })
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
  }

  return (
    <Flex align="center" justify="center" direction="column">
      <Center m="10">
        <Heading>Create</Heading>
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
        <Button onClick={addEvent} colorScheme="blue">Add</Button>
      </Box>
    </Flex>
  );
}

export default CreatePage;
