import Ao3 from '../lib/Ao3'
import testUser from './user.json'

let github = new Github({
         username: testUser.USERNAME,
         password: testUser.PASSWORD,
         auth: 'basic',
      });
user = github.getUser();