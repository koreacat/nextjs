import Header from "../header/Header";
import Footer from "../footer/Footer";
import Contents from "../contents/Contents";
import FixedHeader from "../fixedHeader/FixedHeader";

export default function Layout(props) {
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
}
