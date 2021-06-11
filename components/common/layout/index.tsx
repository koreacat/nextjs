import Header from "../header";
import FixedHeader from "../fixedHeader";
import Contents from "../contents";
import Footer from "../footer";
import styles from './layout.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const Layout = (props) => {
    return (
        <div className='layout'>
            <Header/>
            <FixedHeader/>
			<Contents>
				{props.children}
			</Contents>
            <Footer/>
        </div>
    )
};

export default Layout;
