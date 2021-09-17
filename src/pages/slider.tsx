import Layout from "@components/layout";
import Header from "@components/header";
import FixedHeader from "@components/fixedHeader";
import Contents from "@components/contents";
import Slider from "@components/slider";
import { useState } from "react";

const SliderPage = () => {
	const [value, setValue] = useState(3);
	const [options, setOptions] = useState({
		min: 1,
		max: 10,
		step: 1
	});

	const { min, max, step } = options;

	const onChange = (e) => {
		const { value, name } = e.target;
		setOptions({
			...options,
			[name]: Number(value)
		})
	}

	const marksDifficult = {
		1: '낮음',
		4: '보통',
		10: '높음'
	}

	const marksSalary = {
		1000: '1,000 만원',
		10000: '1억원 이상'
	}

	return (
		<Layout>
			<Header/>
            <FixedHeader/>
			<Contents>
				<div>
					<span>min</span>
					<input
						type="number"
						name="min"
						value={min}
						onChange={onChange}
					/>
				</div>

				<div>
					<span>max</span>
					<input
						type="number"
						name="max"
						value={max}
						onChange={onChange}
					/>
				</div>

				<div>
					<span>step</span>
					<input
						type="number"
						name="step"
						value={step}
						onChange={onChange}
					/>
				</div>

				<div>
					<span>value : </span>
					<input value={value} onChange={e => setValue(Number(e.target.value))}/>
					<span>{value}</span>
				</div>

				<div style={{ width: '262px' }}>
					<Slider
						disabled={false}
						min={min}
						max={max}
						step={step}
						value={value}
						marks={marksDifficult}
						onChange={value => setValue(value)}
					/>
				</div>

			</Contents>
		</Layout>
	)
};

export default SliderPage;
