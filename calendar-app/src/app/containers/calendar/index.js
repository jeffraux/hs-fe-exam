import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Flex,
  Center,
  Text,
  Heading,
  Box,
  // Button,
  Select,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import H1 from '../../components/Typography/Headings/H1';
import Button from '../../components/Button';

import EventsList from './EventsList';

import { getEvents } from '../../actions/events';


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
    <div className="container flex flex-col max-w-md">
      <div className="container flex py-6 justify-center">
        <H1>Calendar App</H1>
      </div>
      <div className="container flex flex-row justify-between p-4 pb-0">
        <div>
          <InputGroup mb="5">
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input type="text" placeholder="Search" onChange={(e) => setSearchFilter(e.target.value)} />
          </InputGroup>
        </div>
        <div>
          <Select placeholder="Filter" onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="pending">Pending</option>
            <option value="on-going">On-going</option>
            <option value="done">Done</option>
          </Select>
        </div>
      </div>

      <EventsList
        events={events}
        viewEvent={viewEvent}
        statusFilter={statusFilter}
        searchFilter={searchFilter}
      />

      <div className="flex justify-end m-4 mt-0">
        <Button onClick={addEvent} color="blue">Add</Button>
      </div>
    </div>
  );
}

export default Home;
