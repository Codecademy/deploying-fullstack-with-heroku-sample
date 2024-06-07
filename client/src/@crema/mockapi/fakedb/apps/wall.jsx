import { generateUniqueID } from '@crema/helpers/StringHelper';
import { MessageType } from './chat/connectionList';
import { getFormattedDateTime } from '@crema/helpers/DateHelper';

export const wallData = {
  id: 123,
  name: 'Suzanna J. Fowler',
  profilePic: '/assets/images/avatar/A1.jpg',
  videoCall: {
    users: [
      {
        id: 1,
        name: 'John Doe',
        profilePic: '/assets/images/avatar/A2.jpg',
      },
      {
        id: 2,
        name: 'Lily John',
        profilePic: '/assets/images/avatar/A3.jpg',
      },
      {
        id: 3,
        name: 'John Doe',
        profilePic: '/assets/images/avatar/A4.jpg',
      },
      {
        id: 4,
        name: 'Lily John',
        profilePic: '/assets/images/avatar/A5.jpg',
      },
      {
        id: 5,
        name: 'John Doe',
        profilePic: '/assets/images/avatar/A6.jpg',
      },
      {
        id: 6,
        name: 'Lily John',
        profilePic: '/assets/images/avatar/A1.jpg',
      },
    ],
    title: '8 mutual friends',
  },
  friendRequests: [
    {
      id: 5454,
      profilePic: '/assets/images/avatar/A4.jpg',
      name: 'Sarah Taylor',
      date: getFormattedDateTime(-12, 'minutes', 'ddd MMM DD YYYY kk:mm:ss Z'),
    },
    {
      id: 435,
      profilePic: '/assets/images/avatar/A5.jpg',
      name: 'Johna Say',
      date: getFormattedDateTime(-30, 'minutes', 'ddd MMM DD YYYY kk:mm:ss Z'),
    },
    {
      id: 54345,
      profilePic: '/assets/images/avatar/A25.jpg',
      name: 'Nikunj Lee',
      date: getFormattedDateTime(-50, 'minutes', 'ddd MMM DD YYYY kk:mm:ss Z'),
    },
    {
      id: 7656,
      profilePic: '/assets/images/avatar/A24.jpg',
      name: 'Kennie Sebestian',
      date: getFormattedDateTime(-120, 'minutes', 'ddd MMM DD YYYY kk:mm:ss Z'),
    },
    {
      id: 875456,
      profilePic: '/assets/images/avatar/A23.jpg',
      name: 'Bose Warne',
      date: getFormattedDateTime(-1, 'days', 'ddd MMM DD YYYY kk:mm:ss Z'),
    },
  ],
  photos: [
    {
      id: 1,
      thumb: '/assets/images/wall/pic1.png',
    },
    {
      id: 2,
      thumb: '/assets/images/wall/pic2.png',
    },
    {
      id: 3,
      thumb: '/assets/images/wall/pic3.png',
    },
    {
      id: 4,
      thumb: '/assets/images/wall/pic4.png',
    },
    {
      id: 5,
      thumb: '/assets/images/wall/pic5.png',
    },
    {
      id: 6,
      thumb: '/assets/images/wall/pic2.png',
    },
    {
      id: 7,
      thumb: '/assets/images/wall/pic5.png',
    },
    {
      id: 8,
      thumb: '/assets/images/wall/pic1.png',
    },
    {
      id: 9,
      thumb: '/assets/images/wall/pic3.png',
    },
  ],
  about: [
    {
      id: 1,
      icon: 'person',
      text: '191 Main St, Bar Harbor, ME 04609, United States',
      linkType: '',
    },
    {
      id: 2,
      icon: 'phone',
      text: '092654 60634',
      linkType: 'phone',
    },
    {
      id: 3,
      icon: 'email',
      text: 'ericbrickey@gmail.com',
      linkType: 'email',
    },
    {
      id: 4,
      icon: 'error',
      text: 'Edit description',
      linkType: '',
    },
    {
      id: 5,
      icon: 'thumb',
      text: '331 people like this',
      linkType: '',
    },
    {
      id: 6,
      icon: 'public',
      text: 'https://www.crema.com',
      linkType: 'link',
    },
  ],
  suggestTeam: {
    icon: '/assets/images/wall/facebook.png',
    title: 'Facebook Design',
    subTitle: 'Product Design',
    mediaImg: '/assets/images/wall/fman.jpg',
  },
  stories: [
    {
      id: 1,
      avatar: '/assets/images/avatar/A1.jpg',
      title: 'Brooklyn Simmons',
      imgSrc: '/assets/images/wall/stories2.jpg',
    },
    {
      id: 2,
      avatar: '/assets/images/avatar/A5.jpg',
      title: 'Esther Howard',
      imgSrc: '/assets/images/wall/stories1.jpg',
    },
  ],
  whatsHappen: [
    {
      id: 1,
      imgSrc: '/assets/images/wall/happen_img1.png',
      title: 'COVID-19 LIVE',
      subTitle: 'Trending in India',
      tag: [
        {
          id: 1,
          name: 'Sanam',
        },
        {
          id: 2,
          name: 'Nisha',
        },
      ],
    },
    {
      id: 2,
      imgSrc: '/assets/images/wall/happen_img2.png',
      title: 'COVID-19 LIVE',
      subTitle: 'Trending in India',
      tag: [
        {
          id: 1,
          name: 'Sanam',
        },
        {
          id: 2,
          name: 'Nisha',
        },
      ],
    },
    {
      id: 3,
      imgSrc: '/assets/images/wall/happen_img3.png',
      title: 'COVID-19 LIVE',
      subTitle: 'Trending in India',
      tag: [
        {
          id: 1,
          name: 'Sanam',
        },
        {
          id: 2,
          name: 'Nisha',
        },
      ],
    },
    {
      id: 4,
      imgSrc: '/assets/images/wall/happen_img4.png',
      title: 'COVID-19 LIVE',
      subTitle: 'Trending in India',
      tag: [
        {
          id: 1,
          name: 'Sanam',
        },
        {
          id: 2,
          name: 'Nisha',
        },
      ],
    },
    {
      id: 5,
      imgSrc: '/assets/images/wall/happen_img5.png',
      title: 'COVID-19 LIVE',
      subTitle: 'Trending in India',
      tag: [
        {
          id: 1,
          name: 'Sanam',
        },
        {
          id: 2,
          name: 'Nisha',
        },
      ],
    },
  ],
  recentNews: [
    {
      id: 1,
      user: {
        name: 'Kara Blake',
        profilePic: '/assets/images/avatar/A18.jpg',
      },
      title: 'New Post Design',
      desc: 'It is a long established fact that a user will be diverted',
    },
    {
      id: 2,
      user: {
        name: 'Jonathan Lee',
        profilePic: '/assets/images/avatar/A19.jpg',
      },
      title: 'New Book Release',
      desc: 'It is a long established fact that a user will be diverted',
    },
    {
      id: 3,
      user: {
        name: 'Johna Khali',
        profilePic: '/assets/images/avatar/A20.jpg',
      },
      title: 'Scraping of Law',
      desc: 'It is a long established fact that a user will be diverted',
    },
    {
      id: 4,
      user: {
        name: 'Kara Blake',
        profilePic: '/assets/images/avatar/A21.jpg',
      },
      title: 'Inching towards Victory',
      desc: 'It is a long established fact that a user will be diverted',
    },
  ],
  whoToFollow: [
    {
      id: 1,
      title: 'Annette Black',
      subTitle: '@Annette_Black',
      profilePic: '/assets/images/avatar/A18.jpg',
    },
    {
      id: 2,
      title: 'Ralph Edwards',
      subTitle: '@Ralph_Edwards',
      profilePic: '/assets/images/avatar/A19.jpg',
    },
    {
      id: 3,
      title: 'Bessie Cooper',
      subTitle: '@Bessie_Cooper',
      profilePic: '/assets/images/avatar/A20.jpg',
    },
    {
      id: 4,
      title: 'Wade Warren',
      subTitle: '@Wade_Warren',
      profilePic: '/assets/images/avatar/A14.jpg',
    },
    {
      id: 5,
      title: 'Robert Fox',
      subTitle: '@Robert_Fox',
      profilePic: '/assets/images/avatar/A15.jpg',
    },
    {
      id: 6,
      title: 'Huawei Europe',
      subTitle: '@Huawei_Europe',
      profilePic: '/assets/images/avatar/A7.jpg',
    },
  ],
  suggestions: [
    {
      id: 1,
      name: 'Facebook Design',
      desc: 'It is a long established fact that a user will be diverted',
      thumb: '/assets/images/wall/suggestion.png',
    },
    {
      id: 2,
      name: 'React Developers',
      desc: 'It is a long established fact that a user will be diverted',
      thumb: '/assets/images/wall/suggestion.png',
    },
    {
      id: 3,
      name: 'Buy & Sell',
      desc: 'It is a long established fact that a user will be diverted',
      thumb: '/assets/images/wall/suggestion.png',
    },
    {
      id: 4,
      name: 'All about travel',
      desc: 'It is a long established fact that a user will be diverted',
      thumb: '/assets/images/wall/suggestion.png',
    },
    {
      id: 5,
      name: 'Javascript Lovers',
      desc: 'It is a long established fact that a user will be diverted',
      thumb: '/assets/images/wall/suggestion.png',
    },
  ],
};

