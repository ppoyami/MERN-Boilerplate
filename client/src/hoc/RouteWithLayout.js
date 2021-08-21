import React from 'react';
import { Route } from 'react-router-dom';

export default function RouteWithLayout({
  component: Component,
  layout: Layout,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={matchProps => {
        return (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        );
      }}
    />
  );
}
