import React from 'react';
import { Button, Space } from 'antd';
import { StyledSiteButtonGhostWrapper } from './index.styled';

const Disabled = () => {
  return (
    <Space wrap>
      <Button type='primary'>Primary</Button>
      <Button type='primary' disabled>
        Primary(disabled)
      </Button>
      <br />
      <Button>Default</Button>
      <Button disabled>Default(disabled)</Button>
      <br />
      <Button type='dashed'>Dashed</Button>
      <Button type='dashed' disabled>
        Dashed(disabled)
      </Button>
      <br />
      <Button type='text'>Text</Button>
      <Button type='text' disabled>
        Text(disabled)
      </Button>
      <br />
      <Button type='link'>Link</Button>
      <Button type='link' disabled>
        Link(disabled)
      </Button>
      <br />
      <Button danger>Danger Default</Button>
      <Button danger disabled>
        Danger Default(disabled)
      </Button>
      <br />
      <Button danger type='text'>
        Danger Text
      </Button>
      <Button danger type='text' disabled>
        Danger Text(disabled)
      </Button>
      <br />
      <Button type='link' danger>
        Danger Link
      </Button>
      <Button type='link' danger disabled>
        Danger Link(disabled)
      </Button>
      <StyledSiteButtonGhostWrapper>
        <Button ghost>Ghost</Button>
        <Button ghost disabled>
          Ghost(disabled)
        </Button>
      </StyledSiteButtonGhostWrapper>
    </Space>
  );
};

export default Disabled;
