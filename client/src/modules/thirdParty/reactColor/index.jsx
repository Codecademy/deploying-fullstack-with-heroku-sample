import React from 'react';
import {
  AlphaPicker,
  BlockPicker,
  ChromePicker,
  CirclePicker,
  CompactPicker,
  GithubPicker,
  HuePicker,
  MaterialPicker,
  PhotoshopPicker,
  SketchPicker,
  SwatchesPicker,
  TwitterPicker,
} from 'react-color';

import Basic from './Basic';
import BasicSource from './Basic?raw';
import BasicToggle from './BasicToggle';
import BasicToggleSource from './BasicToggle?raw';
import BasicPositioning from './BasicPositioning';
import BasicPositioningSource from './BasicPositioning?raw';
import CustomPicker from './CustomPicker';
import CustomPickerSource from './CustomPicker?raw';
import CustomPointer from './CustomPointer';
import CustomPointerSource from './CustomPointer?raw';
import AppComponentCard from '@crema/components/AppComponentCard';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppRowSimpleContainer from '@crema/components/AppRowContainer/AppRowSimpleContainer';
import { Col } from 'antd';

const ColorPicker = () => {
  return (
    <>
      <AppComponentHeader
        title='React Color'
        description='13 Different Pickers - Sketch, Photoshop, Chrome and many more, Use the building block components to make your own '
        refUrl='http://casesandberg.github.io/react-color/'
      />

      <AppRowSimpleContainer>
        <Col xs={24} xl={12} key='reactColor-a'>
          <AppComponentCard title='Alpha Picker' component={AlphaPicker} />
        </Col>
        <Col xs={24} xl={12} key='reactColor-b'>
          <AppComponentCard title='Hue Picker' component={HuePicker} />
        </Col>
        <Col xs={24} xl={12} key='reactColor-c'>
          <AppComponentCard title='Circle Picker' component={CirclePicker} />
        </Col>
        <Col xs={24} xl={12} key='reactColor-d'>
          <AppComponentCard title='Compact Picker' component={CompactPicker} />
        </Col>
        <Col xs={24} xl={12} key='reactColor-e'>
          <AppComponentCard title='Block Picker' component={BlockPicker} />
        </Col>
        <Col xs={24} xl={12} key='reactColor-f'>
          <AppComponentCard title='Chrome Picker' component={ChromePicker} />
        </Col>
        <Col xs={24} xl={12} key='reactColor-g'>
          <AppComponentCard title='Github Picker' component={GithubPicker} />
        </Col>
        <Col xs={24} xl={12} key='reactColor-h'>
          <AppComponentCard title='Twitter Picker' component={TwitterPicker} />
        </Col>
        <Col xs={24} xl={12} key='reactColor-j'>
          <AppComponentCard title='Sketch Picker' component={SketchPicker} />
        </Col>
        <Col xs={24} xl={12} key='reactColor-k'>
          <AppComponentCard
            title='Material Picker'
            component={MaterialPicker}
          />
        </Col>
        <Col xs={24} xl={12} key='reactColor-l'>
          <AppComponentCard
            title='Basic Picker'
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} xl={12} key='reactColor-m'>
          <AppComponentCard
            title='BasicToggle Picker'
            component={BasicToggle}
            source={BasicToggleSource}
          />
        </Col>
        <Col xs={24} xl={12} key='reactColor-n'>
          <AppComponentCard
            title='Custom Picker'
            component={CustomPicker}
            source={CustomPickerSource}
          />
        </Col>
        <Col xs={24} xl={12} key='reactColor-o'>
          <AppComponentCard
            title='CustomPointer Picker'
            component={CustomPointer}
            source={CustomPointerSource}
          />
        </Col>
        <Col xs={24} xl={12} key='reactColor-p'>
          <AppComponentCard
            title='BasicPositioning'
            component={BasicPositioning}
            source={BasicPositioningSource}
          />
        </Col>
        <Col xs={24} xl={12} key='reactColor-q'>
          <AppComponentCard
            title='Photoshop Picker'
            component={PhotoshopPicker}
          />
        </Col>
        <Col xs={24} xl={12} key='reactColor-r'>
          <AppComponentCard
            title='Swatches Picker'
            component={SwatchesPicker}
          />
        </Col>
      </AppRowSimpleContainer>
    </>
  );
};

export default ColorPicker;
