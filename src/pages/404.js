import React from 'react';
import { Row, Col } from 'reactstrap';
import Link from '../components/link';
import Layout from '../components/layout';

export default function PageNotFound() {
  return (
    <Layout>
      <Row>
        <Col md={{ size: 4, offset: 4 }} style={{ textAlign: 'center' }}>
          <img alt="404 page" width="206" src="/404.png" />
          <h1>Page Not Found</h1>
          <Link to="/">Go to home page</Link>
        </Col>
      </Row>
    </Layout>
  );
}
