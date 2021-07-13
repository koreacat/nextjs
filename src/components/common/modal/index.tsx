import React, {useEffect} from "react";
import Portal from "../portal";
import styles from "./modal.module.scss";
import classnames from 'classnames/bind';

const bodyScrollHidden = (isHidden: boolean) => {
	const windowWidth = window.innerWidth;
	const bodyWidth = document.body.clientWidth;
	const scrollWidth = windowWidth - bodyWidth;

	if(isHidden && (scrollWidth !== 0)) {
		document.body.style.overflow = 'hidden';
		document.body.style.marginRight = `${scrollWidth}px`;
	} else {
		document.body.style.overflow = 'inherit';
		document.body.style.marginRight = '0px';
	}
};

const cx = classnames.bind(styles);

export interface ModalProps {
	visible?: boolean;
	dimmed?: boolean;
	children?: React.ReactNode | string;
	onClickBg?: React.MouseEventHandler;
}

const Modal = (props: ModalProps) => {
	const {
		visible,
		dimmed = true,
		children,
		onClickBg
	} = props;

	useEffect(() => {
		const isBodyScrollHidden = !!visible;
		bodyScrollHidden(isBodyScrollHidden);
		return (() => {
			bodyScrollHidden(false);
		})
	},[visible]);

	const handleClickBg: React.MouseEventHandler = e => onClickBg?.(e);
	const stopPropagation: React.MouseEventHandler = e => e.stopPropagation();

	return (
		<>
			{visible && (
				<Portal selector="#modal">
					<div className={cx('modal', dimmed && 'dimmed')} onClick={handleClickBg}>
						<div className={cx('modalLayer')} onClick={stopPropagation}>
							{children}
						</div>
					</div>
				</Portal>
			)}
		</>
	)
};

export default Modal;
