import React from 'react';
import { Divider, Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

const blockContent = `AntV is Ant Financial's next-generation data visualization solution, committed to providing a set of simple, convenient, professional and reliable data visualization best practices. Thanks to the rich business scenarios and user demand challenges, AntV has experienced years of accumulation and continuous polishing, has supported the entire Alibaba Group's 20,000+ business systems inside and outside, and passed the rigorous test of tens of millions of UV products per day.
We are working in various visualization fields such as basic charting, graph analysis, graph editing, geospatial visualization, and intelligent visualization. We welcome fellow travelers to move forward together.`;

const Basic = () => {
  return (
    <Typography>
      <Title>Introduction</Title>
      <Paragraph>
        In the process of internal desktop applications development, many
        different design specs and implementations would be involved, which
        might cause designers and developers difficulties and duplication and
        reduce the efficiency of development.
      </Paragraph>
      <Paragraph>
        After massive project practice and summaries, Ant Design, a design
        language for background applications, is refined by Ant UED Team, which
        aims to
        <Text strong>
          uniform the user interface specs for internal background projects,
          lower the unnecessary cost of design differences and implementation
          and liberate the resources of design and front-end development
        </Text>
        .
      </Paragraph>
      <Title level={2}>Guidelines and Resources</Title>
      <Paragraph>
        We supply a series of design principles, practical patterns and high
        quality design resources (<Text code>Sketch</Text> and{' '}
        <Text code>Axure</Text>), to help people create their product prototypes
        beautifully and efficiently.
      </Paragraph>

      <Paragraph>
        <ul>
          <li>
            <Link href='/docs/spec/proximity'>Principles</Link>
          </li>
          <li>
            <Link href='/docs/spec/overview'>Patterns</Link>
          </li>
          <li>
            <Link href='/docs/resources'>Resource Download</Link>
          </li>
        </ul>
      </Paragraph>

      <Paragraph>
        Press <Text keyboard>Esc</Text> to exit...
      </Paragraph>

      <Divider />

      <Title>Introduction</Title>
      <Paragraph>
        Ant&apos;s enterprise-level products are a huge and complex system. Such
        products are not only huge in magnitude and complex in function, but
        also frequent changes and concurrency, and often require design and
        development to be able to respond quickly. At the same time, there are
        many similar pages and components in such products, and some stable and
        highly reusable content can be obtained through abstraction.
      </Paragraph>
      <Paragraph>
        With the trend of commercialization, more and more enterprise-level
        products have further requirements for better user experience. With such
        an ultimate goal, we (Ant Financial Experience Technology Department)
        have gradually polished a design system that serves enterprise-level
        products after a lot of project practice and summary Ant Design. Based
        on <Text mark> &apos;OK&apos; and &apos;Natural&apos;</Text>
        Design values, through modular solutions to reduce redundant production
        costs, allowing designers to focus on
        <Text strong>Better user experience</Text>.
      </Paragraph>
      <Title level={2}>Design resources</Title>
      <Paragraph>
        We provide comprehensive design principles, best practices and design
        resource documents (<Text code>Sketch</Text> and <Text code>Axure</Text>
        ) To help the business quickly design high-quality product prototypes
      </Paragraph>

      <Paragraph>
        <ul>
          <li>
            <Link href='https://ant.design/docs/spec/proximity-cn'>
              Design Principles
            </Link>
          </li>
          <li>
            <Link href='https://ant.design/docs/spec/overview-cn'>
              Design Patterns
            </Link>
          </li>
          <li>
            <Link href='https://ant.design/docs/resources-cn'>
              Design resources
            </Link>
          </li>
        </ul>
      </Paragraph>

      <Paragraph>
        <blockquote>{blockContent}</blockquote>
        <pre>{blockContent}</pre>
      </Paragraph>

      <Paragraph>
        press<Text keyboard>Esc</Text>Key to exit reading...
      </Paragraph>
    </Typography>
  );
};

export default Basic;
