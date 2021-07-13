import React from "react";
import ReactDOM from "react-dom";
import styles from './alert.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

interface AlertProps {
	content?: React.ReactElement | string;
	dimmed?: boolean;
	onOk?: (e: React.MouseEvent) => void;
	onClickBgClose?: boolean
}

const Alert = (props: AlertProps) => {
	const el = document.getElementById('alert') as HTMLElement;

	const {
		content,
		dimmed,
		onOk,
		onClickBgClose
	} = props;

	const handleOk: React.MouseEventHandler = e => {
		handleClose();
		onOk?.(e);
	};

	const handleClose = () => ReactDOM.unmountComponentAtNode(el);
	const handleBgClose = () => onClickBgClose && handleClose();
	const stopPropagation: React.MouseEventHandler = e => e.stopPropagation();

	const alert =
		<div className={cx('alert', dimmed && 'dimmed')} onClick={handleBgClose}>
			<div className={cx('layerAlert')} onClick={stopPropagation}>
				<span className={cx('alertText')}>
					{content}
				</span>
				<button onClick={handleOk} className={cx('btnConfirm')} type='button'>확인</button>
			</div>
		</div>;

	ReactDOM.render(alert, el);
};

export default Alert;
