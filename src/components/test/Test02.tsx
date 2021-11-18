import {useState} from "react";

// MoreBadge
const Test02 = () => {
  const [moreVisible, setMoreVisible] = useState(false);
  const DefaultBadgeCount = 10;

  const badgeList = new Array(20).fill(0);

  const isMore = badgeList.length > DefaultBadgeCount;

  const badgeListEl = badgeList.map((item, index) =>
    <span key={index} style={{border: '1px solid #eee', marginRight: '3px'}}>{`보유복지${index + 1}`}</span>
  ).slice(0, moreVisible ? badgeList.length : DefaultBadgeCount);

  return (
    <div style={{width: '400px'}}>
      {badgeListEl}
      {isMore && <button onClick={() => setMoreVisible(prev => !prev)}>더보기</button>}
    </div>
  )
};

export default Test02;
