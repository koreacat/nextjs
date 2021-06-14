import Header from "../header";
import FixedHeader from "../fixedHeader";
import Footer from "../footer";

const Layout = (props) => {
    return (
        <div className='layout'>
            <Header/>
            <FixedHeader/>
            	{props.children}
            <Footer/>
        </div>
    )
};

export default Layout;
