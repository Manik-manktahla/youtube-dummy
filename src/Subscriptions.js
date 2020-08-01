import React from "react";

import { recommendedData } from "./data";
import Tile from "./Components/Tile";
import Divider from "@material-ui/core/Divider";

import "./Subscription.css";

const Subcriptions = (props) => {
  return (
    <div className="subscriptions">
      <h3>Today</h3>
      <div className="subscriptions__container">
        {recommendedData.map((data) => (
          <Tile {...data} className="subscriptionsTile" />
        ))}
      </div>
      <Divider />
      <h3>Yesterday</h3>
      <div className="subscriptions__container">
        {recommendedData.map((data) => (
          <Tile {...data} className="subscriptionsTile" />
        ))}
      </div>
    </div>
  );
};

export default Subcriptions;
