import React from "react";
import ReactDOM from 'react-dom/client';
import styles from './toast.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

type ToastType = 'SUCCESS' | 'ERROR' | null;

interface ToastPopupProps {
  type?: ToastType,
  content?: string,
  onClose?: () => void
}

let timeout: NodeJS.Timeout | null = null;
const Toast = (props: ToastPopupProps) => {
  if (timeout) return;

  const el = document.getElementById('toast') as HTMLElement;
  const {type, content, onClose} = props;

  const handleClose = () => {
    onClose && onClose();
    resetTimeout();
    ReactDOM.unmountComponentAtNode(el);
  };

  timeout = setTimeout(() => {
    handleClose();
  }, 3000);

  const resetTimeout = () => {
    timeout && clearTimeout(timeout);
    timeout = null;
  };

  const toast =
    <div className={cx('toastArea', type)}>
      {content}
      <a
        className={cx('btnClose')}
        role='button'
        onClick={handleClose}
      >
        <span className={cx('hidden')}>닫기</span>
      </a>
    </div>;

  const rootNode = document.getElementById('__next');
  ReactDOM.createRoot(rootNode).render(toast, el);
};

export default Toast;
