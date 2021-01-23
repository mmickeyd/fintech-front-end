import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { PieGraphs, PieKeys, PieSection, CompanyName, CompanyFunds, Key, BlueRect, RedRect, VectorRect, ROI, ROISection, Label } from '../css/PieStyles';

const colors = ['#0088FE', '#D20000'];
const radian = Math.PI / 180;

// ------------------ CSS MODIFIERS ------------------ //

const darkenPie = (name, id) => {
  document.getElementById(id).style.fill = '#003a6d';
  document.getElementsByClassName(name)[2].style.fill = '#580000';
  document.getElementsByClassName(`${id}-ROI`)[0].style.visibility = 'visible';
};

const undarkenPie = (name, id) => {
  document.getElementById(id).style.fill = '#0088fe';
  document.getElementsByClassName(name)[2].style.fill = '#d20000';
  document.getElementsByClassName(`${id}-ROI`)[0].style.visibility = 'collapse';
}

const keepHoverProperties = (event, id) => {
  document.getElementsByClassName(`${id}-ROI`)[0].style.visibility = 'visible';
  const piePieceOne = event.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].style;
  const piePieceTwo = event.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[1].childNodes[0].style;
  piePieceOne.fill = '#003a6d';
  piePieceTwo.fill = '#580000';
}

const hideHoverProperties = (event, id) => {
  document.getElementsByClassName(`${id}-ROI`)[0].style.visibility = 'collapse';
  const piePieceOne = event.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].style;
  const piePieceTwo = event.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[1].childNodes[0].style;
  piePieceOne.fill = '#0088fe';
  piePieceTwo.fill = '#d20000';
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

const MultiplePie = (props) => {
  const companies = props.fund.companies;
  const data = addSecondObject(companies);
  let index = 0;

  const increaseIndex = (i) => {
    index += i;
    return '';
  }

  return (
    <PieGraphs>
      <PieKeys>
        <Key>
          <VectorRect>
            <BlueRect/>
          </VectorRect>
          Implied Value
        </Key>
        <Key>
          <VectorRect>
            <RedRect/>
          </VectorRect>
          Cost
        </Key>
      </PieKeys>
      <CompanyFunds>
      {companies.map(company =>
        <PieSection key={company.id}>
        <CompanyName>{company.name}</CompanyName>
          <ResponsiveContainer height='22vw' aspect={1}>
            <PieChart>
              <Pie
                className={`${company.name}`}
                data={data[index]}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius='80%'
                fill='#8884d8'
                dataKey='pie'
                onMouseOver={ () => darkenPie(company.name, company.id) }
                onMouseOut={ () => undarkenPie(company.name, company.id) }
                >
                { data.map((entry, index) =>
                    <Cell
                    dataKey='pie'
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                )}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          {increaseIndex(1)}
          <ROISection>
            <ROI className={`${company.id}-ROI`}>{findROI(company.value, company.cost)}</ROI>
          </ROISection>
          </PieSection>
      )}
      </CompanyFunds>
    </PieGraphs>
  );
}

export default MultiplePie;


