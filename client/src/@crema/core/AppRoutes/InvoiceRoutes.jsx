import React from 'react';
import { RoutePermittedRole } from '@crema/constants/AppEnums';
import { Navigate } from 'react-router-dom';

const AddInvoice = React.lazy(() =>
  import('../../../modules/invoice/AddInvoice'),
);
const EditInvoice = React.lazy(() =>
  import('../../../modules/invoice/EditInvoice'),
);
const Clients = React.lazy(() => import('../../../modules/invoice/Clients'));
const AddClients = React.lazy(() =>
  import('../../../modules/invoice/Clients/AddClients'),
);
const EditClients = React.lazy(() =>
  import('../../../modules/invoice/Clients/EditClients'),
);
const Listing = React.lazy(() => import('../../../modules/invoice/Listing'));
const Settings = React.lazy(() => import('../../../modules/invoice/Settings'));
const InvoicePdf = React.lazy(() =>
  import('../../../modules/invoice/InvoicePdf'),
);

export const invoiceConfig = [
  {
    permittedRole: RoutePermittedRole.User,
    path: ['/invoice/invoices/:folder'],
    element: <Listing />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/invoice/invoices',
    element: <Navigate to='/invoice/invoices/all' />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/invoice/clients',
    element: <Clients />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/invoice/add',
    element: <AddInvoice />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/invoice/client/add',
    element: <AddClients />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/invoice/client/edit/:id',
    element: <EditClients />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/invoice/list/edit/:id',
    element: <EditInvoice />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/invoice/pdf/:id',
    element: <InvoicePdf />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/invoice/settings',
    element: <Settings />,
  },
];
