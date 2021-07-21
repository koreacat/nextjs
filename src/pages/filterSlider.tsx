import Contents from "@components/contents";
import Layout from "@components/layout";
import FilterSlider from "src/components/filterSlider";

export interface IFilter {
    type: string;
    text: string;
}

interface filterData {
    ATTENDANCE: Array<IFilter>;
    WORKING_CULTURE: Array<IFilter>;
    WELFARE_CULTURE: Array<IFilter>;
    TEAM_CULTURE: Array<IFilter>;
    COMPANY_CULTURE: Array<IFilter>;
    LEAVE_WORK: Array<IFilter>;
    REST: Array<IFilter>;
    SELF_IMPROVEMENT: Array<IFilter>;
}

const ATTENDANCE = [
    {
        type: 'ATTENDANCE1',
        text: '시차출근을 시행하는'
    },
    {
        type: 'ATTENDANCE2',
        text: '유연 근무를 시행하는'
    },
    {
        type: 'ATTENDANCE3',
        text: '재택근무를 시행하는'
    },
    {
        type: 'ATTENDANCE4',
        text: '통근버스를 운영하는'
    }
];

const WORKING_CULTURE = [
    {
        type: 'WORKING_CULTURE1',
        text: '원활한 협업이 되는'
    },
    {
        type: 'WORKING_CULTURE2',
        text: '결제절차가 합리적인'
    },
    {
        type: 'WORKING_CULTURE3',
        text: '보고절차가 간소한'
    },
    {
        type: 'WORKING_CULTURE4',
        text: '회의시간이 짧은'
    },
    {
        type: 'WORKING_CULTURE5',
        text: '업무권한을 부여하는'
    },
    {
        type: 'WORKING_CULTURE6',
        text: '공감 기반 목표를 수립하는'
    }
];

const WELFARE_CULTURE = [
    {
        type: 'WELFARE_CULTURE1',
        text: '사내식당을 운영하는'
    },
    {
        type: 'WELFARE_CULTURE2',
        text: '성취감을 느낄 수 있는'
    },
    {
        type: 'WELFARE_CULTURE3',
        text: '육성체계를 가지고 있는'
    },
    {
        type: 'WELFARE_CULTURE4',
        text: '공정한 평가체계를 가지고 있는'
    },
    {
        type: 'WELFARE_CULTURE5',
        text: '차별이 없는'
    },
    {
        type: 'WELFARE_CULTURE6',
        text: '공정한 보상이 있는'
    }
];

const TEAM_CULTURE = [
    {
        type: 'TEAM_CULTURE1',
        text: '직급이 없는'
    },
    {
        type: 'TEAM_CULTURE2',
        text: '동료가 믿음직한'
    },
    {
        type: 'TEAM_CULTURE3',
        text: '뛰어난 동료가 많은'
    },
    {
        type: 'TEAM_CULTURE4',
        text: '터 놓고 말할 대상이 있는'
    },
    {
        type: 'TEAM_CULTURE5',
        text: '친구같은 동료가 있는'
    },
    {
        type: 'TEAM_CULTURE6',
        text: '웃음과 유머가 넘치는'
    }
];


const COMPANY_CULTURE = [
    {
        type: 'COMPANY_CULTURE1',
        text: '경영진을 신뢰할 수 있는'
    },
    {
        type: 'COMPANY_CULTURE2',
        text: '사회공동이익을 추구하는'
    },
    {
        type: 'COMPANY_CULTURE3',
        text: '선한 영향력을 행사하는'
    },
    {
        type: 'COMPANY_CULTURE4',
        text: '사회 이익 환원을 하는'
    },
    {
        type: 'COMPANY_CULTURE5',
        text: '윤리적인 기업인'
    },
    {
        type: 'COMPANY_CULTURE6',
        text: '방향성인 명확한'
    }
];

const LEAVE_WORK = [
    {
        type: 'LEAVE_WORK1',
        text: '퇴근이 자유로운'
    },
    {
        type: 'LEAVE_WORK2',
        text: '퇴근 후 연락을 안하는'
    },
    {
        type: 'LEAVE_WORK3',
        text: 'PC OFF제를 도입한'
    },
    {
        type: 'LEAVE_WORK4',
        text: '야근수당이 있는'
    }
];

const REST = [
    {
        type: 'REST1',
        text: '휴가사용이 자유로운'
    },
    {
        type: 'REST2',
        text: '자유로운 육아휴직이 있는'
    },
    {
        type: 'REST3',
        text: '생리휴가가 있는'
    }
];

const SELF_IMPROVEMENT = [
    {
        type: 'SELF_IMPROVEMENT1',
        text: '성장의 기회가 많은'
    },
    {
        type: 'SELF_IMPROVEMENT2',
        text: '전문적인 교육을 제공하는'
    },
    {
        type: 'SELF_IMPROVEMENT3',
        text: '해외연수가 있는'
    }
];

export const filterData: filterData = {
    ATTENDANCE: ATTENDANCE,
    WORKING_CULTURE: WORKING_CULTURE,
    WELFARE_CULTURE: WELFARE_CULTURE,
    TEAM_CULTURE: TEAM_CULTURE,
    COMPANY_CULTURE: COMPANY_CULTURE,
    LEAVE_WORK: LEAVE_WORK,
    REST: REST,
    SELF_IMPROVEMENT: SELF_IMPROVEMENT
};

const FilterSliderPage = () => {
	return (
		<Layout>
            <Contents>
                <FilterSlider/>
            </Contents>
		</Layout>
	)
};

export default FilterSliderPage;
