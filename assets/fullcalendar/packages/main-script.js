  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'interaction', 'dayGrid' ],
      height: 'parent',
      header: {
        left: '',
        center: 'title',
        right: ','
      },
      defaultView: '',
      defaultDate: '2020-12-25',
      navLinks: false, // can click day/week names to navigate views
      editable: false,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'P',
          start: '2020-12-01',
        },
		{
          title: 'P',
          start: '2020-12-02',
        },
		{
          title: 'P',
          start: '2020-12-03',
        },
		{
          title: 'P',
          start: '2020-12-04',
        },
		{
          title: 'P',
          start: '2020-12-05',
        },
        {
          title: 'P',
          start: '2020-12-07',
        },
        {
          title: 'P',
          start: '2020-12-08'
        },
		{
          title: 'P',
          start: '2020-12-09',
        },
		{
          title: 'P',
          start: '2020-12-10',
        },
		{
          title: 'P',
          start: '2020-12-11',
        },
        
        {
          title: 'P',
          start: '2020-12-12',
        },
        {
          title: 'P',
          start: '2020-12-13'
        },
        {
          title: 'P',
          start: '2020-12-14'
        },
        {
          title: 'P',
          start: '2020-12-15'
        },
        {
          title: 'P',
          start: '2020-12-16'
        },
        {
          title: 'P',
          start: '2020-12-17'
        },
		{
          title: 'P',
          start: '2020-12-18'
        },
        {
          title: 'P',
          start: '2020-12-19',
        },
		{
          title: 'P',
          start: '2020-12-20',
        },
		{
          title: 'P',
          start: '2020-12-21',
        },
		{
          title: 'P',
          start: '2020-12-22',
        },
		{
          title: 'P',
          start: '2020-12-23',
        },
		{
          title: 'P',
          start: '2020-12-24',
        },
		{
          title: 'P',
          start: '2020-12-25',
        },
		{
          title: 'P',
          start: '2020-12-26',
        },
		{
          title: 'P',
          start: '2020-12-27',
        },
        {
          title: 'P',
          url: '#',
          start: '2020-12-28'
        },
		{
          title: 'P',
          start: '2020-12-29',
        },
      ]
    });

    calendar.render();
  });
