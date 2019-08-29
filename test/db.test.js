const tape = require('tape');
const { dbBuild } = require('./../src/models/config/build');
const { item, list, user } = require('../src/models/queries');

tape('init tape test', t => {
  t.equal(1, 1, 'should pass');
  t.end();
});

tape('test selectAll from user table', t => {
  const expected = [
    { id: 1, username: 'mohammed', password: 'password1', email: 'codecademy@gmail.com' },
    { id: 2, username: 'fadi', password: '1', email: 'fadi@gmail.com' },
    { id: 3, username: 'mai', password: '1', email: 'mai@gmail.com' },
    { id: 4, username: 'amooda', password: '1', email: 'amooda@gmail.com' }
  ];
  dbBuild()
    .then(() => user.selectAll())
    .then(res => res.rows)
    .then(res => {
      t.deepEqual(res, expected, 'the table of user should contain four user');
      t.deepEqual(
        Object.keys(res[0]),
        ['id', 'username', 'password', 'email'],
        ' the keys of first user object should return id and name'
      );
      t.equal(res[0].id, 1, 'the first id in the user is 1');
      t.equal(res[1].username, 'fadi', 'the last name in the user is Fadi');
      t.end();
    })
    .catch(t.error);
});

tape('test selectAll from list table', t => {
  const expected = [
    { id: 1, name: 'Project 1' },
    { id: 2, name: 'Project 2' },
    { id: 3, name: 'Project 3' }
  ];
  dbBuild()
    .then(() => list.selectAll())
    .then(res => res.rows)
    .then(res => {
      t.deepEqual(res, expected, ' the table of list should contain four user');
      t.deepEqual(
        Object.keys(res[0]),
        ['id', 'name'],
        ' the keys of first list object should return id and name'
      );
      t.equal(res[0].id, 1, 'the first id in the list is 1');
      t.equal(res[0].name, 'Project 1', 'the first name in the list is porject 1');
    })
    .then(t.end)
    .catch(t.error);
});

tape('test selectAll from item table', t => {
  const expected = [
    { id: 1, content: 'some dumy text', is_done: true, list_id: 1, user_id: 1 },
    { id: 2, content: 'some dumy text', is_done: true, list_id: 2, user_id: 2 },
    { id: 3, content: 'some dumy text', is_done: false, list_id: 3, user_id: 3 }
  ];
  dbBuild()
    .then(() => item.selectAll())
    .then(res => res.rows)
    .then(res => {
      t.deepEqual(res, expected, ' the table of item should contain four item');
      t.deepEqual(
        Object.keys(res[0]),
        ['id', 'content', 'is_done', 'list_id', 'user_id'],
        ' the keys of first item object should return id , is_done, content, list_id'
      );
      t.equal(res[0].id, 1, 'the first id in the user is 1');
      t.equal(res[0].is_done, true, 'the first item is done >> true');
    })
    .then(t.end)
    .catch(t.error);
});

tape('test insert data to user table', t => {
  const expected = [
    { id: 1, username: 'mohammed', password: 'password1', email: 'codecademy@gmail.com' },
    { id: 2, username: 'fadi', password: '1', email: 'fadi@gmail.com' },
    { id: 3, username: 'mai', password: '1', email: 'mai@gmail.com' },
    { id: 4, username: 'amooda', password: '1', email: 'amooda@gmail.com' },
    { id: 5, username: 'kalb', password: '1', email: 'kalb@gmail.com' }
  ];

  dbBuild()
    .then(() => user.insert({ username: 'kalb', password: 1, email: 'kalb@gmail.com' }))
    .then(() => user.selectAll())
    .then(res => res.rows)
    .then(res => {
      t.deepEqual(res, expected, 'the table of user should contain 5 user');
      t.deepEqual(
        Object.keys(res[0]),
        ['id', 'username', 'password', 'email'],
        ' the keys of first user object should return id and name'
      );
      t.equal(res[0].id, 1, 'the first id in the user is 1');
      t.equal(res[1].username, 'fadi', 'the last name in the user is Fadi');
    })
    .then(t.end)
    .catch(t.error);
});

tape('test insert data to list table', t => {
  const expected = [
    { id: 1, name: 'Project 1' },
    { id: 2, name: 'Project 2' },
    { id: 3, name: 'Project 3' },
    { id: 4, name: 'Project 4' }
  ];
  dbBuild()
    .then(() => list.insert({ name: 'Project 4' }))
    .then(() => list.selectAll())
    .then(res => res.rows)
    .then(res => {
      t.deepEqual(res, expected, 'the table of list should contain 4 entries');
      t.deepEqual(
        Object.keys(res[0]),
        ['id', 'name'],
        ' the keys of first user object should return id and name'
      );
      t.equal(res[0].id, 1, 'the first id in the list is 1');
      t.equal(res[res.length - 1].id, 4, 'the last id in the list is 4');
      t.equal(res[res.length - 1].name, 'Project 4', 'the last name in the list is Project 4');
    })
    .then(t.end)
    .catch(t.error);
});

tape('test insert data to item table', t => {
  const expected = [
    { id: 1, content: 'some dumy text', is_done: true, list_id: 1, user_id: 1 },
    { id: 2, content: 'some dumy text', is_done: true, list_id: 2, user_id: 2 },
    { id: 3, content: 'some dumy text', is_done: false, list_id: 3, user_id: 3 },
    { id: 4, content: 'Description text', is_done: true, list_id: 2, user_id: 1 }
  ];
  dbBuild()
    .then(() => item.insert({ content: 'Description text', isDone: true, listId: 2, userId: 1 }))
    .then(() => item.selectAll())
    .then(res => res.rows)
    .then(res => {
      t.deepEqual(res, expected, 'the table of list should contain 4 entries');
      t.deepEqual(
        Object.keys(res[0]),
        ['id', 'content', 'is_done', 'list_id', 'user_id'],
        " the keys of first user object should return [ 'id', 'content', 'is_done', 'list_id', 'user_id' ]"
      );
      t.equal(res[0].id, 1, 'the first id in the list is 1');
      t.equal(res[res.length - 1].id, 4, 'the last id in the list is 4');
    })
    .then(t.end)
    .catch(t.error);
});

// tape('test for fine user', t => {
//   const expected = 'fadi';
//   t.
// })

tape.onFinish(() => process.exit(0));
