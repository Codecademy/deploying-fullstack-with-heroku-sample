import AppCard from '@crema/components/AppCard';
import AppIconButton from '@crema/components/AppIconButton';
import styled from 'styled-components';

export const StyledWhatHappenCard = styled(AppCard)`
  margin-bottom: 32px;
`;

export const StyledWhatsHappenItem = styled.div`
  display: flex;
  padding: 8px 20px;
  position: relative;
`;

export const StyledWhatsHappenThumb = styled.div`
  border-radius: ${({ theme }) => theme.sizes.borderRadius.base};
  overflow: hidden;
  width: 56px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const StyledWhatsHappenItemContent = styled.div`
  padding-left: 14px;
  width: calc(100% - 98px);

  [dir='rtl'] & {
    padding-left: 0;
    padding-right: 14px;
  }
`;

export const StyledWhatsHappenSubTitle = styled.p`
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  margin-bottom: 2px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledWhatsHappenTitle = styled.h3`
  font-weight: ${({ theme }) => theme.font.weight.medium};
  margin-bottom: 4px;
  font-size: ${({ theme }) => theme.font.size.base};
`;

export const StyledWhatsHappenSpecialText = styled.p`
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size.sm};
  margin-bottom: 0;

  & span {
    margin-right: 4px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 4px;
    }
  }
`;

export const StyledWhatsHappenAction = styled.div`
  margin-left: 8px;
  width: 34px;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 8px;
  }
`;

export const StyledWhatsHappenBtn = styled(AppIconButton)`
  padding: 5px;
  margin-top: -6px;
  margin-right: -12px;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: -12px;
  }
`;
