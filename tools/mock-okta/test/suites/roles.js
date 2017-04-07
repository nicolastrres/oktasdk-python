const util = require('../util');

util.describe('/api/v1/users/:id/roles', (suite) => {
  suite.it('assign role to a user', req =>
    req.get({ path: '/api/v1/users/mocktestexample-frutis@mocktestexample.com'})
      .then(user =>
        req.post(
            {
                path: `/api/v1/users/${user.id}/roles`,
                body: {
                    type: 'ORG_ADMIN',
                },
            })
      )
    );

  suite.it('get all roles assigned to a user', req =>
    req.get({ path: '/api/v1/users/mocktestexample-frutis@mocktestexample.com' })
      .then(user =>
          req.get({
              path: `/api/v1/users/${user.id}/roles`
          }))
    );

});
