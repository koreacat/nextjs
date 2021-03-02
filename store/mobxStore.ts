import {observable} from "mobx";

export default class MobxStore {
	@observable private _type;
	@observable private _age;

	constructor() {
		this.init();
		this.load();
	}

	init  = () => {
		setTimeout(() => {
			this.setType('코숏(init)');
			this.setAge(1);
		}, 1000)
	};

	load = async () => {
		const data = await getCat();
		this.setAge(data.age);
		this.setType(data.type);
	};

	get type(): string {
		return this._type;
	}

	setType = (value: string) => {
		this._type = value;
	};

	get age(): number {
		return this._age;
	}

	setAge = (value: number) => {
		this._age = value;
	};
}

class Cat {
	type: string;
	age: number;
}

export async function getCat() {
	return await new Promise<Cat>((resolve, reject) => {
		setTimeout(() => {
			resolve({
				type: '러시안블루(CSR)',
				age: 2
			});
		}, 2000)
	});
}
