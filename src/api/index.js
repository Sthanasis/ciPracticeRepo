import fake from './fake';
import remote from './remote';

const apiDriver = process.env['API_DRIVER']
let api;

switch (apiDriver) {
  case 'remote':
    api = remote;
    break;
  case 'fake':
    api = fake;
    break;
}

export default api;