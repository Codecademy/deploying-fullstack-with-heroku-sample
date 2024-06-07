import React from "react";
import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import BasicUsage from "./BasicUsage";
import BasicUsageSource from "./BasicUsage?raw";
import ProgressiveLoading from "./ProgressiveLoading";
import ProgressiveLoadingSource from "./ProgressiveLoading?raw";
import PreviewFromOneImage from "./PreviewFromOneImage";
import PreviewFromOneImageSource from "./PreviewFromOneImage?raw";
import FaultTolerant from "./FaultTolerant";
import FaultTolerantSource from "./FaultTolerant?raw";
import MultipleImagePreview from "./MultipleImagePreview";
import MultipleImagePreviewSource from "./MultipleImagePreview?raw";
import CustomPreviewImage from "./CustomPreviewImage";
import CustomPreviewImageSource from "./CustomPreviewImage?raw";

const Image = () => {
  return (
    <>
      <AppComponentHeader
        title="Image"
        refUrl="https://ant.design/components/image/"
      />
      <AppRowContainer>
        <Col xs={24} lg={12} key="image-a">
          <AppComponentCard
            title="Basic Usage"
            description="Click the image to zoom in."
            component={BasicUsage}
            source={BasicUsageSource}
          />
        </Col>
        <Col xs={24} lg={12} key="image-b">
          <AppComponentCard
            title="ProgressiveLoading"
            description="Progressive when large image loading."
            component={ProgressiveLoading}
            source={ProgressiveLoadingSource}
          />
        </Col>

        <Col xs={24} lg={12} key="image-c">
          <AppComponentCard
            title="Fault Tolerant"
            description="Load failed to display image placeholder."
            component={FaultTolerant}
            source={FaultTolerantSource}
          />
        </Col>
        <Col xs={24} lg={12} key="image-d">
          <AppComponentCard
            title="MultipleImagePreview"
            description="Click the left and right switch buttons to preview multiple images."
            component={MultipleImagePreview}
            source={MultipleImagePreviewSource}
          />
        </Col>
        <Col xs={24} lg={12} key="image-e">
          <AppComponentCard
            title="CustomPreviewImage"
            description="You can set different preview image."
            component={CustomPreviewImage}
            source={CustomPreviewImageSource}
          />
        </Col>
        <Col xs={24} lg={12} key="image-f">
          <AppComponentCard
            title="Preview From One Image"
            description="Preview a collection from one image."
            component={PreviewFromOneImage}
            source={PreviewFromOneImageSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Image;
