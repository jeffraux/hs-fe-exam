import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Flex,
  Center,
  Text,
  Heading,
  Box,
  Button,
  Select,
} from '@chakra-ui/react';

import { getEvents } from '../actions/events';

const EventsList = ({ events, viewEvent }) => {
  return (
    <Box borderRadius="md" border="1px" m="5" borderColor="gray.200">
      {events.map(event => (
        <Center key={`${event.id}-${event.label}`} onClick={() => viewEvent(event)} w="300px" borderRadius="md" border="1px" m="5" borderColor="gray.200" cursor="pointer">
          <Box p="3" flex="1" flexDirection="column" alignItems="flex-start" textAlign="start">
            <Text>{event.label}</Text>
            <Text casing="capitalize">{event.status}</Text>
          </Box>
          <Box p="3" flex="1" h="100%" flexDirection="column" alignSelf="flex-end" textAlign="right">
            <Text>{event.date}</Text>
          </Box>
        </Center>
      ))}
    </Box>
  );
};

function Home(props) {
  const dispatch = useDispatch();
  const events = useSelector(state => state.events);

  useEffect(() => {
    dispatch(getEvents());
  }, [JSON.stringify(events)]);

  const addEvent = () => {
    props.history.push('/create');
  }

  const viewEvent = (event) => {
    props.history.push({
      pathname: '/details',
      state: {
        event,
      },
    });
  }

  return (
    <Flex align="center" justify="center" direction="column">
      <Center m="10">
        <Heading>Calendar App</Heading>
      </Center>
      <Box flex="1" alignSelf="flex-end" mr="5">
        <Select placeholder="Filter">
          <option value="pending">Pending</option>
          <option value="on-going">On-going</option>
          <option value="done">Done</option>
        </Select>
      </Box>
      <EventsList events={events} viewEvent={viewEvent} />
      <Box flex="1">
        <Button onClick={addEvent} colorScheme="blue">Add</Button>
      </Box>
    </Flex>
  );
}

export default Home;
