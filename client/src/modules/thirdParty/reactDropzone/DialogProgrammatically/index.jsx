import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from 'antd';
import { StyledContainer, StyledDialogDropzone } from './index.styled';

const DialogProgrammatically = () => {
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <StyledContainer>
      <StyledDialogDropzone {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag n drop some files here</p>
        <Button type='primary' onClick={open}>
          Open File Dialog
        </Button>
      </StyledDialogDropzone>
      <aside>
        <h6>Files</h6>
        <ul>{files}</ul>
      </aside>
    </StyledContainer>
  );
};
export default DialogProgrammatically;
