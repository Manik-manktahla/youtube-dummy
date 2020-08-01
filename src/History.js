import React from "react";

import { recommendedData } from "./data";
import TileHorizontal from "./Components/TileHorizontal";
import Divider from "@material-ui/core/Divider"
import Radio from '@material-ui/core/Radio';
import './History.css'

const History = (props) => {
  return (
    <div className="history">
      <div className="history__tiles">
        <h3 className='history__heading'>Watch History</h3>
        <p className='history__heading'>Today</p>
        {recommendedData.map((data) => <TileHorizontal {...data} className='historyTile'/>)}
        <p className='history__heading'>Yesterday</p>
        {recommendedData.map((data) => <TileHorizontal {...data} className='historyTile'/>)}
      </div>
      <div className="history__content">
        <h3>History Type</h3>
        <Divider className='history__divider'/>
        <div className='history__contentBar'>
          <p>Watch History</p>
          <Radio/>
        </div>
        <Divider className='history__divider'/>
        <div className='history__contentBar'>
          <p>Search History</p>
          <Radio/>
        </div>
        <Divider className='history__divider'/>
        <div className='history__contentBar'>
          <p>Comments</p>
          <Radio/>
        </div>
        <Divider className='history__divider'/>
        <div className='history__contentBar'>
          <p>Community</p>
          <Radio/>
        </div>
        <Divider className='history__divider'/>
        <div className='history__contentBar'>
          <p>Live Chat</p>
          <Radio/>
        </div>
        <Divider className='history__divider'/>
        <p className="history__links">CLEAR ALL WATCHING HISTORY</p>
        <p className="history__links">PAUSE WATCHING HISTORY</p>
        <p className="history__links">MANAGE ALL ACTIVITY</p>
      </div>
    </div>
  );
};

export default History;
