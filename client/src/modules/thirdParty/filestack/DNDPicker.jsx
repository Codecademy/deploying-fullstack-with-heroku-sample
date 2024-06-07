import React from 'react';
import { PickerDropPane } from 'filestack-react';
import { fileStackKey } from '@crema/constants/AppConst';

const DNDPicker = () => {
  return (
    <PickerDropPane
      apikey={fileStackKey}
      onSuccess={(res) => console.log(res)}
      onUploadDone={(res) => console.log(res)}
    />
  );
};

export default DNDPicker;
