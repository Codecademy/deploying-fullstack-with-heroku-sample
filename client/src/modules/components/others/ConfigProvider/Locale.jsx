import {
  Button,
  Calendar,
  ConfigProvider,
  DatePicker,
  Modal,
  Pagination,
  Popconfirm,
  Radio,
  Select,
  Table,
  TimePicker,
  Transfer,
} from 'antd';
import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';
import dayjs from 'dayjs';
import 'moment/locale/zh-cn';
import React from 'react';

dayjs.locale('en');

const { Option } = Select;
const { RangePicker } = DatePicker;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'filter1',
        value: 'filter1',
      },
    ],
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
];

class Page extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  hideModal = () => {
    this.setState({ visible: false });
  };

  render() {
    const info = () => {
      Modal.info({
        title: 'some info',
        content: 'some info',
      });
    };
    const confirm = () => {
      Modal.confirm({
        title: 'some info',
        content: 'some info',
      });
    };
    return (
      <div className='locale-components'>
        <div className='example'>
          <Pagination defaultCurrent={1} total={50} showSizeChanger />
        </div>
        <div className='example'>
          <Select showSearch style={{ width: 200 }}>
            <Option value='jack'>jack</Option>
            <Option value='lucy'>lucy</Option>
          </Select>
          <DatePicker />
          <TimePicker />
          <RangePicker style={{ width: 200 }} />
        </div>
        <div className='example'>
          <Button type='primary' onClick={this.showModal}>
            Show Modal
          </Button>
          <Button onClick={info}>Show info</Button>
          <Button onClick={confirm}>Show confirm</Button>
          <Popconfirm title='Question?'>
            <a href='#'>Click to confirm</a>
          </Popconfirm>
        </div>
        <div className='example'>
          <Transfer
            dataSource={[]}
            showSearch
            targetKeys={[]}
            render={(item) => item.title}
          />
        </div>
        <div className='site-config-provider-calendar-wrapper'>
          <Calendar fullscreen={false} value={dayjs()} />
        </div>
        <div className='example'>
          <Table dataSource={[]} columns={columns} />
        </div>
        <Modal
          title='Locale Modal'
          open={this.state.visible}
          onCancel={this.hideModal}
        >
          <p>Locale Modal</p>
        </Modal>
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      locale: enUS,
    };
  }

  changeLocale = (e) => {
    const localeValue = e.target.value;
    this.setState({ locale: localeValue });
    if (!localeValue) {
      dayjs.locale('en');
    } else {
      dayjs.locale('zh-cn');
    }
  };

  render() {
    const { locale } = this.state;
    return (
      <div>
        <div className='change-locale'>
          <span style={{ marginRight: 16 }}>Change locale of components: </span>
          <Radio.Group value={locale} onChange={this.changeLocale}>
            <Radio.Button key='en' value={enUS}>
              English
            </Radio.Button>
            <Radio.Button key='cn' value={zhCN}>
              中文
            </Radio.Button>
          </Radio.Group>
        </div>
        <ConfigProvider locale={locale}>
          <Page
            key={
              locale
                ? locale.locale
                : 'en' /* Have to refresh for production environment */
            }
          />
        </ConfigProvider>
      </div>
    );
  }
}

const Locale = () => {
  return <App />;
};

export default Locale;
