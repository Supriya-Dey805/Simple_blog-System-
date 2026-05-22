import CustomNavbar from "./CustomNavbar";
import Footer from "./Footer";

const Base = ({title = "welcome to our website", children})=>{

    return(

        <div
            className="container-fluid p-0 m-0"
            style={{
                minHeight:"100vh"
            }}
        >

            <CustomNavbar />

            {children}

            <Footer />

        </div>
    );
}

export default Base;