import React from 'react';
import BarGraphGenerator from './BarGraphGenerator';
import { BarGraphs, BarKeys, CompanyFunds, Key, PurpleRectangle, GreenRectangle, VectorRectangle } from '../css/BarStyles';
import '../css/recharts.css';

const BarEquitySection = (props) => {
  const companies = props.fund.companies;

  return (
    <BarGraphs>
    <CompanyFunds data-testid='bar'>
      {companies.map(company =>
      <BarGraphGenerator company={company} />
      )}
    </CompanyFunds>
    <BarKeys>
        <Key>
          <VectorRectangle>
            <GreenRectangle/>
          </VectorRectangle>
          Remaining Equity (%)
        </Key>
        <Key>
          <VectorRectangle>
            <PurpleRectangle/>
          </VectorRectangle>
          Equity Possessed (%)
        </Key>
      </BarKeys>
    </BarGraphs>
  )
}

export default BarEquitySection;


// purp #242248  green #264030
