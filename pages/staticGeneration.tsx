import Head from "next/head"
import {useEffect, useState} from "react";
import axios from "axios";
import Layout from "../components/layout/Layout";

/**
 * static generation 테스트
 * getStaticProps 메서드로 static generation 구현
 */

export class Employee {
	id: string;
	name: string;

	constructor(id?: string, name?: string) {
		this.id = id;
		this.name = name;
	}
}

interface EmployInfoProps {
	title: string,
	id: string,
	name: string
}

const EmployeeInfo = (props: EmployInfoProps) => {
	return (
		<div>
			<strong>{props.title}</strong>
			<div>id: {props.id}</div>
			<div>name: {props.name}</div>
		</div>
	)
};

interface StaticGenerationProps {
	data: {
		employee01: Employee
	}
}

function StaticGeneration({ data }: StaticGenerationProps) {
	const { employee01 } = data;
	const [employee02, setEmployee02] = useState(new Employee());

	useEffect(() => {
		(async () => {
			const rs = await getData();
			setEmployee02(new Employee(rs.data.id, rs.data.name));
		})();
	}, []);

	return (
        <Layout>
            <Head>
                <title>Static Generation</title>
                <meta name="Static Generation" content="Static Generation" />
            </Head>
            <h1>Static Generation</h1>
			<EmployeeInfo
				title={'Static Generation'}
				id={employee01.id}
				name={employee01.name}
			/>
			<hr/>
			<EmployeeInfo
				title={'CSR'}
				id={employee02.id}
				name={employee02.name}
			/>
        </Layout>
    )
}

//static generation
export async function getStaticProps() {
	return {
		props: {
			data : {
				employee01: await employ(new Employee('jgm0531', '지경민'), 0)
			}
		}
	}
}

export function getData() {
	return axios.get<Employee>(`http://localhost:8080/api/employ`);
	// return await employ(new Employee('kj9966', '바블'), 2000);
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

export default StaticGeneration;
