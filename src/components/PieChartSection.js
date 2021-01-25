import React from 'react';
import { PieGraphs, PieKeys, PieSection, CompanyName, CompanyFunds, Key, BlueRectangle, RedRectangle, VectorRectangle, ROI, ROISection } from '../css/PieStyles';
import PieChartGenerator from './PieChartGenerator';
import { findROI } from '../helperFunctions.js';

const PieChartSection = (props) => {
  const companies = props.fund.companies;

  return (
    <PieGraphs>
      <CompanyFunds>
      {companies.map(company =>
        <PieSection key={company.id} data-testid='pieChart'>
        <CompanyName>{company.name}</CompanyName>
        <PieChartGenerator company={company} />
          <ROISection>
            <ROI className={`${company.id}-roi`}>{ findROI(company.value, company.cost) }</ROI>
          </ROISection>
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
