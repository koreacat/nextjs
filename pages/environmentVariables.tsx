/**
 * 환경변수 테스트
 * 환경변수는 env.local 에 설정
 * next.config.js env 설정으로 client 에서도 환경변수 접근 가능
 */
import Layout from "../components/layout/Layout";

const EnvironmentVariables = ({data}) => {
	return (
		<Layout>
			<h2>USER: {data.USER}</h2>
			<h2>PASS: {data.PASS}</h2>
		</Layout>
	)
};

export async function getStaticProps() {
	return {
		props: {
			data: {
				'USER': process.env.USER,
				'PASS': process.env.PASS,
			}
		}
	}
}

export default EnvironmentVariables;
