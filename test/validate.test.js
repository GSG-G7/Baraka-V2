/* eslint-disable no-console */
const tape = require('tape');
const { signupValidate, loginValidate } = require('../src/validation/index');

tape('init tape test', t => {
  t.equal(1, 1, 'should pass');
  t.end();
});

tape('Test loginValidate function', t => {
  t.plan(5);

  t.test('test for success case', t => {
    const testSchema = {
      username: 'Mohammed',
      password: '123456789'
    };
    loginValidate(testSchema)
      .then(res => {
        t.deepEqual(testSchema, res, 'should be the same');
        t.end();
      })
      .catch(t.error);
  });

  t.test('test for wrong username input, lower than 2 character', t => {
    const testSchema = {
      username: 'M',
      password: '12444444444'
    };
    loginValidate(testSchema).catch(err => {
      t.true(
        err.message,
        'child "username" fails because ["username" length must be at least 2 characters long]'
      );
      t.end();
    });
  });

  t.test('test for wrong passwoed input, lower than 8 character', t => {
    const testSchema = {
      username: 'Mohammed',
      password: '12'
    };
    loginValidate(testSchema).catch(err => {
      t.true(
        err.message,
        'child "password" fails because ["password" with value "12" fails to match the required pattern: /^[a-zA-Z0-9]{8,30}$/]]'
      );
      t.end();
    });
  });

  t.test('check for required username', t => {
    const testSchema = {
      username: '',
      password: '12'
    };
    loginValidate(testSchema).catch(err => {
      t.true(err.message, 'child "username" fails because ["username" is not allowed to be empty]');
      t.end();
    });
  });

  t.test('check for required passwo', t => {
    const testSchema = {
      username: '',
      password: '12'
    };
    loginValidate(testSchema).catch(err => {
      t.true(err.message, 'child "username" fails because ["username" is not allowed to be empty]');
      t.end();
    });
  });
});

tape('Test signupValidate function', t => {
  t.plan(5);

  t.test('test for success case', t => {
    const testSchema = {
      username: 'Mohammed',
      password: '123456789',
      confirmPassword: '123456789',
      email: 'mhmmade@gmail.com'
    };
    signupValidate(testSchema)
      .then(res => {
        t.deepEqual(testSchema, res, 'should be the same');
        t.end();
      })
      .catch(t.error);
  });

  t.test('test for wrong username input, lower than 2 character', t => {
    const testSchema = {
      username: 'M',
      password: '12444444444',
      confirmPassword: '12',
      email: 'mhmmade@gmail.com'
    };
    signupValidate(testSchema).catch(err => {
      t.true(
        err.message,
        'child "username" fails because ["username" length must be at least 2 characters long]'
      );
      t.end();
    });
  });
  t.test('test for wrong password enter', t => {
    const testSchema = {
      username: 'Mohammed',
      password: '12',
      confirmPassword: '12',
      email: 'mhmmade@gmail.com'
    };
    signupValidate(testSchema).catch(err => {
      t.true(
        err.message,
        'child "password" fails because ["password" with value "12" fails to match the required pattern: /^[a-zA-Z0-9]{8,30}$/]]'
      );
      t.end();
    });
  });

  t.test('test for non-matching wrong password', t => {
    const testSchema = {
      username: 'Mohammed',
      password: '123456789',
      confirmPassword: '12',
      email: 'mhmmade@gmail.com'
    };
    signupValidate(testSchema).catch(err => {
      t.true(
        err.message,
        'child "confirmPassword" fails because ["confirmPassword" must be one of [ref:password]]'
      );
      t.end();
    });
  });

  t.test('test for writing the minimum number of email segments', t => {
    const testSchema = {
      username: 'Mohammed',
      password: '123456789',
      confirmPassword: '123456789',
      email: 'mhmmade@.com'
    };
    signupValidate(testSchema).catch(err => {
      t.true(err.message, 'child "email" fails because ["email" must be a valid email]');
      t.end();
    });
  });
});
