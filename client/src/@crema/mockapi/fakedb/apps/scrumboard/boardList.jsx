import dayjs from 'dayjs';

const boardList = [
  {
    id: 2001,
    name: 'Dashboard Frontend Application',
    list: [
      {
        id: 3001,
        name: 'In Progress',
        cards: [
          {
            id: 4001,
            title: 'Call Adam to review the documentation',
            attachments: [
              {
                id: 4434343,
                file: {
                  path: 'asantha.jpg',
                  name: 'asantha.jpg',
                  lastModified: 1579117694243,
                  lastModifiedDate:
                    'Thu Jan 16 2020 01:18:14 GMT+0530 (India Standard Time)',
                },
                preview: '/assets/images/avatar/A5.jpg',
              },
              {
                id: 456544,
                file: {
                  path: 'rahul.jpg',
                  name: 'rahul.jpg',
                  lastModified: 1579117694535,
                  lastModifiedDate:
                    'Thu Jan 16 2020 01:18:14 GMT+0530 (India Standard Time)',
                },
                preview: '/assets/images/avatar/A10.jpg',
              },
            ],
            label: [
              { id: 301, name: 'High Priority', type: 1, color: 'red' },
              { id: 302, name: 'Important', type: 2, color: 'green' },
            ],
            date: dayjs('10-12-2019', 'MM-DD-YYYY'),
            comments: [],
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            members: [
              {
                id: 501,
                name: 'Johnson',
                image: '/assets/images/avatar/A23.jpg',
              },
              {
                id: 505,
                name: 'Andy Caddick',
                image: '/assets/images/avatar/A27.jpg',
              },
            ],
            checkedList: [
              { id: 2001, title: 'Call Adam to check the latest development' },
              { id: 2002, title: 'Meet Roman for further discussion.' },
            ],
          },
          {
            id: 4002,
            title: 'Fix meeting with John',
            attachments: [
              {
                id: 4353435,
                file: {
                  path: 'narayan.jpg',
                  name: 'narayan.jpg',
                  lastModified: 1579117694999,
                  lastModifiedDate:
                    'Thu Jan 16 2020 01:18:14 GMT+0530 (India Standard Time)',
                },
                preview: '/assets/images/avatar/A15.jpg',
              },
            ],
            label: [
              { id: 303, name: 'Crema', type: 3, color: '#0A8FDC' },
              {
                id: 304,
                name: 'Work Place',
                type: 4,
                color: 'rgb(229, 231, 235)',
              },
            ],
            date: dayjs('10-13-2019', 'MM-DD-YYYY'),
            comments: [],
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            members: [
              {
                id: 502,
                name: 'Joe Root',
                image: '/assets/images/avatar/A24.jpg',
              },
            ],
            checkedList: [
              { id: 2003, title: 'Meet Roman for further discussion.' },
              { id: 2004, title: 'Call Adam to check the latest development' },
              { id: 2005, title: 'Select Restaurant for meeting.' },
            ],
          },
          {
            id: 4003,
            title: 'Call the client to ask for payment',
            attachments: [],
            label: [
              { id: 302, name: 'Important', type: 2, color: 'green' },
              {
                id: 304,
                name: 'Work Place',
                type: 4,
                color: 'rgb(229, 231, 235)',
              },
            ],
            date: dayjs('10-14-2019', 'MM-DD-YYYY'),
            comments: [],
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            members: [
              {
                id: 504,
                name: 'Darren Gough',
                image: '/assets/images/avatar/A26.jpg',
              },
              {
                id: 503,
                name: 'Monty Panesar',
                image: '/assets/images/avatar/A25.jpg',
              },
            ],
            checkedList: [
              { id: 2006, title: 'Meet Roman for further discussion.' },
              { id: 2007, title: 'Call Adam to check the latest development' },
              { id: 2008, title: 'Select Restaurant for meeting.' },
            ],
          },
        ],
      },
      {
        id: 3002,
        name: 'Complete',
        cards: [
          {
            id: 5001,
            title: 'Call Adam to review the Crema ThemeProvider documentation',
            attachments: [],
            label: [
              { id: 303, name: 'Crema', type: 3, color: '#0A8FDC' },
              { id: 301, name: 'High Priority', type: 1, color: 'red' },
            ],
            date: dayjs('10-16-2019', 'MM-DD-YYYY'),
            comments: [],
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            members: [
              {
                id: 505,
                name: 'Andy Caddick',
                image: '/assets/images/avatar/A27.jpg',
              },
            ],
            checkedList: [
              { id: 2009, title: 'Meet Roman for further discussion.' },
              { id: 2010, title: 'Call Adam to check the latest development' },
              { id: 2011, title: 'Select Restaurant for meeting.' },
            ],
          },
          {
            id: 5002,
            title: 'Call the corporate office for fixing the meeting',
            attachments: [],
            label: [{ id: 303, name: 'Crema', type: 3, color: '#0A8FDC' }],
            date: dayjs('10-17-2019', 'MM-DD-YYYY'),
            comments: [],
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            members: [
              {
                id: 503,
                name: 'Monty Panesar',
                image: '/assets/images/avatar/A25.jpg',
              },
              {
                id: 506,
                name: 'Marcus Vaughan',
                image: '/assets/images/avatar/A28.jpg',
              },
            ],
            checkedList: [
              { id: 2012, title: 'Meet Roman for further discussion.' },
              { id: 2013, title: 'Call Adam to check the latest development' },
              { id: 2014, title: 'Select Restaurant for meeting.' },
            ],
          },
          {
            id: 5003,
            title: 'Visit the HR department for issuing a notice',
            attachments: [],
            label: [
              { id: 302, name: 'Important', type: 2, color: 'green' },
              {
                id: 304,
                name: 'Work Place',
                type: 4,
                color: 'rgb(229, 231, 235)',
              },
            ],
            date: dayjs('10-18-2019', 'MM-DD-YYYY'),
            comments: [],
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            members: [
              {
                id: 506,
                name: 'Marcus Vaughan',
                image: '/assets/images/avatar/A28.jpg',
              },
            ],
            checkedList: [
              { id: 2015, title: 'Meet Roman for further discussion.' },
              { id: 2016, title: 'Call Adam to check the latest development' },
              { id: 2017, title: 'Select Restaurant for meeting.' },
            ],
          },
          {
            id: 5004,
            title: 'Schedule the interview for React Js developer',
            attachments: [],
            label: [
              { id: 301, name: 'High Priority', type: 1, color: 'red' },
              {
                id: 304,
                name: 'Work Place',
                type: 4,
                color: 'rgb(229, 231, 235)',
              },
            ],
            date: dayjs('10-19-2019', 'MM-DD-YYYY'),
            comments: [],
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            members: [
              {
                id: 502,
                name: 'Joe Root',
                image: '/assets/images/avatar/A24.jpg',
              },
              {
                id: 504,
                name: 'Darren Gough',
                image: '/assets/images/avatar/A26.jpg',
              },
            ],
            checkedList: [
              { id: 2018, title: 'Meet Roman for further discussion.' },
              { id: 2019, title: 'Call Adam to check the latest development' },
              { id: 2020, title: 'Select Restaurant for meeting.' },
            ],
          },
        ],
      },
      {
        id: 3003,
        name: 'Pending',
        cards: [
          {
            id: 6001,
            title: 'Organize party for new joinees',
            attachments: [],
            label: [
              { id: 302, name: 'Important', type: 2, color: 'green' },
              { id: 303, name: 'Crema', type: 3, color: '#0A8FDC' },
            ],
            date: dayjs('10-18-2019', 'MM-DD-YYYY'),
            comments: [],
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            members: [
              {
                id: 501,
                name: 'Johnson',
                image: '/assets/images/avatar/A23.jpg',
              },
              {
                id: 505,
                name: 'Andy Caddick',
                image: '/assets/images/avatar/A27.jpg',
              },
            ],
            checkedList: [
              { id: 2021, title: 'Meet Roman for further discussion.' },
              { id: 2022, title: 'Call Adam to check the latest development' },
              { id: 2023, title: 'Select Restaurant for meeting.' },
            ],
          },
          {
            id: 6002,
            title: 'Call John to discuss the production report',
            attachments: [],
            label: [
              { id: 301, name: 'High Priority', type: 1, color: 'red' },
              { id: 303, name: 'Crema', type: 3, color: '#0A8FDC' },
            ],
            date: dayjs('10-19-2019', 'MM-DD-YYYY'),
            comments: [],
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            members: [
              {
                id: 502,
                name: 'Joe Root',
                image: '/assets/images/avatar/A24.jpg',
              },
              {
                id: 503,
                name: 'Monty Panesar',
                image: '/assets/images/avatar/A25.jpg',
              },
            ],
            checkedList: [
              { id: 2024, title: 'Meet Roman for further discussion.' },
              { id: 2025, title: 'Call Adam to check the latest development' },
              { id: 2026, title: 'Select Restaurant for meeting.' },
            ],
          },
          {
            id: 6003,
            title: 'Go to town for purchasing purpose',
            attachments: [
              {
                id: 434543435,
                file: {
                  path: 'dashboard crypto.jpg',
                  name: 'dashboard crypto.jpg',
                  lastModified: 1579117694243,
                  lastModifiedDate:
                    'Thu Jan 16 2020 01:18:14 GMT+0530 (India Standard Time)',
                },
                preview: '/assets/images/avatar/A1.jpg',
              },
            ],
            label: [
              { id: 302, name: 'Important', type: 2, color: 'green' },
              {
                id: 304,
                name: 'Work Place',
                type: 4,
                color: 'rgb(229, 231, 235)',
              },
            ],
            date: dayjs('10-20-2019', 'MM-DD-YYYY'),
            comments: [],
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            members: [
              {
                id: 504,
                name: 'Darren Gough',
                image: '/assets/images/avatar/A26.jpg',
              },
            ],
            checkedList: [
              { id: 2027, title: 'Meet Roman for further discussion.' },
              { id: 2028, title: 'Call Adam to check the latest development' },
              { id: 2029, title: 'Select Restaurant for meeting.' },
            ],
          },
        ],
      },
    ],
  },
];
export default boardList;
