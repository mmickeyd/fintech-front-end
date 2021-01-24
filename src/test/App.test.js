import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import PieMultiple from '../components/PieMultiple';
import BarEquity from '../components/BarEquity';

const firm = {
  "id": 1,
  "name": "Hane and Sons Ventures",
  "companies": [
    {
      "id": 1,
      "name": "Greens Food Suppliers",
      "logo": "https://aumni-public.s3.amazonaws.com/fake-logos-vector-color/1.svg",
      "cost": 1700000,
      "equity": 0.34,
      "value": 5700000,
      "founded": "2020-05-10"
    },
  ]
};

describe('App', () => {

  test('renders header on homepage', () => {
    const { getByText } = render(<App />);
    const header = getByText(/^aumni frontend coding challenge$/i);
    expect(header).toBeInTheDocument();
  });

});

describe('PieMultiple', () => {

  test('calculates ROI correctly', () => {
    const { getByText } = render(<PieMultiple fund={firm} />);
    const returnOnInvestment = getByText(/^3.35x roi$/i);
    expect(returnOnInvestment).toBeInTheDocument();
  });

  test('contains pie chart section', () => {
    const { getByTestId } = render(<PieMultiple fund={firm} />);
    const pieChart = getByTestId(/^piechart$/i);
    expect(pieChart).toBeInTheDocument();
  });

  test('renders pie chart', () => {
    render(<PieMultiple fund={firm} />);
    const pieChartSection = document.getElementsByClassName('pieContainer')[0];
    expect(pieChartSection).toBeInTheDocument();
  });

  test('renders keys', () => {
    const { getByText } = render(<PieMultiple fund={firm} />);
    const key1 = getByText(/^cost$/i);
    const key2 = getByText(/^implied value$/i);
    expect(key1).toBeInTheDocument();
    expect(key2).toBeInTheDocument();
  });

  test('renders rectangles for keys', () => {
    render(<PieMultiple fund={firm} />);
    const blueRectangle = document.getElementsByTagName('rect')[0];
    const redRectangle = document.getElementsByTagName('rect')[1];
    expect(blueRectangle).toBeInTheDocument();
    expect(redRectangle).toBeInTheDocument();
    expect(blueRectangle).toHaveStyle('fill: #4babff');
    expect(redRectangle).toHaveStyle('fill: #ff5656');
  });

  test('renders company name', () => {
    const { getByText } = render(<PieMultiple fund={firm} />);
    const company = getByText(/^greens food suppliers$/i);
    expect(company).toBeInTheDocument();
  });

});
