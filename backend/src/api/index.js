//http://localhost:9000/api/users
import users from './users';

export default (app) => {
    app.use('/api/users', users);
}