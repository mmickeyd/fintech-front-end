import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Container, BarGraphs, BarKeys, CompanyFunds, Key, PurpleRectangle, GreenRectangle, VectorRectangle } from '../css/BarStyles';
import '../css/recharts.css';
import { addUnownedEquity, darkenBar, lightenBar } from '../helperFunctions.js';

const BarEquity = (props) => {
  const companies = props.fund.companies;

  return (
    <BarGraphs>
    <CompanyFunds data-testid='bar'>
      {companies.map(company =>
        <Container className='barContainer' height='auto' width='30%' aspect={1} key={company.id}
          >
          <BarChart
            width='30%'
            data={addUnownedEquity(company)}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
            <CartesianGrid strokeDasharray='2 2' />
            <XAxis dataKey='name'/>
            <YAxis />
            <Tooltip />
            <Bar
              dataKey='Equity Possessed'
              stackId='a'
              fill='#9a95f1'
              className={`${company.id}-bar`}
              onMouseOver={ () => darkenBar(company.id) }
              onMouseOut={ () => lightenBar(company.id) }
            />
            <Bar
              dataKey='Remaining Equity'
              stackId='a' fill='#93dcae'
              className={`${company.id}-bar bargph`}
              onMouseOver={ () => darkenBar(company.id) }
              onMouseOut={ () => lightenBar(company.id) }
            />
          </BarChart>
        </Container>
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

export default BarEquity;


// purp #242248  green #264030
