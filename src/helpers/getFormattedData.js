const { list, item } = require('../models/queries');

(() => {
  return Promise.all([list.selectAll(), item.getItemsWithUsernames()])
    .then(res => [res[0].rows, res[1].rows])
    .then(console.log);
})();
/* [ lists:[ { id: 1, name: 'Project 1' },
    { id: 2, name: 'Project 2' },
    { id: 3, name: 'Project 3' } ],
  items: [ { id: 1,
      content: 'some dumy text',
      is_done: true,
      list_id: 1,
      username: 'Mohammed' },
    { id: 2,
      content: 'some dumy text',
      is_done: true,
      list_id: 2,
      username: 'Fadi' },
    { id: 3,
      content: 'some dumy text',
      is_done: false,
      list_id: 3,
      username: 'Mai' },
    { id: 4,
      content: 'Description text',
      is_done: true,
      list_id: 2,
      username: 'Mohammed' } ] ] */
