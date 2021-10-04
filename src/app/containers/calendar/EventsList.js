import React from 'react';

import Text from '../../components/Typography/Text';

const EventsList = ({ events, viewEvent, statusFilter, searchFilter }) => {
  const eventsList = events.filter(event => {
    let statusFilterCondition = true;
    let searchFilterCondition = true;

    if (statusFilter) {
      statusFilterCondition = event.status === statusFilter;
    }

    if (searchFilter) {
      searchFilterCondition = `${event.label}`.toLowerCase().includes(searchFilter.toLowerCase());
    }

    return statusFilterCondition && searchFilterCondition;
  });

  return (
    <div className="rounded-md border border-gray-300 mt-0 m-4">
      {eventsList.length ? eventsList.map(event => (
        <div
          key={`${event.id}-${event.label}`}
          onClick={() => viewEvent(event)}
          className="cursor-pointer rounded-md border border-gray-300 m-4"
        >
          <div className="flex flex-col items-start p-4">
            <Text>{event.label}</Text>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-1">
                <Text customClass="capitalize">{event.status}</Text>
              </div>
              <div className="flex flex-1 justify-end">
                <Text>{event.date}</Text>
              </div>
            </div>
          </div>
        </div>
      )) : (
        <div className="rounded-md border border-gray-300 m-4">
          <div className="flex justify-center p-4">
            <Text>No result</Text>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsList;
