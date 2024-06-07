import { useState } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import {
  StyledProductFav,
  StyledProductImageSlide,
  StyledProductImageSlideAction,
  StyledProductImageSlideRoot,
} from "./index.styled";
import { postDataApi } from "@crema/hooks/APIHooks";
import { useInfoViewActionsContext } from "@crema/context/AppContextProvider/InfoViewContextProvider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MediaSlider = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        "& .slick-slider": {
          pb: 5,
        },
        "& .slick-track": {
          display: "flex",
          "& .slick-slide": {
            height: "500px",
            "& > div": {
              height: "100%",
            },
          },
        },
        "& .slick-slide img": {
          display: "inline-block",
        },
        "& .slick-dots": {
          bottom: 0,
          // display: 'flex !important',
          // justifyContent: 'center',
          // alignItems: 'center',
          // listStyle: 'none',
          // gap: '10px',

          "& li": {
            width: 10,
            height: 10,
            "& button": {
              width: 10,
              height: 10,
              padding: 0,
              // borderRadius: '50%',
              // backgroundColor: (theme) =>
              //   lighten(theme.palette.common.black, 0.5),
              // color: (theme) => lighten(theme.palette.common.black, 0.5),
              // overflow: 'hidden',
            },
            "& button:before": {
              fontSize: 0,
              // backgroundColor: (theme) =>
              //   lighten(theme.palette.common.black, 0.5),
              width: 10,
              height: 10,
              borderRadius: "50%",
            },
          },
        },
      }}
    >
      {children}
    </div>
  );
};
const ProductImageSlide = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const infoViewActionsContext = useInfoViewActionsContext();
  const navigate = useNavigate();
  // const slides = product.image.map((data, index) => (
  //   <img key={index} src={data.src} alt="" />
  // ));
  // const onChange = (value) => {
  //   setValue(value);
  // };

  const onAddToCard = () => {
    postDataApi("/api/cart/add", infoViewActionsContext, {
      product,
    })
      .then(() => {
        infoViewActionsContext.showMessage(
          `${product.title} added to cart successfully`,
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };
  const onButNowToCard = () => {
    postDataApi("/api/cart/add", infoViewActionsContext, {
      product,
    })
      .then(() => {
        navigate("/apps/ecommerce/cart");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const OnFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <StyledProductImageSlide>
      <StyledProductImageSlideRoot>
        <MediaSlider>
          <div
            style={{
              height: "auto",
              marginBottom: 20,
              width: "100%",
              overflow: "hidden",
            }}
          >
            <Slider {...settings}>
              {product.image.map((item, index) => (
                <div
                  key={index}
                  style={{
                    padding: 3,
                    height: "100%",
                    width: "100%",

                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    maxHeight: "500px",
                    // objectFit: "contain",
                  }}
                >
                  <img
                    src={item.src}
                    alt="watch"
                    // width={191}
                    // height={259}
                    // sizes='100vh'
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      // height: "100%",
                      maxHeight: "300px",
                    }}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </MediaSlider>
        <StyledProductFav onClick={OnFavorite}>
          {isFavorite ? <HeartFilled /> : <HeartOutlined />}
        </StyledProductFav>
      </StyledProductImageSlideRoot>
      <StyledProductImageSlideAction>
        <Button
          type="primary"
          onClick={onAddToCard}
          style={{ marginRight: 20, width: 140 }}
        >
          Add to cart
        </Button>
        <Button
          style={{ width: 140 }}
          className="btn-secondary"
          onClick={onButNowToCard}
        >
          Buy now
        </Button>
      </StyledProductImageSlideAction>
    </StyledProductImageSlide>
  );
};

export default ProductImageSlide;

ProductImageSlide.propTypes = {
  product: PropTypes.object,
};
