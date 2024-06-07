import mock from '../MockConfig';
import ecommerceData, {
  cartItems,
  customersData,
  recentOrders,
} from '../../fakedb/ecommerce/ecommerceData';
import { multiPropsFilter } from '@crema/helpers/Common';

let cartItemsData = cartItems;
let ecommerceListingData = ecommerceData;

mock.onPost('/api/ecommerce/list/add').reply((request) => {
  const { product } = JSON.parse(request.data);
  ecommerceListingData = ecommerceListingData.concat({
    id: ecommerceListingData.length + 1,
    ...product,
  });
  return [200, ecommerceListingData];
});

mock.onPut('/api/ecommerce/list/update').reply((request) => {
  const { product } = JSON.parse(request.data);
  ecommerceListingData = ecommerceListingData.map((item) => {
    if (item.id === product.id) {
      return product;
    }
    return item;
  });
  return [200, ecommerceListingData];
});

mock.onGet('/api/ecommerce/list').reply((request) => {
  const { filterData, page } = request.params;
  const data = multiPropsFilter(ecommerceListingData, filterData);
  const index = page * 10;
  const total = data.length;
  const list = data.length > 10 ? data.slice(index, index + 10) : data;
  return [200, { list, total }];
});

mock.onGet('/api/ecommerce/get').reply((request) => {
  const { id } = request.params;
  if (+id >= 1) {
    const data = ecommerceListingData.filter((item) => +item.id === +id);
    if (data.length > 0) return [200, data[0]];
  }
  return [200, ecommerceListingData[0]];
});

mock.onGet('/api/ecommerce/orders').reply((request) => {
  const { search, page } = request.params;

  let orders = [...recentOrders];

  if (search) {
    orders = orders.filter(
      (order) =>
        order.customer.toLowerCase().includes(search.toLowerCase()) ||
        order.product.toLowerCase().includes(search.toLowerCase()),
    );
  }
  return [
    200,
    {
      count: orders.length,
      data: orders.slice((page - 1) * 10, page * 10),
    },
  ];
});

mock.onGet('/api/ecommerce/customers').reply((request) => {
  const { search, page } = request.params;

  let customers = [...customersData];

  if (search) {
    customers = customers.filter(
      (customer) =>
        customer.name.toLowerCase().includes(search.toLowerCase()) ||
        customer.email.toLowerCase().includes(search.toLowerCase()),
    );
  }

  return [
    200,
    {
      customerCount: customers.length,
      customers: customers.slice((page - 1) * 10, page * 10),
    },
  ];
});

mock.onGet('/api/cart/get').reply(() => {
  return [200, cartItemsData];
});

mock.onPost('/api/cart/add').reply((request) => {
  const { product } = JSON.parse(request.data);
  if (cartItemsData.some((item) => +item.id === +product.id)) {
    cartItemsData = cartItemsData.map((item) => {
      if (+item.id === +product.id) {
        item.count = +item.count + 1;
      }
      return item;
    });
    return [200, cartItemsData];
  } else {
    cartItemsData = cartItemsData.concat({
      id: product.id,
      product: {
        image: product.image[0].src,
        title: product.title,
        brand: product.brand,
      },
      price: {
        mrp: product.mrp,
        discount: product.discount,
      },
      total: {
        mrp: product.mrp,
        discount: product.discount,
        count: 1,
      },
      count: 1,
    });
    return [200, cartItemsData];
  }
});

mock.onPut('/api/cart/update').reply((request) => {
  const { product } = JSON.parse(request.data);
  cartItemsData = cartItemsData.map((item) =>
    item.id === product.id ? product : item,
  );
  return [200, cartItemsData];
});

mock.onPost('/api/cart/remove').reply((request) => {
  const { product } = JSON.parse(request.data);
  cartItemsData = cartItemsData.filter((item) => item.id !== product.id);
  return [200, cartItemsData];
});
