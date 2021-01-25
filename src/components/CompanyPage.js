import React from 'react';

const CompanyPage = (props) => {
  console.log(props);
  const fund = props.fund;
  console.log(fund)

  return (
    <div>
      <div>
      </div>
      {/* {companies} */}
      <img src={`${fund.companies[0].logo}`} alt='logo' />
    </div>
  );
};

export default CompanyPage;



