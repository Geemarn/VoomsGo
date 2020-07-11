import React from "react";
import { Redirect, Route } from "react-router-dom";
import routes from "./routes";
import ErrorBoundary from "./components/_common/ErrorBoundary";

export const CustomRoute = (customProps) => {
  const { component: Component, isPrivate, location, ...rest } = customProps;
  const isLoggedIn = true;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isPrivate && !isLoggedIn) {
          return <Redirect to="/login" />;
        }
        return (
          <ErrorBoundary>
            <Component {...props} />
          </ErrorBoundary>
        );
      }}
    />
  );
};

export default () =>
  routes.map((props, index) => <CustomRoute key={index} {...props} />);
