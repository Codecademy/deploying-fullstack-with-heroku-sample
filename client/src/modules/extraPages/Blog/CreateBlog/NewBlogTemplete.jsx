import dayjs from 'dayjs';

export const CreateNewBlog = (data) => {
  return {
    id: data.id,
    blogDetailHeader: [
      {
        id: 1,
        icon: 'BiUserCircle',
        title: 'John Deuo',
      },
      {
        id: 2,
        icon: 'AiOutlineCalendar',
        title: dayjs().format('DD MMM YYYY'),
      },
      {
        id: 3,
        icon: 'BiCommentDetail',
        title: '0 Comments',
      },
    ],
    cardMediaAction: 'Concept',
    duration: dayjs().format('DD MMM YYYY'),
    blogDetailContent: {
      cardMedia: data?.srcImg || '/assets/images/extra-pages/blog/blog-img.png',
      content: data?.content || '',
      title: data.title,
      description: data.description,
      meta: {
        keywords: data.keywords,
        metadesc: data.metadesc,
        metatitle: data.metatitle,
      },
      tag: data.tag,
      likeCount: 0,
      post: {
        user: '/assets/images/avatar/A12.jpg',
        userName: 'John Deuo',
        userPosition: 'Co-founder',
        description:
          "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    },
    blogComment: [],
  };
};
