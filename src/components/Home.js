import React, { useEffect, useState } from 'react';
import { Divider, EquityLabel, RoiLabel, FirmGraphs, FirmName } from '../css/AppStyles';
import PieMultiple from './PieMultiple';
import BarEquity from './BarEquity';


const Home = (props) => {
  const funds = props.funds;
  // const [funds, setFunds] = useState([]);

  // useEffect((props) => {
  //   setFunds(props.funds);
  // }, []);

  return (
    <div>
      {funds.map(fund =>
        <FirmGraphs key={fund.id} >
          <FirmName>{fund.name}</FirmName>
          <RoiLabel>Return on Investment</RoiLabel>
          <PieMultiple fund={fund} />
          <Divider/>
          <EquityLabel>Equity (%)</EquityLabel>
          <BarEquity fund={fund} />
        </FirmGraphs>
      )}
    </div>
  );
}

export default Home;
