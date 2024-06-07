import { Button, TimePicker } from 'antd';
import React, { useState } from 'react';

const Addon = () => {
  const [open, setOpen] = useState(false);
  return (
    <TimePicker
      open={open}
      onOpenChange={setOpen}
      renderExtraFooter={() => (
        <Button size='small' type='primary' onClick={() => setOpen(false)}>
          OK
        </Button>
      )}
    />
  );
};
export default Addon;
