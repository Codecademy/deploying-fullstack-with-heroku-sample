import mock from '../MockConfig';
import userList from '../../fakedb/userList';

mock.onGet('/api/user/list').reply(200, userList);
