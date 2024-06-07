import React, { useState } from 'react';
import StatGraphs from './StatGraphs';
import PropTypes from 'prop-types';
import AppSelect from '@crema/components/AppSelect';
import IntlMessages from '@crema/helpers/IntlMessages';
import {
  StyledStatisticsContent,
  StyledStatisticsHeader,
  StyledStatisticsHeaderAction,
  StyledStatisticTab,
} from '../index.styled';
import { useIntl } from 'react-intl';

const GraphTabs = (props) => {
  const { clientsData, incomeData, projectData } = props;

  const [value, setValue] = useState(0);

  const [projectGraphData, setProjectGraphData] = useState(projectData);
  const [clientsGraphData, setClientsGraphData] = useState(clientsData);
  const [incomeGraphData, setIncomeGraphData] = useState(incomeData);
  const { messages } = useIntl();

  const onSetGraphValue = (data) => {
    switch (value) {
      case 0: {
        setProjectGraphData(data);
        break;
      }
      case 1: {
        setClientsGraphData(data);
        break;
      }
      case 2: {
        setIncomeGraphData(data);
        break;
      }
      default:
        return null;
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleYearChange = (value) => {
    switch (value) {
      case 2017:
        onSetGraphValue(incomeData);
        break;
      case 2018:
        onSetGraphValue(clientsData);
        break;
      case 2021:
        onSetGraphValue(projectData);
        break;
      default:
        onSetGraphValue(projectData);
    }
  };

  const handleMonthChange = (value) => {
    switch (value) {
      case 'June':
        onSetGraphValue(incomeData);
        break;
      case 'July':
        onSetGraphValue(clientsData);
        break;
      case 'August':
        onSetGraphValue(projectData);
        break;
      default:
        onSetGraphValue(projectData);
    }
  };
  const items = [
    {
      label: messages['dashboard.project'],
      key: '1',
      children: <StatGraphs data={projectGraphData} />,
    }, // remember to pass the key prop
    {
      label: messages['dashboard.newClients'],
      key: '2',
      children: <StatGraphs data={clientsGraphData} />,
    },
    {
      label: messages['dashboard.income'],
      key: '3',
      children: <StatGraphs data={incomeGraphData} />,
    },
  ];
  return (
    <StyledStatisticsContent>
      <StyledStatisticsHeader>
        <h3>
          <IntlMessages id='dashboard.statistics' />
        </h3>

        <StyledStatisticsHeaderAction>
          <AppSelect
            menus={[2021, 2018, 2017]}
            defaultValue={2021}
            onChange={handleYearChange}
          />
          <AppSelect
            menus={['June', 'July', 'August']}
            defaultValue='June'
            onChange={handleMonthChange}
          />
        </StyledStatisticsHeaderAction>
      </StyledStatisticsHeader>
      <StyledStatisticTab
        defaultActiveKey='1'
        onChange={handleChange}
        items={items}
      />
    </StyledStatisticsContent>
  );
};

export default GraphTabs;

GraphTabs.defaultProps = {
  clientsData: [],
  incomeData: [],
  projectData: [],
};

GraphTabs.propTypes = {
  clientsData: PropTypes.array,
  incomeData: PropTypes.array,
  projectData: PropTypes.array,
};
