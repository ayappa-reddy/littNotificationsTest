const moment = require('moment');

// exports.handler = async (event) => {
export default async (event) => {
  console.log('event', event);

  const oneMin = moment().add(5, 'minutes');
  const seconds = moment().add(10, 'seconds');
  const tenMin = moment().add(10, 'minutes');
  const fiveMin = moment().add(3, 'minutes');
  const thirtyMin = moment().add(5, 'minutes');

  const oneHr = moment().add(1, 'hours');
  const sixHr = moment().add(6, 'hours');
  const morning = moment().add(1, 'days').set({hour: 8, minute: 15});
  const evening = moment().add(1, 'days').set({hour: 11, minute: 11});

  return [
    // {
    //   date: tenMin,
    //   title: '10 min test',
    //   message: 'Please create an intention and rate your tasks',
    // },
    // {
    //   date: oneMin,
    //   title: '5 min test',
    //   message: 'Please create an intention and rate your tasks',
    // },
    {
      date: seconds,
      title: '5 secs test',
      message: 'Please create an intention and rate your tasks',
    },
    // {
    //   date: fiveMin,
    //   title: "3 min test",
    //   message: "Please create an intention and rate your tasks",
    // },
    // {
    //   date: thirtyMin,
    //   title: "5 min test",
    //   message: "Please create an intention and rate your tasks",
    // },
    // {
    //   date: oneHr,
    //   title: '1 hour test',
    //   message: 'Time to create your meta tasks',
    // },
    // {
    //   date: sixHr,s
    //   title: "6 hour test",
    //   message: "Six hour tests",
    // },
    // {
    //   date: morning,
    //   title: 'Notification scheduled for 8 am',
    //   message: 'Time to do morning meditation',
    // },
    // {
    //   date: evening,
    //   title: 'Notification scheduled for 11pm',
    //   message: 'Time to do evening meditation',
    // },
  ];
};
