import mock from '../MockConfig';
import folderList from '../../fakedb/invoice/folderList';
import {
  clientList,
  invoiceList,
  invoiceSettings,
} from '../../fakedb/invoice/';

let invoiceData = invoiceList;
let clientsData = clientList;
let invoiceSettingsData = invoiceSettings;

const onGetInvList = (name, data) => {
  switch (name) {
    case 'sent': {
      return data.filter((inv) => inv.folderValue === 120);
    }

    case 'paid': {
      return data.filter((inv) => inv.folderValue === 121);
    }

    case 'declined': {
      return data.filter((inv) => inv.folderValue === 122);
    }

    case 'cancelled': {
      return data.filter((inv) => inv.folderValue === 123);
    }

    default: {
      return data;
    }
  }
};

mock.onGet('/api/invoice/list').reply((config) => {
  const params = config.params;
  let folderinvList = [];
  if (params.folder) {
    folderinvList = onGetInvList(params.folder, invoiceData);
  } else {
    folderinvList = invoiceData;
  }
  const index = params.page * 15;
  const data =
    folderinvList.length > 15
      ? folderinvList.slice(index, index + 15)
      : folderinvList;
  return [200, data];
});

mock.onGet('/api/invoice/detail').reply((config) => {
  const params = config.params;
  const response = invoiceData.find(
    (invoice) => invoice.id === parseInt(params.id),
  );
  return [200, response];
});

mock.onPost('/api/invoice/list/add').reply((request) => {
  const { invoice } = JSON.parse(request.data);
  invoiceData = [invoice, ...invoiceData];
  return [200, invoice];
});

mock.onPut('/api/invoice/list/update').reply((request) => {
  const { invoice } = JSON.parse(request.data);

  invoiceData = invoiceData.map((item) => {
    if (item.id === invoice.id) {
      return invoice;
    }
    return item;
  });
  return [200, invoiceData];
});

mock.onGet('/api/invoice/clients').reply(() => {
  return [200, clientsData];
});

mock.onGet('/api/clients/detail').reply((config) => {
  const params = config.params;
  const response = clientsData.find((client) => client.id === params.id);
  return [200, response];
});

mock.onPost('/api/invoice/clients/add').reply((request) => {
  const { client } = JSON.parse(request.data);
  clientsData = [client, ...clientsData];
  return [200, client];
});

mock.onPut('/api/invoice/clients/update').reply((request) => {
  const { client } = JSON.parse(request.data);

  clientsData = clientsData.map((item) => {
    if (item.id === client.id) {
      return client;
    }
    return item;
  });
  return [200, client];
});

mock.onGet('/api/invoice/folders/list').reply(200, folderList);

mock.onGet('/api/invoice/settings').reply(() => {
  return [200, invoiceSettingsData];
});

mock.onPut('/api/invoice/settings/update').reply((request) => {
  const settings = JSON.parse(request.data);
  invoiceSettingsData = settings;
  return [200, invoiceSettingsData];
});
