import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Basic from "./Basic";
import BasicSource from "./Basic?raw";
import HorizontalLoginForm from "./HorizontalLoginForm";
import HorizontalLoginFormSource from "./HorizontalLoginForm?raw";
import Registration from "./Registration";
import RegistrationSource from "./Registration?raw";
import AdvancedSearch from "./AdvancedSearch";
import AdvancedSearchSource from "./AdvancedSearch?raw";
import DynamicFormItem from "./DynamicFormItem";
import DynamicFormItemSource from "./DynamicFormItem?raw";
import TimeRelatedControls from "./TimeRelatedControls";
import TimeRelatedControlsSource from "./TimeRelatedControls?raw";
import CustomizedFormControls from "./CustomizedFormControls";
import CustomizedFormControlsSource from "./CustomizedFormControls?raw";
import StoreFormData from "./StoreFormData";
import StoreFormDataSource from "./StoreFormData?raw";
import CustomizedValidation from "./CustomizedValidation";
import CustomizedValidationSource from "./CustomizedValidation?raw";
import CoordinatedControls from "./CoordinatedControls";
import CoordinatedControlsSource from "./CoordinatedControls?raw";
import FormLayout from "./FormLayout";
import FormLayoutSource from "./FormLayout?raw";
import DynamicRules from "./DynamicRules";
import DynamicRulesSource from "./DynamicRules?raw";
import OtherFormControls from "./OtherFormControls";
import OtherFormControlsSource from "./OtherFormControls?raw";
import FormMethods from "./FormMethods";
import FormMethodsSource from "./FormMethods?raw";
import RequiredStyle from "./RequiredStyle";
import RequiredStyleSource from "./RequiredStyle?raw";
import FormSize from "./FormSize";
import FormSizeSource from "./FormSize?raw";
import NoBlockRule from "./NoBlockRule";
import NoBlockRuleSource from "./NoBlockRule?raw";
import ComplexDynamicFormItem from "./ComplexDynamicFormItem";
import ComplexDynamicFormItemSource from "./ComplexDynamicFormItem?raw";
import ComplexFormControl from "./ComplexFormControl";
import ComplexFormControlSource from "./ComplexFormControl?raw";
import InlineLoginForm from "./InlineLoginForm";
import InlineLoginFormSource from "./InlineLoginForm?raw";
import LoginForm from "./LoginForm";
import LoginFormSource from "./LoginForm?raw";
import FormInModalToCreate from "./FormInModalToCreate";
import FormInModalToCreateSource from "./FormInModalToCreate?raw";
import HandleFormDateManually from "./HandleFormDateManually";
import HandleFormDateManuallySource from "./HandleFormDateManually?raw";

const Form = () => {
  return (
    <>
      <AppComponentHeader
        title="Form"
        refUrl="https://ant.design/components/form/"
      />
      <AppRowContainer>
        <Col xs={24} xl={12} key="form-a">
          <AppComponentCard
            title="Basic"
            component={Basic}
            source={BasicSource}
          />
        </Col>
        <Col xs={24} xl={12} key="form-b">
          <AppComponentCard
            title="Horizontal Login Form"
            component={HorizontalLoginForm}
            source={HorizontalLoginFormSource}
          />
        </Col>
        <Col xs={24} xl={12} key="form-c">
          <AppComponentCard
            title="Registration"
            component={Registration}
            source={RegistrationSource}
          />
        </Col>
        <Col xs={24} xl={12} key="form-d">
          <AppComponentCard
            title="Time Related Controls"
            component={TimeRelatedControls}
            source={TimeRelatedControlsSource}
          />
        </Col>
        <Col xs={24} xl={12} key="form-e">
          <AppComponentCard
            title="Dynamic Form Item"
            component={DynamicFormItem}
            source={DynamicFormItemSource}
          />
        </Col>
        <Col xs={24} xl={12} key="form-f">
          <AppComponentCard
            title="Advanced Search"
            component={AdvancedSearch}
            source={AdvancedSearchSource}
          />
        </Col>
        <Col xs={24} xl={12} key="form-g">
          <AppComponentCard
            title="Customized Form Controls"
            component={CustomizedFormControls}
            source={CustomizedFormControlsSource}
          />
        </Col>
        <Col xs={24} xl={12} key="form-h">
          <AppComponentCard
            title="Coordinated Controls"
            component={CoordinatedControls}
            source={CoordinatedControlsSource}
          />
        </Col>
        <Col xs={24} xl={12} key="form-i">
          <AppComponentCard
            title="Form Layout"
            component={FormLayout}
            source={FormLayoutSource}
          />
        </Col>
        <Col xs={24} xl={12} key="form-j">
          <AppComponentCard
            title="Dynamic Rules"
            component={DynamicRules}
            source={DynamicRulesSource}
          />
        </Col>
        <Col span={24} key="form-k">
          <AppComponentCard
            title="Store Form Data"
            component={StoreFormData}
            source={StoreFormDataSource}
          />
        </Col>
        <Col span={24} key="form-l">
          <AppComponentCard
            title="Customized Validation"
            component={CustomizedValidation}
            source={CustomizedValidationSource}
          />
        </Col>
        <Col span={24} key="form-m">
          <AppComponentCard
            title="Other Form Controls"
            component={OtherFormControls}
            source={OtherFormControlsSource}
          />
        </Col>
        <Col span={24} key="form-n">
          <AppComponentCard
            title="Form Methods"
            component={FormMethods}
            source={FormMethodsSource}
          />
        </Col>
        <Col span={24} key="form-o">
          <AppComponentCard
            title="Required Style"
            component={RequiredStyle}
            source={RequiredStyleSource}
          />
        </Col>
        <Col span={24} key="form-p">
          <AppComponentCard
            title="Form Size"
            component={FormSize}
            source={FormSizeSource}
          />
        </Col>
        <Col span={24} key="form-q">
          <AppComponentCard
            title="No Block Rule"
            component={NoBlockRule}
            source={NoBlockRuleSource}
          />
        </Col>
        <Col span={24} key="form-r">
          <AppComponentCard
            title="Complex Dynamic Form Item"
            component={ComplexDynamicFormItem}
            source={ComplexDynamicFormItemSource}
          />
        </Col>
        <Col span={24} key="form-s">
          <AppComponentCard
            title="Complex Form Control"
            component={ComplexFormControl}
            source={ComplexFormControlSource}
          />
        </Col>
        <Col span={24} key="form-t">
          <AppComponentCard
            title="Inline Login Form"
            component={InlineLoginForm}
            source={InlineLoginFormSource}
          />
        </Col>
        <Col span={24} key="form-u">
          <AppComponentCard
            title="LoginForm"
            component={LoginForm}
            source={LoginFormSource}
          />
        </Col>
        <Col span={24} key="form-v">
          <AppComponentCard
            title="FormInModalToCreate"
            component={FormInModalToCreate}
            source={FormInModalToCreateSource}
          />
        </Col>
        <Col span={24} key="form-w">
          <AppComponentCard
            title="HandleFormDateManually"
            component={HandleFormDateManually}
            source={HandleFormDateManuallySource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Form;
