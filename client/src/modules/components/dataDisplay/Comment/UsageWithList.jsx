import { Comment } from '@ant-design/compatible';
import { List, Tooltip } from 'antd';
import dayjs from 'dayjs';
import React from 'react';

const data = [
  {
    actions: [<span key='comment-list-reply-to-0'>Reply to</span>],
    author: 'Han Solo',
    avatar: 'https://joeschmoe.io/api/v1/random',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high
        quality design resources (Sketch and Axure), to help people create their
        product prototypes beautifully and efficiently.
      </p>
    ),
    datetime: (
      <Tooltip
        title={dayjs().subtract(1, 'days').format('MMM DD,YYYY HH:mm:ss')}
      >
        <span>{dayjs().subtract(1, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
  {
    actions: [<span key='comment-list-reply-to-0'>Reply to</span>],
    author: 'Han Solo',
    avatar: 'https://joeschmoe.io/api/v1/random',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high
        quality design resources (Sketch and Axure), to help people create their
        product prototypes beautifully and efficiently.
      </p>
    ),
    datetime: (
      <Tooltip
        title={dayjs().subtract(2, 'days').format('MMM DD,YYYY HH:mm:ss')}
      >
        <span>{dayjs().subtract(2, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
];

const UsageWithList = () => {
  return (
    <List
      className='comment-list'
      header={`${data.length} replies`}
      itemLayout='horizontal'
      dataSource={data}
      renderItem={(item) => (
        <li>
          <Comment
            actions={item.actions}
            author={item.author}
            avatar={item.avatar}
            content={item.content}
            datetime={item.datetime}
          />
        </li>
      )}
    />
  );
};

export default UsageWithList;
