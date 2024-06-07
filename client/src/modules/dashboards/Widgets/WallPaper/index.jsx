import React from "react";
import IntlMessages from "@crema/helpers/IntlMessages";
import {
  EyeFilled,
  HeartFilled,
  HeartOutlined,
  MessageFilled,
} from "@ant-design/icons";
import {
  StyledWallpaperAvatar,
  StyledWallPaperCard,
  StyledWallpaperContent,
  StyledWallpaperContentAction,
  StyledWallpaperContentActionItem,
  StyledWallpaperContentFooter,
  StyledWallpaperHeader,
  StyledWallpaperHeaderAction,
  StyledWallpaperTitle,
} from "./index.styled";

const WallPaper = () => {
  return (
    <StyledWallPaperCard
      heightFull
      className="background-image"
      style={{
        backgroundImage: "url(/assets/images/widgets/latestpost.png)",
      }}
    >
      <StyledWallpaperHeader>
        <h3 className="text-uppercase">
          <IntlMessages id="dashboard.latestPost" />
        </h3>
        <StyledWallpaperHeaderAction>
          <HeartOutlined />
        </StyledWallpaperHeaderAction>
      </StyledWallpaperHeader>

      <StyledWallpaperContent>
        <StyledWallpaperAvatar src={"/assets/images/avatar/A1.jpg"} />

        <StyledWallpaperTitle>
          <IntlMessages id="dashboard.hdColorful" />
        </StyledWallpaperTitle>
        <StyledWallpaperTitle>
          <IntlMessages id="dashboard.wallpaperFree" />
        </StyledWallpaperTitle>

        <StyledWallpaperContentFooter>
          <StyledWallpaperTitle>
            <IntlMessages id="common.download" />
          </StyledWallpaperTitle>
          <StyledWallpaperContentAction>
            <StyledWallpaperContentActionItem>
              <EyeFilled className="middle-icon" /> 11.7 K
            </StyledWallpaperContentActionItem>
            <StyledWallpaperContentActionItem>
              <HeartFilled className="middle-icon" /> 2.6 K
            </StyledWallpaperContentActionItem>
            <StyledWallpaperContentActionItem>
              <MessageFilled className="middle-icon" /> 345
            </StyledWallpaperContentActionItem>
          </StyledWallpaperContentAction>
        </StyledWallpaperContentFooter>
      </StyledWallpaperContent>
    </StyledWallPaperCard>
  );
};

export default WallPaper;
