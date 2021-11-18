import {useState} from "react";

// recommend list
const Test03 = () => {
  const [page, setPage] = useState(1);
  const ListCount = 5;

  const company = {jobName: '운영 서버 시스템 엔지니어', task: 'IT 서비스 웹 기획', companyName: '네이버'};

  const companyList = [...new Array(17).fill(company)];

  const maxPage = Math.ceil(companyList.length / ListCount);

  const companyListEl = companyList.map((company, index) => {
    const {jobName, task, companyName} = company;
    return (
      <div style={{border: '1px solid #eee', marginBottom: '5px'}}>
        <p>{jobName}{index}</p>
        <p>{companyName}</p>
        <p>{task}</p>
      </div>
    )
  }).slice(ListCount * (page - 1), ListCount * page);

  const handlePrev = () => {
    if(page <= 1) return;
    setPage(prev => prev - 1);
  };

  const handleNext = () => {
    if(page >= maxPage) return;
    setPage(prev => prev + 1);
  };

  return (
    <div style={{width: '200px', marginTop: '30px'}}>
      {companyListEl}
      <div>
        <button onClick={handlePrev}>{'<'}</button>
        <span>{`${page}/${maxPage}`}</span>
        <button onClick={handleNext}>{'>'}</button>
      </div>
    </div>
  )
};

export default Test03;
