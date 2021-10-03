import React from 'react';
import {
  Select,
  Input,
} from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import './datepicker.css';

function EventForm({
  label, status, date,
  setLabel, setStatus, setDate,
}) {
  return (
    <div className="md:container flex flex-col py-4">
      <Input value={label} placeholder="Label" onChange={(e) => setLabel(e.target.value)} mb="5" />
      <Select placeholder={!status && 'Status'} value={status} onChange={(e) => setStatus(e.target.value)} mb="5">
        <option value="pending">Pending</option>
        <option value="on-going">On-going</option>
        <option value="done">Done</option>
      </Select>
      <DatePicker
        selected={date && moment(date).toDate()}
        onChange={(date) => setDate(moment(date).format('MMM DD, YYYY'))}
        dateFormat="MMM dd, yyyy"
      />
    </div>
  );
}

export default EventForm;
