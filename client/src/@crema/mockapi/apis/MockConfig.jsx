import axios from '@crema/services/axios';

import MockAdapter from 'axios-mock-adapter';

export default new MockAdapter(axios, { delayResponse: 200 });
