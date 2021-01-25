import React from 'react';
import { Divider, EquityLabel, RoiLabel, FirmGraphs, FirmName } from '../css/HomeStyles';
import PieChartSection from './PieChartSection';
import BarEquitySection from './BarEquitySection';


const Home = (props) => {
  const funds = props.funds;

  return (
    <div data-testid='home'>
      {funds.map(fund =>
        <FirmGraphs key={fund.id} data-testid='firmGraphs'>
          <FirmName>{fund.name}</FirmName>
          <RoiLabel>Return on Investment</RoiLabel>
          <PieChartSection fund={fund} />
          <Divider/>
          <EquityLabel>Equity</EquityLabel>
          <BarEquitySection fund={fund} />
        </FirmGraphs>
      )}
    </div>
  );
}

export default Home;
