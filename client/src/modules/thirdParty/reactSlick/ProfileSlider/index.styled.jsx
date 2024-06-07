import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledProfilePic = styled.div`
  position: relative;
  border: 2px solid ${({ theme }) => rgba(theme.palette.primary.main, 0.7)};
  padding: 4px;
  border-radius: 50%;
  margin-top: 10px;
  margin-bottom: 10px;

  & .avatar-pic {
    height: 84px;
    width: 84px;
  }
`;

export const StyledMediaSliderWrapper = styled.div`
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  border-radius: 20px;
  padding-top: 40px;
  padding-bottom: 40px;

  & .slick-slider {
    padding-bottom: 20px;
  }
  & .slick-slide img {
    display: inline-block;
  }
  & .slick-dots li {
    width: 10px;
    height: 10px;

    & button {
      width: 10px;
      height: 10px;
      padding: 0;

      &::before {
        font-size: 0;
        background-color: ${({ theme }) => theme.palette.primary.main};
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }
    }
  }
`;

export const StyledProfileItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledProfileName = styled.h5`
  margin-bottom: 4px;
`;
export const StyledProfileDesig = styled.div`
  margin-bottom: 32px;
  font-size: 12px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledProfileContainer = styled.div`
  display: flex;
  align-items: column;
  text-align: center;
`;
export const StyledProfileSecondary = styled.p`
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledProfileBox = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.palette.gray[200]};
  margin: 0;
`;

export const StyledProfileDetailWrapper = styled.div`
  margin: 0;
  padding: 14px 8px;
  width: 50%;
  border-right: 1px solid ${({ theme }) => theme.palette.gray[200]};
`;
