import React from 'react';
import { useDropzone } from 'react-dropzone';

const EventPropagation = () => {
  const { getRootProps } = useDropzone({
    // Note how this callback is never invoked if drop occurs on the inner dropzone
    onDrop: (files) => console.log(files),
  });

  return (
    <div className='container'>
      <div {...getRootProps({ className: 'dropzone' })}>
        <InnerDropzone />
        <p>Outer dropzone</p>
      </div>
    </div>
  );
};

const InnerDropzone = () => {
  const { getRootProps } = useDropzone({ noDragEventsBubbling: true });
  return (
    <div {...getRootProps({ className: 'dropzone' })}>
      <p>Inner dropzone</p>
    </div>
  );
};

export default EventPropagation;
