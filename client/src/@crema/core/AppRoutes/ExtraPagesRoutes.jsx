import React from 'react';
import { RoutePermittedRole } from '@crema/constants/AppEnums';

const AboutUs = React.lazy(() => import('../../../modules/extraPages/AboutUs'));
const ContactUs = React.lazy(() =>
  import('../../../modules/extraPages/ContactUs'),
);
const KnowledgeBase = React.lazy(() =>
  import('../../../modules/extraPages/KnowledgeBase'),
);
const UserProfile = React.lazy(() =>
  import('../../../modules/account/MyProfile'),
);
const Portfolio = React.lazy(() =>
  import('../../../modules/extraPages/Portfolio'),
);
const FAQ = React.lazy(() => import('../../../modules/extraPages/FAQ'));

const PortfolioDetail = React.lazy(() =>
  import('../../../modules/extraPages/Portfolio/PortFolioPage'),
);
const PricingListing = React.lazy(() =>
  import('../../../modules/extraPages/Pricing'),
);
const PricingDetail = React.lazy(() =>
  import('../../../modules/extraPages/Pricing/Detail'),
);
const Blog = React.lazy(() => import('../../../modules/extraPages/Blog'));
const BlogDetail = React.lazy(() =>
  import('../../../modules/extraPages/Blog/DetailPage'),
);
const BlogCreate = React.lazy(() =>
  import('../../../modules/extraPages/Blog/CreateBlog'),
);

const BlogEditPage = React.lazy(() =>
  import('../../../modules/extraPages/Blog/EditBlog'),
);

export const extraPagesConfigs = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/my-profile',
    element: <UserProfile />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/extra-pages/account',
    element: <UserProfile />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/extra-pages/about-us',
    element: <AboutUs />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/extra-pages/contact-us',
    element: <ContactUs />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/extra-pages/knowledge-base',
    element: <KnowledgeBase />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/extra-pages/portfolio',
    element: <Portfolio />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/extra-pages/portfolio/:id',
    element: <PortfolioDetail />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/extra-pages/blog-details',
    element: <BlogDetail />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/extra-pages/blog-details/:id',
    element: <BlogDetail />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/extra-pages/blog',
    element: <Blog />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/extra-pages/create-blog',
    element: <BlogCreate />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/extra-pages/edit-blog/:id',
    element: <BlogEditPage />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/extra-pages/faq',
    element: <FAQ />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/extra-pages/pricing-listing',
    element: <PricingListing />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/extra-pages/pricing-detail',
    element: <PricingDetail />,
  },
];
