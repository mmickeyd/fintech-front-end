import React from 'react';
import { PieGraphs, PieKeys, PieSection, CompanyName, CompanyFunds, Key, BlueRectangle, RedRectangle, VectorRectangle } from '../css/PieStyles';
import PieChartGenerator from './PieChartGenerator';

const PieChartSection = (props) => {
  const companies = props.fund.companies;

  return (
    <PieGraphs>
      <CompanyFunds>
        {companies.map(company =>
          <PieSection key={company.id} data-testid='pieChart'>
          <CompanyName>{company.name}</CompanyName>
          <PieChartGenerator company={company} />
          </PieSection>
        )}
      </CompanyFunds>
      <PieKeys>
        <Key>
          <VectorRectangle>
            <BlueRectangle/>
          </VectorRectangle>
          Implied Value
        </Key>
        <Key>
          <VectorRectangle>
            <RedRectangle/>
          </VectorRectangle>
          Cost
        </Key>
      </PieKeys>
    </PieGraphs>
  );
}

export default PieChartSection;
