import React from "react";
import { Col } from "antd";

import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";
import AppComponentCard from "@crema/components/AppComponentCard";
import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import TowToneIcon from "./TowToneIcon";
import TowToneIconSource from "./TowToneIcon?raw";
import CustomIcon from "./CustomIcon";
import CustomIconSource from "./CustomIcon?raw";
import UseIconfont from "./UseIconfont";
import UseIconfontSource from "./UseIconfont?raw";
import MultipleResources from "./MultipleResources";
import MultipleResourcesSource from "./MultipleResources?raw";

const Icon = () => {
  return (
    <>
      <AppComponentHeader
        title="Icon"
        refUrl="https://ant.design/components/icon/"
      />

      <AppRowContainer>
        <Col span={24} lg={12} key="typography-a">
          <AppComponentCard
            title="Basic"
            description="Import icons from @ant-design/icons, component name of icons with different theme is the icon name suffixed by the theme name. Specify the spin property to show spinning animation."
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col span={24} lg={12} key="typography-b">
          <AppComponentCard
            title="Tow Tone Icon And Colorful Icon"
            description="You can set twoToneColor prop to specific primary color for two-tone icons."
            component={TowToneIcon}
            source={TowToneIconSource}
          />
        </Col>
        <Col span={24} lg={12} key="typography-c">
          <AppComponentCard
            title="Custom Icon"
            description="Create a reusable React component by using <Icon component={...} />. The property component takes a React component that renders to svg element."
            component={CustomIcon}
            source={CustomIconSource}
          />
        </Col>
        <Col span={24} lg={12} key="typography-d">
          <AppComponentCard
            title="Use Iconfont.cn"
            description="If you are using iconfont.cn, you can use the icons in your project gracefully."
            component={UseIconfont}
            source={UseIconfontSource}
          />
        </Col>
        <Col span={24} lg={12} key="typography-e">
          <AppComponentCard
            title="Multiple Resources From Iconfont.cn"
            description="You can use scriptUrl as an array after @ant-design/icons@4.1.0, manage icons in one <Icon /> from multiple iconfont.cn resources. If icon with a duplicate name in resources, it will overrided in array order."
            component={MultipleResources}
            source={MultipleResourcesSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};
export default Icon;
