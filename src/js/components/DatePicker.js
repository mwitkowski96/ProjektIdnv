import BaseWidget from '../components/BaseWidget.js';
import utils from '../utils.js';
import {select} from '../settings.js';

class DatePicker extends BaseWidget{
  constructor(wrapper){
    super(wrapper, utils.dateToStr(new Date()));
    const thisWidget = this;

    thisWidget.dom.inputStart = thisWidget.dom.wrapper.querySelector(select.widgets.datePicker.inputStart);
    thisWidget.dom.inputEnd = thisWidget.dom.wrapper.querySelector(select.widgets.datePicker.inputEnd);
    thisWidget.initPlugin();
  }
  initPlugin(){
    const thisWidget = this;

    thisWidget.defaultDate = new Date();
    thisWidget.maxDate = new Date();
    // eslint-disable-next-line no-undef
    flatpickr(thisWidget.dom.inputStart, {
      defaultDate: thisWidget.defaultDate,
      minDate: null,
      maxDate: thisWidget.maxDate,
      allowInput: true,
      dateFormat: 'd-m-Y',
      locale: {
        firstDayOfWeek: 1
      },
      disable: [
        function(date) {
          return (date.getDay() === 1);
        }
      ],
      //altInput: true,
      plugins: [
        // eslint-disable-next-line no-undef
        new rangePlugin({
          input: thisWidget.dom.inputEnd,
          placeholder: thisWidget.defaultDate})
      ],
      onChange: function(selectedDates, dateStr) {
        thisWidget.value = dateStr;
      },
    });

  }
  parseValue(value){
    return value;
  }

  isValid(){
    return true;
  }

  renderValue(){

  }
}

export default DatePicker;
