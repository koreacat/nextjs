import classnames from "classnames/bind";
import {CSSProperties, useEffect} from "react";
import styles from "./selectList.module.scss";

const cx = classnames.bind(styles);

interface ISelectItemProps {
	name: string;
    value: string;
    isSelected: boolean;
	toggleSelected: (name: string) => void;
	itemStyle?: CSSProperties;
}

const SelectItem = (
	{
		name,
        value,
		isSelected,
		toggleSelected,
		itemStyle
	}: ISelectItemProps) => {

	return (
		<li
			onClick={() => toggleSelected(value)}
			className={cx('item', {'selected': isSelected})}
			style={itemStyle}
		>
			<a>{name}</a>
		</li>
	)
};

interface ISelectListProps {
	list: string[];
	selectList: string[];
	setSelectList: (prev: string[]) => void | string[];
	listStyle?: CSSProperties;
	itemStyle?: CSSProperties;
}

const SelectList = (
	{
		list,
		selectList,
		setSelectList,
		listStyle,
		itemStyle
	}: ISelectListProps) => {

	const isSelected = (value: string) => {
		return selectList.includes(value);
	};

	const toggleSelected = (value: string) => {
		if (selectList.includes(value)) {
			setSelectList(selectList.filter(itemValue => itemValue !== value))
		} else {
			setSelectList([...selectList, value]);
		}
	};

	const listEl = list?.map((value, index) =>
		<SelectItem
			key={index}
            value={value}
			name={value}
			isSelected={isSelected(value)}
			toggleSelected={toggleSelected}
			itemStyle={itemStyle}
		/>
	);

	return (
		<ul className={cx('selectList')} style={listStyle}>
			{listEl}
		</ul>
	)
};

export default SelectList;
