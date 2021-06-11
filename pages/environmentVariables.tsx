/**
 * 환경변수 테스트
 * 환경변수는 env.local 에 설정
 * next.config.js env 설정으로 client 에서도 환경변수 접근 가능
 */
import Index from "../components/common/layout";

const EnvironmentVariables = ({data}) => {
	return (
		<Index>
			<h2>USER: {data.USER}</h2>
			<h2>PASS: {data.PASS}</h2>
		</Index>
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
