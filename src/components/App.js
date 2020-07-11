import React, { Suspense, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import Progress from "./_common/Progress";
import Routes from "../router.js";
import { Redirect, Switch } from "react-router-dom";
import "../styles/app.scss";

const App = ({}) => {
  useEffect(() => {}, []);
  return (
    <Fragment>
      <div className="content">
        <Suspense fallback={<Progress style={{ top: "60%", left: "50%" }} />}>
          <Switch>
            <Routes />
            <Redirect to={"/"} />
          </Switch>
        </Suspense>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
