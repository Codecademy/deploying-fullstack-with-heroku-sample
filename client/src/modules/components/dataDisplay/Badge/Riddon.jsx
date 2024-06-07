import { Badge, Card } from 'antd';

import React from 'react';

const Riddon = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Badge.Ribbon text='Hippies'>
        <Card title='Pushes open the window' size='small'>
          and raises the spyglass.
        </Card>
      </Badge.Ribbon>
      <Badge.Ribbon text='Hippies' color='pink'>
        <Card title='Pushes open the window' size='small'>
          and raises the spyglass.
        </Card>
      </Badge.Ribbon>
      <Badge.Ribbon text='Hippies' color='red'>
        <Card title='Pushes open the window' size='small'>
          and raises the spyglass.
        </Card>
      </Badge.Ribbon>
      <Badge.Ribbon text='Hippies' color='cyan'>
        <Card title='Pushes open the window' size='small'>
          and raises the spyglass.
        </Card>
      </Badge.Ribbon>
      <Badge.Ribbon text='Hippies' color='green'>
        <Card title='Pushes open the window' size='small'>
          and raises the spyglass.
        </Card>
      </Badge.Ribbon>
      <Badge.Ribbon text='Hippies' color='purple'>
        <Card title='Pushes open the window' size='small'>
          and raises the spyglass.
        </Card>
      </Badge.Ribbon>
      <Badge.Ribbon text='Hippies' color='volcano'>
        <Card title='Pushes open the window' size='small'>
          and raises the spyglass.
        </Card>
      </Badge.Ribbon>
      <Badge.Ribbon text='Hippies' color='magenta'>
        <Card title='Pushes open the window' size='small'>
          and raises the spyglass.
        </Card>
      </Badge.Ribbon>
    </div>
  );
};

export default Riddon;
