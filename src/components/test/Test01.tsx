import Slider from "@components/slider";
import {useState} from "react";

const TAB_LIST: string[] = [
  '출퇴근',
  '워라벨',
  '연차',
  '동아리 지원',
  '양육 지원',
  '건강 지원',
  '자기계발 지원',
  '휴가 지원'
];

const LIST_MAP: Record<string, string[]> = {
  '출퇴근': ['출', '퇴', '근'],
  '워라벨': ['워', '라', '벨'],
  '연차': ['연', '차'],
  '동아리 지원': ['동', '아', '리'],
  '양육 지원': ['양', '육'],
  '건강 지원': ['건', '강'],
  '자기계발 지원': ['자', '기', '계', '발'],
  '휴가 지원': ['휴', '가'],
};

const marksDifficult = {
  1000: '1,000 만원',
  10000: '1억원 이상'
};

const Test01 = () => {
  const [value, setValue] = useState(1000);
  const [options, setOptions] = useState({
    min: 1000,
    max: 10000,
    step: 1000
  });
  const { min, max, step } = options;

  const [selectedTab, setSelectedTab] = useState('');
  const [selectedListItems, setSelectedListItems] = useState([]);

  const tabList = TAB_LIST.map((tab) => {
    const isSelected = LIST_MAP[tab]?.find(tabListItem => -1 !== selectedListItems.indexOf(tabListItem));

    return (
      <button
        key={tab}
        style={{padding: '5px 10px', marginRight: '5px', border:'1px solid #ccc', borderRadius: '20px', color: `${isSelected ? '#fff' : '#000'}`, background: `${isSelected ? '#6CDD83' : '#fff'}`}}
        onClick={() => {setSelectedTab(tab)}}
      >
        {tab}
      </button>
    )
  });

  const list = LIST_MAP[selectedTab]?.map((listItem) => {
    const isSelected = selectedListItems.find(selectedListItem => selectedListItem === listItem);

    return (
      <button
        key={listItem}
        style={{padding: '5px 10px', marginRight: '5px', border:'1px solid #ccc', borderRadius: '20px', color: `${isSelected ? '#fff' : '#000'}`, background: `${isSelected ? '#6CDD83' : '#fff'}`}}
        onClick={() => {
          if(isSelected) setSelectedListItems(prev => prev.filter(selectedListItem => {return selectedListItem !== listItem}));
          else setSelectedListItems(prev => [...prev, listItem]);
        }}
      >
        {listItem}
      </button>
    )
  });

  const listList = selectedListItems.map((selectedListItem) => {
    return (
      <button
        key={selectedListItem}
        style={{padding: '5px 10px', marginRight: '5px', border:'1px solid #ccc', borderRadius: '5px', color: '#fff', background: '#6CDD83'}}
        onClick={() => {
          setSelectedListItems(prev => prev.filter(item => selectedListItem !== item))
        }}
      >
        {selectedListItem}
      </button>
    )
  });

  return (
    <div style={{padding: '100px'}}>

      <div style={{ width: '262px' }}>
        <Slider
          disabled={false}
          min={min}
          max={max}
          step={step}
          value={value}
          marks={marksDifficult}
          toolTip={value => <>{value}</>}
          onChange={value => setValue(value)}
        />
      </div>

      <div style={{marginTop: '24px'}}>
        {tabList}
      </div>

      <div style={{marginTop: '24px'}}>
        {list}
      </div>


      <div style={{marginTop: '24px'}}>
        {
          value !== 0 &&
          <button
              style={{padding: '5px 10px', marginRight: '5px', border:'1px solid #ccc', borderRadius: '5px', color: '#fff', background: '#6CDD83'}}
              onClick={() => setValue(0)}
          >
            {value}만원
          </button>
        }

        {listList}
      </div>
    </div>
  )
};

export default Test01;
