import { useNavigate } from "react-router-dom";
import IntlMessages from "@crema/helpers/IntlMessages";
import AppAnimate from "@crema/components/AppAnimate";
import AppPageMeta from "@crema/components/AppPageMeta";
import Logo from "../../../assets/icon/maintenance.svg";
import {
  StyledErrorButton,
  StyledErrorContainer,
  StyledErrorContent,
  StyledErrorImageLg,
  StyledErrorPara,
} from "../index.styled";

const Maintenance = () => {
  const navigate = useNavigate();

  const onGoBackToHome = () => {
    navigate(-1);
  };

  return (
    <>
      <AppPageMeta title="Maintenance" />
      <AppAnimate animation="transition.slideUpIn" delay={200}>
        <StyledErrorContainer key="a">
          <StyledErrorImageLg>
            <img src={Logo} alt={Logo} />
          </StyledErrorImageLg>
          <StyledErrorContent className="error-content-lg">
            <h3>
              <IntlMessages id="error.mantainanceMessage1" />
            </h3>
            <StyledErrorPara>
              <p className="mb-0">
                <IntlMessages id="error.mantainanceMessage2" />
              </p>
              <p className="mb-0">
                <IntlMessages id="error.mantainanceMessage3" />.
              </p>
            </StyledErrorPara>
            <StyledErrorButton type="primary" onClick={onGoBackToHome}>
              <IntlMessages id="error.takeMeToHome" />
            </StyledErrorButton>
          </StyledErrorContent>
        </StyledErrorContainer>
      </AppAnimate>
    </>
  );
};

export default Maintenance;
