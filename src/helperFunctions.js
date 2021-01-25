import React from 'react';
import { Label } from './css/PieStyles';
const radian = Math.PI / 180;

// ------------------ PIE CSS MODIFIERS ------------------ //

export const darkenPie = (name, id) => {
  document.getElementById(id).style.fill = '#003a6d';
  document.getElementsByClassName(name)[2].style.fill = '#580000';
  const roiBlock = document.getElementsByClassName(`${id}-roi`)[0].style
  roiBlock.visibility = 'visible';
  roiBlock.opacity = 1;
};

export const undarkenPie = (name, id) => {
  document.getElementById(id).style.fill = '#4babff';
  document.getElementsByClassName(name)[2].style.fill = '#ff5656';
  const roiBlock = document.getElementsByClassName(`${id}-roi`)[0].style
  roiBlock.visibility = 'hidden';
  roiBlock.opacity = 0;
}

export const keepHoverProperties = (event, id) => {
  const roiBlock = document.getElementsByClassName(`${id}-roi`)[0].style
  const piePieceOne = event.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].style;
  const piePieceTwo = event.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[1].childNodes[0].style;
  piePieceOne.fill = '#003a6d';
  piePieceTwo.fill = '#580000';
  roiBlock.visibility = 'visible';
  roiBlock.opacity = 1;
}

export const hideHoverProperties = (event, id) => {
  const roiBlock = document.getElementsByClassName(`${id}-roi`)[0].style
  const piePieceOne = event.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].style;
  const piePieceTwo = event.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[1].childNodes[0].style;
  piePieceOne.fill = '#4babff';
  piePieceTwo.fill = '#ff5656';
  roiBlock.visibility = 'hidden';
  roiBlock.opacity = 0;
}

// --------------- NUMBER/STRING ALGOS --------------- //

export const convertNumber = (value) => {
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

// ------------------ PIE ASSIST ALGOS ------------------ //

export const addSecondObject = (company) => {
  company.pie = company.value - company.cost;
  company.label = company.value;
  const dataEntry = [ company, { id: company.id, pie: company.cost, label: company.cost} ];
  return dataEntry;
}

export const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, id, label}) => {
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

export const findROI = (implied, cost) => {
  let multiple = (implied/cost).toFixed(2);
  while (multiple[multiple.length - 1] === '0' || multiple[multiple.length - 1] === '.') {
    multiple = multiple.substring(0, multiple.length - 1);
  }
  return multiple += 'x ROI';
}

// ------------------ BAR ASSIST ALGOS ------------------ //

export const addUnownedEquity = (company) => {
  company['Equity Possessed'] = Math.round(company.equity * 100);
  company['Remaining Equity'] = (100 - company['Equity Possessed']);
  return [company];
}

// ------------------ BAR CSS MODIFIERS ------------------ //

export const darkenBar = (id) => {
const bar = document.getElementsByClassName(`${id}-bar`);
bar[1].style.fill = '#242248';
bar[3].style.fill = '#264030';
}

export const lightenBar = (id) => {
const bar = document.getElementsByClassName(`${id}-bar`);
bar[1].style.fill = '#9a95f1';
bar[3].style.fill = '#93dcae';
}

// ------------------------------------------------------- //
