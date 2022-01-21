var formEl = $('#skills-form');
var nameInputEl = $('#skill-name');
var dateInputEl = $('#datepicker');
var skillsListEl = $('#skills-list');

var printSkills = function(name, date) {
  var listEl = $('<li>');
  var listDetail = name.concat(' on ', date);
  listEl.addClass('list-group-item').text(listDetail);
  listEl.appendTo(skillsListEl);
};

var handleFormSubmit = function(event) {
  event.preventDefault();

  var nameInput = nameInputEl.val();
  var dateInput = dateInputEl.val();

  if (!nameInput || !dateInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printSkills(nameInput, dateInput);

  nameInputEl.val('');
  dateInputEl.val('');
};

formEl.on('submit', handleFormSubmit);

// this gives a list of skills the user has to choose from via a text box and it begins to predict the text when the user starts typing
$(function() {
  var skillNames = [
    'Bootstrap',
    'C',
    'C++',
    'CSS',
    'Express.js',
    'Git',
    'HTML',
    'Java',
    'JavaScript',
    'jQuery',
    'JSON',
    'MySQL',
    'Node.js',
    'NoSQL',
    'PHP',
    'Python',
    'React',
    'Ruby'
  ];
  $('#skill-name').autocomplete({
    source: skillNames
  });
});

// Gives the user a date picker option when the box is selected
$(function() {
  $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true
  });
});

// gives the user the option to manually sort the skills they had submitted
$(function() {
  $('#skills-list').sortable({
    placeholder: 'ui-state-highlight'
  });
  $('#skills-list').disableSelection();
});
