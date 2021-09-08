import Layout from "@components/layout";
import Contents from "@components/contents";
import Slider from "@components/slider";
import {useState} from "react";

const SliderPage = () => {
	const [value, setValue] = useState(0);
	const [options, setOptions] = useState({
		min: 0,
		max: 1,
		step: 0.2
	});

	const {min, max, step} = options;

	const onChange = (e) => {
		const {value, name} = e.target;
		setOptions({
			...options,
			[name]: Number(value)
		})
	}

	return (
		<Layout>
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
					<span>{value}</span>
				</div>
			
				<div style={{width: '500px'}}>
					<Slider
						min={min}
						max={max}
						step={step}
						value={value}
						onChange={value => setValue(value)}
					/>
				</div>

			</Contents>
		</Layout>
	)
};

export default SliderPage;
