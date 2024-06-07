import { useState } from "react";
import { Button } from "antd";
import { Highlight } from "prism-react-renderer";
import PropTypes from "prop-types";
import { highlightTheme } from "./highlightTheme";
import AppScrollbar from "../AppScrollbar";
import Expand from "../AppAnimate/Expand";
import {
  StyledCompCard,
  StyledCompCardTitleDesc,
  StyledComponentRoot,
  StyledHiOutlineCode,
  StyledPreTag,
} from "./index.styled";

const ComponentCardWithoutAnim = ({
  title,
  description,
  className,
  maxHeight,
  component: Component,
  source,
}) => {
  const [viewSource, setToggleViewSource] = useState(false);
  return (
    <StyledCompCard
      className={className}
      title={
        <>
          <span>{title}</span>
          <StyledCompCardTitleDesc className="text-truncate">
            {description}
          </StyledCompCardTitleDesc>
        </>
      }
      extra={
        source ? (
          <Button
            aria-label="view code"
            shape="circle"
            onClick={() => setToggleViewSource(!viewSource)}
          >
            <StyledHiOutlineCode />
          </Button>
        ) : null
      }
    >
      <Expand open={viewSource}>
        {source ? (
          <AppScrollbar
            style={{
              borderRadius: 8,
              background: "#333333",
              height: 350,
              maxHeight: 400,
            }}
          >
            <Highlight code={source} language="jsx" theme={highlightTheme}>
              {({ style, tokens, getLineProps, getTokenProps }) => (
                <StyledPreTag style={{ ...style, maxHeight: 500 }}>
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span key={i} {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </StyledPreTag>
              )}
            </Highlight>
          </AppScrollbar>
        ) : null}
      </Expand>
      <AppScrollbar style={{ maxHeight: maxHeight, position: "relative" }}>
        <StyledComponentRoot>
          <Component />
        </StyledComponentRoot>
      </AppScrollbar>
    </StyledCompCard>
  );
};

export default ComponentCardWithoutAnim;

ComponentCardWithoutAnim.defaultProps = {
  description: "",
  maxHeight: 500,
};

ComponentCardWithoutAnim.propTypes = {
  component: PropTypes.any.isRequired,
  source: PropTypes.node,
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  maxHeight: PropTypes.number,
  className: PropTypes.string,
  size: PropTypes.number,
};
