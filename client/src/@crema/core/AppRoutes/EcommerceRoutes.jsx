import React from 'react';
import { RoutePermittedRole } from '@crema/constants/AppEnums';

const Products = React.lazy(() =>
  import('../../../modules/ecommerce/Products'),
);
const ProductDetail = React.lazy(() =>
  import('../../../modules/ecommerce/ProductDetail'),
);
const Customers = React.lazy(() =>
  import('../../../modules/ecommerce/Customers'),
);
const Checkout = React.lazy(() =>
  import('../../../modules/ecommerce/Checkout'),
);
const Carts = React.lazy(() => import('../../../modules/ecommerce/Carts'));
const Orders = React.lazy(() => import('../../../modules/ecommerce/Orders'));
const Confirmation = React.lazy(() =>
  import('../../../modules/ecommerce/Confirmation'),
);
const Invoice1 = React.lazy(() =>
  import('../../../modules/ecommerce/Invoice1'),
);
const Invoice2 = React.lazy(() =>
  import('../../../modules/ecommerce/Invoice2'),
);

const ProductListing = React.lazy(() =>
  import('../../../modules/ecommerce/Admin/Listing'),
);
const AddProduct = React.lazy(() =>
  import('../../../modules/ecommerce/Admin/AddEditProduct'),
);
const EditProduct = React.lazy(() =>
  import('../../../modules/ecommerce/Admin/EditProduct'),
);

export const ecommerceConfig = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/apps/ecommerce/products',
    element: <Products />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: [
      '/apps/ecommerce/product_detail/',
      '/apps/ecommerce/product_detail/:id',
    ],
    element: <ProductDetail />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/apps/ecommerce/checkout',
    element: <Checkout />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/apps/ecommerce/cart',
    element: <Carts />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/apps/ecommerce/orders',
    element: <Orders />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/apps/ecommerce/confirmation',
    element: <Confirmation />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/apps/ecommerce/invoice-1',
    element: <Invoice1 />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/apps/ecommerce/invoice-2',
    element: <Invoice2 />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/apps/ecommerce-admin/product-listing',
    element: <ProductListing />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/apps/ecommerce-admin/add-products',
    element: <AddProduct />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/apps/ecommerce-admin/edit-products/:id',
    element: <EditProduct />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/apps/ecommerce-admin/customers',
    element: <Customers />,
  },
];
