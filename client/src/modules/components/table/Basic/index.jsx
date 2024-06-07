import { Col } from "antd";
import AppComponentCard from "@crema/components/AppComponentCard";
import AppComponentHeader from "@crema/components/AppComponentHeader";
import AppRowContainer from "@crema/components/AppRowContainer/AppRowSimpleContainer";

import Simple from "./Simple";
import SimpleSource from "./Simple?raw";
import Selection from "./Selection";
import SelectionSource from "./Selection?raw";
import Size from "./Size";
import SizeSource from "./Size?raw";
import Title from "./Title";
import TitleSource from "./Title?raw";
import ColRowSpan from "./ColRowSpan";
import ColRowSpanSource from "./ColRowSpan?raw";
import JsxStyleApi from "./JsxStyleApi";
import JsxStyleApiSource from "./JsxStyleApi?raw";
import FilerAndSorter from "./FilerAndSorter";
import FilerAndSorterSource from "./FilerAndSorter?raw";
import FilterInTree from "./FilterInTree";
import FilterInTreeSource from "./FilterInTree?raw";
import MultipleSorter from "./MultipleSorter";
import MultipleSorterSource from "./MultipleSorter?raw";
import PaginationSettings from "./PaginationSettings";
import PaginationSettingsSource from "./PaginationSettings?raw";

const BasicTable = () => {
  return (
    <>
      <AppComponentHeader
        title="Table"
        refUrl="https://ant.design/components/table/"
      />
      <AppRowContainer>
        <Col span={24} key="basic-a">
          <AppComponentCard
            title="Basic Usage"
            description="Simple table with actions."
            component={Simple}
            source={SimpleSource}
          />
        </Col>
        <Col span={24} key="basic-b">
          <AppComponentCard
            title="Selection"
            description="Rows can be selectable by making first column as a selectable column."
            component={Selection}
            source={SelectionSource}
          />
        </Col>
        <Col span={24} key="basic-c">
          <AppComponentCard
            title="Size"
            description="There are two compacted table sizes."
            component={Size}
            source={SizeSource}
          />
        </Col>
        <Col span={24} key="basic-d">
          <AppComponentCard
            title="Title"
            description="Add border, title and footer for table."
            component={Title}
            source={TitleSource}
          />
        </Col>
        <Col span={24} key="basic-e">
          <AppComponentCard
            title="ColRow Span"
            description="Table column title supports colSpan that set in column."
            component={ColRowSpan}
            source={ColRowSpanSource}
          />
        </Col>
        <Col span={24} key="basic-f">
          <AppComponentCard
            title="JSX Style API"
            description="Using JSX style API (introduced in 2.5.0)"
            component={JsxStyleApi}
            source={JsxStyleApiSource}
          />
        </Col>
        <Col span={24} key="basic-g">
          <AppComponentCard
            title="Filer And Sorter"
            component={FilerAndSorter}
            description="Use filters to generate filter menu in columns, onFilter to determine filtered result, and filterMultiple to indicate whether its multiple or single selection."
            source={FilerAndSorterSource}
          />
        </Col>
        <Col span={24} key="basic-h">
          <AppComponentCard
            title="Filter In Tree"
            description="You can use filterMode to change default filter interface, options: menu(default) and tree."
            component={FilterInTree}
            source={FilterInTreeSource}
          />
        </Col>
        <Col span={24} key="basic-i">
          <AppComponentCard
            title="Multiple Sorter"
            description="column.sorter support multiple to config the priority of sort columns. Though sorter.compare to customize compare function. You can also leave it empty to use the interactive only."
            component={MultipleSorter}
            source={MultipleSorterSource}
          />
        </Col>
        <Col span={24} key="data-k">
          <AppComponentCard
            title="Pagination Settings"
            description="Table pagination settings."
            component={PaginationSettings}
            source={PaginationSettingsSource}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default BasicTable;
