import Header from "./Header";
import Footer from "./Footer";
import Contents from "./Contents";
import FixedHeader from "./FixedHeader";

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
