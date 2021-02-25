import Head from "next/head"
import {useEffect, useState} from "react";

export class Employee {
	id: string;
	name: string;

	constructor(id?: string, name?: string) {
		this.id = id;
		this.name = name;
	}
}

function A({ employee01 }) {
	const [employee02, setEmployee02] = useState(new Employee());

	useEffect(() => {
		const getRs = async () => {
			const rs: Employee = await getData();
			setEmployee02(new Employee(rs.id, rs.name));
		};
		getRs();
	});


	return (
        <div>
            <Head>
                <title>A</title>
                <meta name="a" content="a" />
            </Head>
            <h1>A</h1>
			<div>
				<strong>Static generation</strong>
				<div>id: {employee01.id}</div>
				<div>name: {employee01.name}</div>
			</div>
			<hr/>
			<div>
				<strong>CSR</strong>
				<div>id: {employee02.id}</div>
				<div>name: {employee02.name}</div>
			</div>
        </div>
    )
}

//static generation
export async function getStaticProps() {
	const employee01 = await employ(new Employee('jgm0531', '지경민'), 0);

	return {
		props: {
			employee01,
		},
	};
}

export async function getData(): Promise<Employee> {
	const employee02 = await employ(new Employee('kj9966', '바블'), 2000);
	return employee02;
}

export async function employ(employee: Employee, timeout: number) {
	return await new Promise<Employee>((resolve, reject) => {
		setTimeout(() => {
			resolve({
				id: employee.id,
				name: employee.name
			});
		}, timeout)
	});
}

export default A;
