import React from 'react';
import { Avatar, List, Skeleton, Switch } from 'antd';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const listData = [];
for (let i = 0; i < 3; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://joeschmoe.io/api/v1/random',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);

class ListIcon extends React.Component {
  state = {
    loading: true,
  };

  onChange = (checked) => {
    this.setState({ loading: !checked });
  };

  render() {
    const { loading } = this.state;

    return (
      <div style={{ width: '100%' }}>
        <Switch checked={!loading} onChange={this.onChange} />

        <List
          itemLayout='vertical'
          size='large'
          dataSource={listData}
          renderItem={(item) => (
            <List.Item
              key={item.title}
              actions={
                !loading && [
                  <IconText
                    icon={StarOutlined}
                    text='156'
                    key='list-vertical-star-o'
                  />,
                  <IconText
                    icon={LikeOutlined}
                    text='156'
                    key='list-vertical-like-o'
                  />,
                  <IconText
                    icon={MessageOutlined}
                    text='2'
                    key='list-vertical-message'
                  />,
                ]
              }
              extra={
                !loading && (
                  <img
                    width={272}
                    alt='logo'
                    src='https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
                  />
                )
              }
            >
              <Skeleton loading={loading} active avatar>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default ListIcon;
IconText.propTypes = {
  icon: PropTypes.any,
  text: PropTypes.any,
};