export const postsList = [
  {
    id: 123,
    owner: {
      name: 'Cripton Rice',
      profilePic: '/assets/images/avatar/A18.jpg',
      id: 323445,
    },
    date: getFormattedDateTime(-1, 'days', 'ddd MMM DD YYYY kk:mm:ss Z'),
    attachments: [
      {
        id: 5445,
        path: '/assets/images/wall/berlin.jpg',
        preview: '/assets/images/wall/berlin.jpg',
        metaData: { type: 'images/jpg', size: 2343 },
      },
      {
        id: 54546,
        path: '/assets/images/wall/cairo.jpg',
        preview: '/assets/images/wall/cairo.jpg',
        metaData: { type: 'images/jpg', size: 2345 },
      },
      {
        id: 54547,
        path: '/assets/images/wall/berlin.jpg',
        preview: '/assets/images/wall/berlin.jpg',
        metaData: { type: 'images/jpg', size: 2346 },
      },
    ],
    message: 'Beautiful cities of Europe...',
    liked: true,
    likes: 324,
    shares: 45,
    views: 3456,
    comments: [
      {
        id: 324,
        author: {
          name: 'John Doe',
          profilePic: '/assets/images/avatar/A2.jpg',
          id: 3423,
        },
        liked: true,
        message_type: MessageType.TEXT,
        comment: 'Wow! these pics are so mesmerizing.',
        date: getFormattedDateTime(-1, 'days', 'ddd MMM DD YYYY kk:mm:ss Z'),
      },
      {
        id: 324,
        author: {
          name: 'James Jennie',
          profilePic: '/assets/images/avatar/A10.jpg',
          id: 343432,
        },
        liked: true,
        message_type: MessageType.MEDIA,
        comment: '',
        media: {
          id: generateUniqueID(),
          url: '/assets/images/wall/fman.jpg',
          mime_type: 'image/jpg',
        },
        date: getFormattedDateTime(-1, 'days', 'ddd MMM DD YYYY kk:mm:ss Z'),
      },
    ],
  },
  {
    id: 3443,
    owner: {
      name: 'John Buchanan',
      profilePic: '/assets/images/avatar/A3.jpg',
      id: 3243,
    },
    date: getFormattedDateTime(-2, 'days', 'ddd MMM DD YYYY kk:mm:ss Z'),
    attachments: [
      {
        id: 5445,
        path: '/assets/images/wall/berlin.jpg',
        preview: '/assets/images/wall/berlin.jpg',
        metaData: { type: 'images/jpg', size: 2343 },
      },
      {
        id: 54546,
        path: '/assets/images/wall/cairo.jpg',
        preview: '/assets/images/wall/cairo.jpg',
        metaData: { type: 'images/jpg', size: 2345 },
      },
    ],
    message: 'Amazing clicks from my camera!',
    liked: false,
    likes: 435,
    shares: 34,
    views: 6544,
    comments: [
      {
        id: 5465,
        author: {
          name: 'James Jennie',
          profilePic: '/assets/images/avatar/A10.jpg',
          id: 343432,
        },
        message_type: MessageType.TEXT,
        liked: true,
        comment: 'Wow! Excellent, these images are so beautiful.',
        date: getFormattedDateTime(0, 'days', 'ddd MMM DD YYYY kk:mm:ss Z'),
      },
    ],
  },
  {
    id: 3454,
    owner: {
      name: 'Josh Blake',
      profilePic: '/assets/images/avatar/A12.jpg',
      id: 32434,
    },
    date: getFormattedDateTime(-3, 'days', 'ddd MMM DD YYYY kk:mm:ss Z'),
    attachments: [
      {
        id: 54546,
        path: '/assets/images/wall/cairo.jpg',
        preview: '/assets/images/wall/cairo.jpg',
        metaData: { type: 'images/jpg', size: 2345 },
      },
    ],
    content: '',
    liked: true,
    likes: 4343,
    shares: 34,
    views: 3243,
    comments: [],
  },
];
