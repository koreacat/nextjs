import classnames from "classnames/bind";
import { CSSProperties, useEffect } from "react";
import styles from "./selectList.module.scss";

const cx = classnames.bind(styles);

interface ISelectItemProps {
    name: string;
    isSelected: (name: string) => boolean;
    toggleSelected: (name: string) => void;
    itemStyle?: CSSProperties;
}

const SelectItem = (
    {
        name,
        isSelected,
        toggleSelected,
        itemStyle
    }: ISelectItemProps) => {

    return (
        <li
            onClick={() => toggleSelected(name)}
            className={cx('item', {'selected': isSelected(name)})}
            style={itemStyle}
        >
            {name}
        </li>
    )
}

interface ISelectListProps {
    list: Array<string>;
    selectList: Array<string>;
    setSelectList: (prev) => void | Array<string>;
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

    const isSelected = (name: string) => {
        return selectList.includes?.(name);
    };

    const toggleSelected = (name: string) => {
        if (selectList.includes?.(name)) {
			setSelectList(selectList.filter(itemName => itemName !== name))
		} else {
			setSelectList([...selectList, name]);
		}
    }

    const listEl = list.map((name, index) =>
        <SelectItem
            key={index}
            name={name}
            isSelected={isSelected}
            toggleSelected={toggleSelected}
            itemStyle={itemStyle}
        />
    );

    return (
        <div className={cx('wrap')}>
            <ul className={cx('selectList')} style={listStyle}>
                {listEl}
            </ul>
        </div>
    )
};

export default SelectList;