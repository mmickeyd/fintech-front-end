import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BarGraphs, BarKeys, CompanyFunds, Key, PurpleRectangle, GreenRectangle, VectorRectangle } from '../css/BarStyles';
import '../css/recharts.css';

const addUnownedEquity = (company) => {
    company['Equity Possessed'] = Math.round(company.equity * 100);
    company['Remaining Equity'] = (100 - company['Equity Possessed']);
    return [company];
}

const darkenBar = (id) => {
  const bar = document.getElementsByClassName(`${id}-bar`);
  bar[1].style.fill = '#242248';
  bar[3].style.fill = '#264030';
}

const lightenBar = (id) => {
  const bar = document.getElementsByClassName(`${id}-bar`);
  bar[1].style.fill = '#9a95f1';
  bar[3].style.fill = '#93dcae';
}


const BarEquity = (props) => {
  const companies = props.fund.companies;

  return (
    <BarGraphs>
    <CompanyFunds>
      {companies.map(company =>
        <ResponsiveContainer aspect={1} width='30%' height='auto' className='barContainer' key={company.id} >
          <BarChart className='GOWILDFAM'
            width='30%'
            data={addUnownedEquity(company)}
            margin={{
              top: 20, right: 30, left: 20, bottom: 5,
            }}>
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
            className={`${company.id}-bar`}
            onMouseOver={ () => darkenBar(company.id) }
            onMouseOut={ () => lightenBar(company.id) }
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </CompanyFunds>
    <BarKeys>
        <Key>
          <VectorRectangle>
            <GreenRectangle/>
          </VectorRectangle>
          Remaining Equity
        </Key>
        <Key>
          <VectorRectangle>
            <PurpleRectangle/>
          </VectorRectangle>
          Equity Possessed
        </Key>
      </BarKeys>
    </BarGraphs>
  )
}

export default BarEquity;


// purp #242248  green #264030
