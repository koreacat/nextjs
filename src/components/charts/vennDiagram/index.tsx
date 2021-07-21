import styles from './vennDiagram.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const VennDiagram = () => {

    return (
        <div className={cx('wrap')}>
            <svg height="420" width="420" viewBox="0 0 420 420">
                <path d="M 200 32 A 120 120 0 1 0 84 236 120 120 0 0 1 164 144 120 120 0 0 1 200 32"/>
                <path d="M 200 32 A 120 120 0 0 0 164 144 120 120 0 0 1 236 144 120 120 0 0 0 200 32"/>
                <path d="M 200 32 A 120 120 0 1 1 316 236 120 120 0 0 0 236 144 120 120 0 0 0 200 32"/>
                <path d="M 200 208 A 120 120 0 0 1 84 236 120 120 0 0 1 164 144 120 120 0 0 0 200 208"/>
                <path d="M 200 208 A 120 120 0 0 1 164 144 120 120 0 0 1 236 144 120 120 0 0 1 200 208"/>
                <path d="M 200 208 A 120 120 0 0 0 316 236 120 120 0 0 0 236 144 120 120 0 0 1 200 208"/>
                <path d="M 84 236 A 120 120 0 1 0 316 236 120 120 0 0 1 200 208 120 120 0 0 1 84 236"/>
            </svg>
        </div>
    )
}

export default VennDiagram;