import Layout from "@components/layout";
import Header from "@components/header";
import FixedHeader from "@components/fixedHeader";
import Contents from "@components/contents";
import SelectList from "@components/selectList";
import { useState } from "react";
import { ALL_LOCATIONS, LocationNameMap } from "@domain/location";

const DesignJobs = ['UX 디자이너', 'UI,GUI 디자이너', '웹 디자이너', '그래픽 디자이너', '모바일 디자이너', 'BI/BX 디자이너', '광고 디자이너', '제품 디자이너', '영상,모션 디자이너', '3D 디자이너', '아트 디렉터', '캐릭터 디자이너', '일러스트레이터', '2D 디자이너'];
const DevJobs = ['프론트', '백앤드', '서버', '보안'];

const JobSelect = () => {
    const [selectedJobList, setSelectedJobList] = useState<Array<string>>([]);
    const [jobList, setJobList] = useState([]);

    const handleOnChange = (value: string) => {
        setSelectedJobList([]);
        switch (value) {
            case 'design':
                setJobList(DesignJobs);
                break;
            case 'dev':
                setJobList(DevJobs);
                break;
        }
    }

    return (
        <div>
            <select onChange={e => handleOnChange(e.target.value)} defaultValue=''>
                <option value='' disabled hidden>매칭 희망 직군을 선택해 주세요.</option>
                <option value='design'>디자인</option>
                <option value='dev'>개발</option>
            </select>
            <SelectList
                list={jobList}
                selectList={selectedJobList}
                setSelectList={setSelectedJobList}
            />
            <button onClick={() => console.log(selectedJobList)}>선택</button>
        </div>
    )
}

const SelectListPage = () => {
    const [locationList, setLocationList] = useState<Array<string>>([]);

    return (
        <Layout>
            <Header />
            <FixedHeader />
            <Contents>
                <div style={{ width: '500px' }}>
                    <JobSelect/>
                    <hr />
                    <JobSelect/>
                    <hr/>
                    <SelectList
                        list={ALL_LOCATIONS.map(location => LocationNameMap[location])}
                        selectList={locationList}
                        setSelectList={setLocationList}
                        itemStyle={{ width: '116px', padding: '18px 0' }}
                    />
                    <button onClick={() => console.log(locationList)}>선택</button>
                </div>
            </Contents>
        </Layout>
    );
};

export default SelectListPage;