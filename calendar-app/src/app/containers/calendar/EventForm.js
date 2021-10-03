import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import Input from '../../components/Input';
import InputSelect from '../../components/InputSelect';

import 'react-datepicker/dist/react-datepicker.css';
import './datepicker.css';
import './EventForm.scss';

function EventForm({
  label, status, date,
  setLabel, setStatus, setDate,
}) {
  return (
    <div className="md:container flex flex-col py-4 form">
      <Input
        value={label}
        name="label"
        placeholder="Label"
        onChange={(e) => setLabel(e.target.value)}
      />
      <InputSelect label={'Status'} value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="pending">Pending</option>
        <option value="on-going">On-going</option>
        <option value="done">Done</option>
      </InputSelect>
      <DatePicker
        selected={date && moment(date).toDate()}
        onChange={(date) => setDate(moment(date).format('MMM DD, YYYY'))}
        dateFormat="MMM dd, yyyy"
      />
    </div>
  );
}

export default EventForm;
