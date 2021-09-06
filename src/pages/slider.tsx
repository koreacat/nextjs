import Layout from "@components/layout";
import Contents from "@components/contents";
import Slider from "@components/slider";
import {useState} from "react";

const SliderPage = () => {
	const [value, setValue] = useState(50);
	const onChange = (value) => {
		setValue(value);
	};

	return (
		<Layout>
			<Contents>

				<div style={{width: '300px'}}>
					<Slider
						min={1}
						max={100}
						value={value}
						onChange={onChange}
					/>
				</div>

			</Contents>
		</Layout>
	)
};

export default SliderPage;
