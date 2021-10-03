import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Flex,
  Center,
  Text,
  Heading,
  Box,
  Button,
  Select,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import { getEvents } from '../../actions/events';

const EventsList = ({ events, viewEvent, statusFilter, searchFilter }) => {
  const eventsList = events.filter(event => {
    let statusFilterCondition = true;
    let searchFilterCondition = true;

    if (statusFilter) {
      statusFilterCondition = event.status === statusFilter;
    }

    if (searchFilter) {
      searchFilterCondition = `${event.label}`.includes(searchFilter);
    }

    return statusFilterCondition && searchFilterCondition;
  });

  return (
    <Box borderRadius="md" border="1px" mt="0 !important" m="5" borderColor="gray.200">
      {eventsList.length ? eventsList.map(event => (
        <Center key={`${event.id}-${event.label}`} onClick={() => viewEvent(event)} w="360px" borderRadius="md" border="1px" m="5" borderColor="gray.200" cursor="pointer">
          <Box p="3" flex="1" flexDirection="column" alignItems="flex-start" textAlign="start">
            <Text>{event.label}</Text>
            <Text casing="capitalize">{event.status}</Text>
          </Box>
          <Box p="3" flex="1" h="100%" flexDirection="column" alignSelf="flex-end" textAlign="right">
            <Text>{event.date}</Text>
          </Box>
        </Center>
      )) : (
        <Center w="360px" borderRadius="md" border="1px" m="5" borderColor="gray.200">
          <Box p="3" flex="1" flexDirection="column">
            <Text>No result</Text>
          </Box>
        </Center>
      )}
    </Box>
  );
};

function Home(props) {
  const dispatch = useDispatch();
  const events = useSelector(state => state.events);
  const [statusFilter, setStatusFilter] = useState(null);
  const [searchFilter, setSearchFilter] = useState('');

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
    <Flex align="center" direction="column">
      <Center m="10">
        <Heading>Calendar App</Heading>
      </Center>
      <Flex flex="1" direction="row" justifyContent="space-between" p="5" pb="0" w="100%">
        <Box>
          <InputGroup mb="5">
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input type="text" placeholder="Search" onChange={(e) => setSearchFilter(e.target.value)} />
          </InputGroup>
        </Box>
        <Box>
          <Select placeholder="Filter" onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="pending">Pending</option>
            <option value="on-going">On-going</option>
            <option value="done">Done</option>
          </Select>
        </Box>
      </Flex>
      <EventsList events={events} viewEvent={viewEvent} statusFilter={statusFilter} searchFilter={searchFilter} />
      <Box flex="1">
        <Button onClick={addEvent} colorScheme="blue">Add</Button>
      </Box>
    </Flex>
  );
}

export default Home;
