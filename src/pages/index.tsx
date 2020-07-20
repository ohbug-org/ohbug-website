import React from 'react';
import type { PageProps } from 'gatsby';

import Layout from '@/components/Layout/Layout';
import Home from '@/components/Home';

const Index: React.FC<PageProps> = () => (
  <Layout>
    <Home />
  </Layout>
);

export default Index;
