import classnames from "classnames/bind";
import { useState } from "react";
import styles from "./groupPicker.module.scss";
const cx = classnames.bind(styles);

const peopleStateTypeMap = {
  'NOMAL': 'nomal',
  'EXCEPT': 'except',
  'HEAD': 'head'
}

interface dataType {
  value: number;
  state: PeopleStateType;
}

interface PeopleListProps {
  data: dataType[];
  setData: (data) => void;
}

const PeopleList = ({ data, setData }: PeopleListProps) => {
  const peopleEls = data.map((e, i) => {
    const handleClick = () => {
      setData(prev => prev.map((e, j) => {
        if(i === j) {
          if(e.state === 'NOMAL') return { state: 'EXCEPT', value: e.value };
          else if(e.state === 'EXCEPT') return { state: 'HEAD', value: e.value };
          else return { state: 'NOMAL', value: e.value };
        }
        else return e;   
      }))
    }

    return (
      <span key={i + 1} className={cx('cell', peopleStateTypeMap[e.state])} onClick={handleClick}>
        {i + 1}
      </span>
    )
  })

  return (
    <div className={cx('listArea')}>
      {peopleEls}
    </div>
  )
}

interface GroupListProps {
  data: dataType[];
  groupNumber: number;
}

const GroupList = ({ data, groupNumber }: GroupListProps) => {
  const [arr, setArr] = useState(Array.from(Array(groupNumber), () => Array()));
  
  let headIdx = 0;
  data.forEach(d => {
    if(d.state === 'HEAD') arr[headIdx++].push(d);
  });

  data.forEach(d => {
    if(d.state === 'NOMAL') arr[headIdx++ % groupNumber].push(d);
  });


  const arrEls = arr.map((e, i) => {
    const newArr = [...e];

    const els = newArr.map((d, j) => {
      return (
        <span key={j} className={cx('cell', peopleStateTypeMap[d.state])}>
          {d.value}
        </span>
      )
    }) 

    const handleClickGroup = () => {
      // TODO
      // setArr(prev => prev.map((d, k) => {
      //   if(i === k) return d.map((e, l) => {
      //     if(l === 0) return {...e, state: 'HEAD'};
      //     else return e;
      //   });
      //   else return [...d];
      // }));
    }

    return (
      <div key={i} className={cx('groupWrap')} onClick={handleClickGroup}>
        {els}
      </div>
    )
  })

  return <div className={cx('groupArea')}>{arrEls}</div>
}


type PeopleStateType = 'NOMAL' | 'EXCEPT' | 'HEAD';
type ModeType = 'NUMBER' | 'GROUP';

const GroupPicker = () => {
  const [data, setData] = useState<dataType[]>([]);
  const [groupNumber, setGroupNumber] = useState<number>(0);
  const [mode, setMode] = useState<ModeType>('NUMBER');

  const handleChange = (e) => {
    setData(new Array(Number(e.target.value)).fill({}).map((e, i) => { return {state: 'NOMAL', value: i + 1}}));
  }

  const handleChangeGroupNumber = (e) => {
    setGroupNumber(Number(e.target.value));
  }

  const creatGroup = () => {
    if(data.length <= 0){
      alert('인원 수를 입력해주세요!');
      return;
    }

    if(groupNumber <= 0) {
      alert('모둠 수를 입력해주세요!');
      return;
    }

    if(data.filter(e => e.state === 'HEAD').length > groupNumber) {
      alert('조장 수가 모둠 수보다 많습니다!');
      return;
    }


    data.sort(() => Math.random() - 0.5);
    setMode('GROUP');
  }

  const getContents = () => {
    switch(mode) {
      case 'NUMBER': return <PeopleList data={data} setData={setData}/>;
      case 'GROUP': return <GroupList data={data} groupNumber={groupNumber}/>;
    }
  }

  return (
    <div className={cx('wrap')}>

      <div className={cx('btnArea')}>
        <div className={cx('btnWrap')}>
          <span>인원</span>
          <input type="number" min={0} max={100} value={data.length} onChange={handleChange} disabled={mode !== 'NUMBER'}/>
        </div>
        <div className={cx('btnWrap')}>
          <span>모둠</span>
          <input type="number" min={0} max={100} value={groupNumber} onChange={handleChangeGroupNumber} disabled={mode !== 'NUMBER'}/>
        </div>
        {
          mode === 'NUMBER' &&
          <button onClick={creatGroup} type={'button'} className={cx('btn')}>GO</button>
        }
        {
          mode !== 'NUMBER' &&
          <button onClick={() => {location.href = ''}} type={'button'} className={cx('btn')}>다시하기</button>
        }

      </div>

      {getContents()}
    </div>
  )
}

export default GroupPicker;