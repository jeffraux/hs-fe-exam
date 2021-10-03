import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import H1 from '../../components/Typography/Headings/H1';
import Button from '../../components/Button';
import Input from '../../components/Input';
import InputSelect from '../../components/InputSelect';

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
      <div className="container flex flex-row justify-between p-4">
        <Input
          name="search"
          placeholder="Search..."
          onChange={(e) => setSearchFilter(e.target.value)}
        />
        <div>
          <InputSelect label="Filter" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="pending">Pending</option>
            <option value="on-going">On-going</option>
            <option value="done">Done</option>
          </InputSelect>
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
