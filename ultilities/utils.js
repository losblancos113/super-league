import moment from 'moment';

let compareValues = function (key, order='asc') {
  return function(a, b) {
    if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = (typeof a[key] === 'string') ?
      a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string') ?
      b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order == 'desc') ? (comparison * -1) : comparison
    );
  };
};

let formatTimestamp = function (timestamp) {
  let date = new Date(timestamp.seconds * 1000);
  let m = moment(date);
  return m.format('YYYY-MM-DD hh:mm A');
};
let formatDate = function (date) {
  let m = moment(date);
  return m.format('YYYY-MM-DD hh:mm A');
};

export { compareValues, formatTimestamp, formatDate };
