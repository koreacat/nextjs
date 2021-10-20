import Layout from "@components/layout";
import Header from "@components/header";
import FixedHeader from "@components/fixedHeader";
import Contents from "@components/contents";
import SelectList from "@components/selectList";
import { useState } from "react";
import { ALL_LOCATIONS, LocationNameMap } from "@domain/location";

const DesignJobs = ['UX 디자이너', 'UI,GUI 디자이너', '웹 디자이너', '그래픽 디자이너', '모바일 디자이너', 'BI/BX 디자이너', '광고 디자이너', '제품 디자이너', '영상,모션 디자이너', '3D 디자이너', '아트 디렉터', '캐릭터 디자이너', '일러스트레이터', '2D 디자이너'];
const DevJobs = ['프론트', '백앤드', '서버', '보안'];
const taskList = ['design', 'dev'];

const Jobs = {
    design: DesignJobs,
    dev: DevJobs,
}

const EmptySelect = () => {
    return <span>희망 직군을 선택해주세요.</span>
}

interface IJobSelect {
    title: string;
    deleteable?: boolean;
    onDelete: () => void;
    selectedTask: string;
    setSelectedTask: (task: string) => void;
    selectedJobList: string[];
    setSelectedJobList: (selectedJobList: string[]) => void;
}

const JobSelect = (
    {
        title,
        deleteable = false,
        onDelete,
        selectedTask,
        setSelectedTask,
        selectedJobList,
        setSelectedJobList,
    }: IJobSelect) => {

    const [jobList, setJobList] = useState([]);

    const handleOnChange = (value: string) => {
        setSelectedTask(value);
        setJobList(Jobs[value]);
    }

    const taskListEl = taskList.map(task => {
        return <option key={task} value={task}>{task}</option>
    })

    return (
        <div>
            <hr/>
            <strong>{title}</strong>
            {deleteable && <button onClick={onDelete}>삭제</button>}
            <div>
                <span>매칭 희망 직군</span>
                <select onChange={e => handleOnChange(e.target.value)} defaultValue=''>
                    <option value='' disabled hidden>매칭 희망 직군을 선택해 주세요.</option>
                    {taskListEl}
                </select>
            </div>
            <div>
                <span>매칭 희망 직무</span>
                {
                    selectedTask ?
                    <SelectList
                        list={jobList}
                        selectList={selectedJobList}
                        setSelectList={setSelectedJobList}
                    />
                    :
                    <EmptySelect/>
                }
            </div>
        </div>
    )
}

interface JobSelect {
    key: number;
    title: string;
    deleteable: boolean;
    selectedTask: string;
    selectedJobList: string[];
}

const SelectListPage = () => {
    const [jobSelectList, setJobSelectList] = useState<JobSelect[]>([{
        key: 0,
        title: '매칭 희망 직군 직무',
        deleteable: false,
        selectedTask: '',
        selectedJobList: [],
    }]);
    const [locationList, setLocationList] = useState<string[]>([]);

    const handleAddJobSelect = () => {
        const key = Math.random();
        setJobSelectList(prev => [...prev, {
            key: key,
            title: '직군 직무 등록' + key,
            deleteable: true,
            selectedTask: '', 
            selectedJobList: [],
        }]);
    }

    const handleDeleteJobSelect = (key: number) => {
        setJobSelectList(prev => prev.filter((jobSelect) => jobSelect.key !== key));
    }

    const setSelectedTask = (key: number) => {
        return (value: string) => 
        setJobSelectList(prev => prev.map(jobSelect => 
            jobSelect.key === key ? {...jobSelect, selectedTask: value} : jobSelect));
    }

    const setSelectedJobList = (key: number) => {
        return (value: string[]) => {
            setJobSelectList(prev => prev.map(jobSelect => 
                jobSelect.key === key ? {...jobSelect, selectedJobList: value} : jobSelect));
        }
    }

    const jobSelectListEl = jobSelectList.map((jobSelect) => {
        const {key, title, deleteable, selectedTask, selectedJobList} = jobSelect;
        return <JobSelect
            key={key}
            title={title} 
            deleteable={deleteable}
            onDelete={() => handleDeleteJobSelect(key)}
            selectedTask={selectedTask}
            setSelectedTask={setSelectedTask(key)}
            selectedJobList={selectedJobList}
            setSelectedJobList={setSelectedJobList(key)}
        />
    });

    return (
        <Layout>
            <Header />
            <FixedHeader />
            <Contents>
                <div style={{ width: '500px' }}>
                    {jobSelectListEl}
                    <button onClick={handleAddJobSelect}>직군 직무 추가</button>
                    <hr/>
                    {/* <strong>희망 근무 지역</strong>
                    <SelectList
                        list={ALL_LOCATIONS.map(location => LocationNameMap[location])}
                        selectList={locationList}
                        setSelectList={setLocationList}
                        itemStyle={{ width: '116px', padding: '18px 0' }}
                    /> */}
                    <button onClick={() => console.log(jobSelectList, locationList)}>다음</button>
                </div>
            </Contents>
        </Layout>
    );
};

export default SelectListPage;