import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { PieGraphs, PieKeys, PieSection, Container, CompanyName, CompanyFunds, Key, BlueRectangle, RedRectangle, VectorRectangle, ROI, ROISection, Label } from '../css/PieStyles';
import PieChartGenerator from './PieChartGenerator';

const colors = ['#4babff', '#ff5656'];
const radian = Math.PI / 180;

// ------------------ PIE CSS MODIFIERS ------------------ //

const darkenPie = (name, id) => {
  document.getElementById(id).style.fill = '#003a6d';
  document.getElementsByClassName(name)[2].style.fill = '#580000';
  const roiBlock = document.getElementsByClassName(`${id}-roi`)[0].style
  roiBlock.visibility = 'visible';
  roiBlock.opacity = 1;
};

const undarkenPie = (name, id) => {
  document.getElementById(id).style.fill = '#4babff';
  document.getElementsByClassName(name)[2].style.fill = '#ff5656';
  const roiBlock = document.getElementsByClassName(`${id}-roi`)[0].style
  roiBlock.visibility = 'hidden';
  roiBlock.opacity = 0;
}

const keepHoverProperties = (event, id) => {
  const roiBlock = document.getElementsByClassName(`${id}-roi`)[0].style
  const piePieceOne = event.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].style;
  const piePieceTwo = event.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[1].childNodes[0].style;
  piePieceOne.fill = '#003a6d';
  piePieceTwo.fill = '#580000';
  roiBlock.visibility = 'visible';
  roiBlock.opacity = 1;
}

const hideHoverProperties = (event, id) => {
  const roiBlock = document.getElementsByClassName(`${id}-roi`)[0].style
  const piePieceOne = event.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].style;
  const piePieceTwo = event.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[1].childNodes[0].style;
  piePieceOne.fill = '#4babff';
  piePieceTwo.fill = '#ff5656';
  roiBlock.visibility = 'hidden';
  roiBlock.opacity = 0;
}

// --------------- NUMBER/STRING ALGOS --------------- //

const convertNumber = (value) => {
  let count = 0;
  let num = value.toString();
  let suffix;
  value = value.toString();
  while (num.length > 3) {
    count++;
    const end = num.length - 3;
    num = num.substring(0, end);
  }
  count === 3 ? suffix = 'B' :
  count === 2 ? suffix = 'M' :
  count === 1 ? suffix = 'K' : console.log('That ain\'t invesment money');

  num.length === 2 ? num = value.substring(0, 2) + '.' + value[2] + suffix :
  num.length === 1 ? num = value[0] + '.' + value.substring(1, 3) + suffix :
  num += suffix;

  while (num[num.length - 2] === '0' && (num[1] === '.' || num[2] === '.')) {
    num = num.substring(0, num.length - 2) + suffix;
  }

  (num[1] === '.' || num[2] === '.') && !Number(num[num.length - 2]) ? num = num.split('.').join('') : num = num.slice(0);
  return num;
}

const findROI = (implied, cost) => {
  let multiple = (implied/cost).toFixed(2);
  while (multiple[multiple.length - 1] === '0' || multiple[multiple.length - 1] === '.') {
    multiple = multiple.substring(0, multiple.length - 1);
  }
  return multiple += 'x ROI';
}

// ------------------ PIE ASSIST ALGOS ------------------ //

const addSecondObject = (data) => {
  const newData = [];
  data.forEach(company => {
    company.pie = company.value - company.cost;
    company.label = company.value;
    const dataEntry = [ company, { id: company.id, pie: company.cost, label: company.cost} ];
    newData.push(dataEntry);
  });
  return newData;
}

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, id, label}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * radian);
  const y = cy + radius * Math.sin(-midAngle * radian);
  const text = convertNumber(label);

  return (
    <Label
    className={`${id}-TEXT`}
    x={x} y={y} textAnchor={x > cx ? 'start' : 'end'}
    dominantBaseline="central"
    onMouseOver={ (event) => keepHoverProperties(event, id) }
    onMouseOut={ (event) => hideHoverProperties(event, id) }
    >
    {text}
    </Label>
  );
};

////////////////////////////////////////////////////////////////////////////////////////////////

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
            <ROI className={`${company.id}-roi`}>{findROI(company.value, company.cost)}</ROI>
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
