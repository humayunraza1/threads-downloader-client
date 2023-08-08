import Footer from "../component/Footer"
import Header from "../component/Header"
import TermsCondition from "../component/TermsCondition"

function TC() {
    return (
        <>
            <Header />
            <div className="page-title">
                <h1>Terms & Conditions</h1>
            </div>
            <TermsCondition />
            <Footer />
        </>
    )
}

export default TC
