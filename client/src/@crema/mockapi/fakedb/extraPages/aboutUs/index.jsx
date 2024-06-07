import React from 'react';
import { BiChart } from 'react-icons/bi';
import { FaUserAlt } from 'react-icons/fa';
import { BsFileText } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import { blue, cyan, green, magenta } from '@ant-design/colors';

export const aboutUsData = {
  introduction: {
    srcImg: '/assets/images/extra-pages/introduction.png',
    subTitle: 'Browse amazing social media features',
    title: 'We Provides Best Advice For Your Business',
    introductionList: [
      {
        id: 1,
        icon: '/assets/images/extra-pages/workshop-icon.svg',
        title: 'Daily workshops',
        description:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over.',
      },
      {
        id: 1,
        icon: '/assets/images/extra-pages/layout-icon.svg',
        title: 'Unlimited layouts and styles',
        description:
          'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.',
      },
    ],
  },
  officeCulture: {
    srcImg: '/assets/images/extra-pages/office-culture.png',
    title: 'The standard Lorem Ipsum passage, used since the 1500s',
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
  },
  aboutUsSection: [
    {
      id: 1,
      icon: <BiChart />,
      avatarColor: green[4],
      title: 'Strategy Solutions',
      content:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      id: 2,
      icon: <FaUserAlt />,
      avatarColor: magenta[4],
      title: 'Dedicated Support',
      content:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      id: 3,
      icon: <BsFileText />,
      avatarColor: blue[9],
      title: 'Digital Design',
      content:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      id: 4,
      icon: <HiLocationMarker />,
      avatarColor: cyan[6],
      title: 'Strategy Solutions',
      content:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
  ],
  team: [
    {
      id: 1,
      srcImg: '/assets/images/extra-pages/teamImages/jone.png',
      name: 'Jone Deuo',
      position: 'Sr. Web Developer',
    },
    {
      id: 2,
      srcImg: '/assets/images/extra-pages/teamImages/user1.png',
      name: 'Asantha Powel',
      position: 'CEO',
    },
    {
      id: 3,
      srcImg: '/assets/images/extra-pages/teamImages/user4.png',
      name: 'Johna Taylor',
      position: 'CTO',
    },
    {
      id: 4,
      srcImg: '/assets/images/extra-pages/teamImages/user3.png',
      name: 'Nick Campbell',
      position: 'General Manager',
    },
    {
      id: 5,
      srcImg: '/assets/images/extra-pages/teamImages/user5.png',
      name: 'Johna Taylor',
      position: 'CFO',
    },
    {
      id: 6,
      srcImg: '/assets/images/extra-pages/teamImages/user2.png',
      name: 'Ricardo Johnson',
      position: 'Director',
    },
    {
      id: 7,
      srcImg: '/assets/images/extra-pages/teamImages/user6.png',
      name: 'Johnson Lopez',
      position: 'Technical Advisor',
    },
  ],
  client: [
    {
      id: 1,
      name: 'Liberty',
      srcImg: '/assets/images/extra-pages/clientImages/liberty.svg',
    },
    {
      id: 2,
      name: 'Centrick',
      srcImg: '/assets/images/extra-pages/clientImages/centrick.svg',
    },
    {
      id: 3,
      name: 'Carrs',
      srcImg: '/assets/images/extra-pages/clientImages/carrs.svg',
    },
    {
      id: 4,
      name: 'Boss',
      srcImg: '/assets/images/extra-pages/clientImages/boss.svg',
    },
    {
      id: 5,
      name: 'Mayhew',
      srcImg: '/assets/images/extra-pages/clientImages/mayhew.svg',
    },
    {
      id: 6,
      name: 'express',
      srcImg: '/assets/images/extra-pages/clientImages/express.svg',
    },
    {
      id: 7,
      name: 'Spitfire',
      srcImg: '/assets/images/extra-pages/clientImages/spitfire.svg',
    },
    {
      id: 8,
      name: 'Proplist',
      srcImg: '/assets/images/extra-pages/clientImages/proplist.svg',
    },
    {
      id: 9,
      name: 'Pm-connect',
      srcImg: '/assets/images/extra-pages/clientImages/pm-connect.svg',
    },
    {
      id: 10,
      name: 'Centrick',
      srcImg: '/assets/images/extra-pages/clientImages/centrick.svg',
    },
  ],
};
