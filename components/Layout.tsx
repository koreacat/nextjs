import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
    return (
        <div className='layout'>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}
