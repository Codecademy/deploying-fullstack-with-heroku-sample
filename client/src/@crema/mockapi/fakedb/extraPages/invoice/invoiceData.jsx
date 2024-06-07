export const invoiceData = {
  company: {
    name: 'Crema Admin',
    address1: 'A-22, Garvit Complex',
    address2: 'Pune(MH), India',
    phone: '(+91)-1234567890',
  },
  client: {
    name: 'Mr. John Doe',
    phone: '(+91)-1234567890',
    email: 'john123doe@xyz.com',
  },
  invoice: {
    id: '$323892938',
    date: '05/10/2019',
    dueDate: '05/10/2020',
  },
  products: [
    {
      id: 1,
      item: 'Logo Design',
      desc: 'Lorem Ipsum is simply dummy text of the printing',
      type: 'FIXED PRICE',
      quantity: '02',
      price: 300,
    },
    {
      id: 2,
      item: 'Stationary Design',
      desc: 'Lorem Ipsum is simply dummy text of the printing',
      type: '$20/HOUR',
      quantity: '5 Hours',
      price: 100,
    },
    {
      id: 3,
      item: 'Logo Design',
      desc: 'Lorem Ipsum is simply dummy text of the printing',
      type: 'FIXED PRICE',
      quantity: '02',
      price: 300,
    },
  ],
  subTotal: 1000,
  rebate: 200,
  total: 800,
};
export default invoiceData;
