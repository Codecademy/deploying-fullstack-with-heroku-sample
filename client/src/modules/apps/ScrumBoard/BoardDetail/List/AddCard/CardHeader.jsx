import React from 'react';
import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';
import { IoMdAttach } from 'react-icons/io';
import { AiOutlineDelete } from 'react-icons/ai';
import AppIconButton from '@crema/components/AppIconButton';
import {
  StyledScrumBoardCardHeader,
  StyledScrumBoardCardHeaderAction,
} from './index.styled';
import { generateRandomUniqueNumber } from '@crema/helpers/Common';

const CardHeader = (props) => {
  const { onClickDeleteIcon, board, list, onAddAttachments } = props;
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': [],
    },
    onDrop: (acceptedFiles) => {
      const files = acceptedFiles.map((file) => {
        return {
          id: generateRandomUniqueNumber(),
          file,
          preview: URL.createObjectURL(file),
        };
      });
      onAddAttachments(files);
    },
  });

  return (
    <StyledScrumBoardCardHeader>
      <h3 className='text-truncate'>
        {board.name} &gt; {list.name}
      </h3>
      <StyledScrumBoardCardHeaderAction>
        <AppIconButton
          icon={
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <IoMdAttach />
            </div>
          }
        />

        <AppIconButton icon={<AiOutlineDelete />} onClick={onClickDeleteIcon} />
      </StyledScrumBoardCardHeaderAction>
    </StyledScrumBoardCardHeader>
  );
};

export default CardHeader;

CardHeader.propTypes = {
  onClickDeleteIcon: PropTypes.func,
  onAddAttachments: PropTypes.func,
  list: PropTypes.object,
  board: PropTypes.object,
};
