export enum LOCATION {
	SO = 'SEOUL',
	GG = 'GYEONGGI',
	IC = 'INCHEON',
	BS = 'BUSAN',
	DG = 'DAEGU',
	GJ = 'GWANGJU',
	DJ = 'DAEJEON',
	US = 'ULSAN',
	SJ = 'SEJONG',
	GW = 'GANGWON',
	CN = 'CHUNGNAM',
	GN = 'GYEONGNAM',
	GB = 'GYEONGBUK',
	JN = 'JEONNAM',
	JB = 'JEONBUK',
	CB = 'CHUNGBUK',
	JJ = 'JEJU',
}

export const LocationNameMap: Record<LOCATION, string> = {
	[LOCATION.SO]: '서울특별시',
	[LOCATION.GG]: '경기도',
	[LOCATION.IC]: '인천광역시',
	[LOCATION.BS]: '부산광역시',
	[LOCATION.DG]: '대구광역시',
	[LOCATION.GJ]: '광주광역시',
	[LOCATION.DJ]: '대전광역시',
	[LOCATION.US]: '울산광역시',
	[LOCATION.SJ]: '세종특별자치시',
	[LOCATION.GW]: '강원도',
	[LOCATION.CN]: '충청남도',
	[LOCATION.GN]: '경상남도',
	[LOCATION.GB]: '경상북도',
	[LOCATION.JN]: '전라남도',
	[LOCATION.JB]: '전라북도',
	[LOCATION.CB]: '충청북도',
	[LOCATION.JJ]: '제주특별자치도',
};

export type LOCATION_TYPE =
	| LOCATION.SO
	| LOCATION.GG
	| LOCATION.IC
	| LOCATION.BS
	| LOCATION.DG
	| LOCATION.GJ
	| LOCATION.DJ
	| LOCATION.US
	| LOCATION.SJ
	| LOCATION.GW
	| LOCATION.CN
	| LOCATION.GN
	| LOCATION.GB
	| LOCATION.JN
	| LOCATION.JB
	| LOCATION.CB
	| LOCATION.JJ;

export const ALL_LOCATIONS: Array<LOCATION_TYPE> = Object.values(LOCATION);

export const getIsAllLocations = (locations: LOCATION_TYPE[]) => {
	const locationSet = new Set(locations);
	return ALL_LOCATIONS.length === locationSet.size;
};
