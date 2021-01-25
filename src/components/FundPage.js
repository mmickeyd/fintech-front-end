import React from 'react';
import BarGraphGenerator from './BarGraphGenerator';
import PieChartGenerator from './PieChartGenerator';
import { findROI, convertNumber, convertDate } from '../helperFunctions';
import { FundContainer, LogoName, StatisticsSection, Charts, BarGraph, PieGraph, CompanyName, CompanyText, Logo, Image, StatTitle, Divider } from '../css/FundPageStyles';
import { BarKeys, Key, PurpleRectangle, GreenRectangle, VectorRectangle } from '../css/BarStyles';
import { PieKeys, CustomKey, BlueRectangle, RedRectangle } from '../css/PieStyles';

const FundPage = (props) => {
  const fund = props.fund;
  const companies = fund.companies;

  return (
    <div>
      {companies.map(company =>
        <FundContainer key={company.id} >
          <LogoName>
            <CompanyName>
              <CompanyText>{company.name}</CompanyText>
            </CompanyName>
            <Logo>
              <Image src={company.logo} alt='company logo'/>
            </Logo>
          </LogoName>
          <StatisticsSection>
            <StatTitle data-testid='divider'>Founded</StatTitle>
            <Divider  />
            <StatTitle>Value</StatTitle>
            <Divider />
            <StatTitle>Cost</StatTitle>
            <Divider />
            <StatTitle>Multiple</StatTitle>
            <Divider />
            <StatTitle>Equity</StatTitle>
            <Divider />
            <div>{ convertDate(company.founded) }</div>
            <div>{ convertNumber(company.value) }</div>
            <div>{ convertNumber(company.cost) }</div>
            <div>{ findROI(company.value, company.cost) }</div>
            <div>{ Math.round(company.equity * 100) + '%' }</div>
          </StatisticsSection>
          <Charts>
            <PieGraph>
              <PieChartGenerator width='70%' company={company} />
              <PieKeys>
                <CustomKey>
                  <VectorRectangle>
                    <BlueRectangle/>
                  </VectorRectangle>
                  Implied Value
                </CustomKey>
                <CustomKey>
                  <VectorRectangle>
                    <RedRectangle/>
                  </VectorRectangle>
                  Cost
                </CustomKey>
              </PieKeys>
            </PieGraph>
            <BarGraph>
              <BarGraphGenerator company={company} />
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
            </BarGraph>
          </Charts>
        </FundContainer>
      )}
    </div>
  );
};

export default FundPage;



