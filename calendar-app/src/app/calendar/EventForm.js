import React from 'react';
import {
  Box,
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
    <Box borderRadius="md" w="300px" border="1px" p="5" m="5" borderColor="gray.200">
      <Input value={label} onChange={(e) => setLabel(e.target.value)} mb="5" />
      <Select placeholder={!status && 'Status'} value={status} onChange={(e) => setStatus(e.target.value)} mb="5">
        <option value="pending">Pending</option>
        <option value="on-going">On-going</option>
        <option value="done">Done</option>
      </Select>
      <DatePicker
        selected={moment(date).toDate()}
        onChange={(date) => setDate(moment(date).format('MMM DD YYYY'))}
        dateFormat="MMM dd, yyyy"
      />
    </Box>
  );
}

export default EventForm;
