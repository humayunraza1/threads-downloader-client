import FAQs from "../component/FAQs"
import Footer from "../component/Footer"
import Header from "../component/Header"

const faqs = [
    {
        title: "Where are these chairs assembled?",
        text:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
    },
    {
        title: "How long do I have to return my chair?",
        text:
            "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
    },
    {
        title: "Do you ship to countries outside the EU?",
        text:
            "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
    }
];

function FAQ() {
    return (
        <>
            <Header />
            <div className="page-title">
                <h1>Frequently Asked Questions</h1>
            </div>
            <div className="faq-container">
                <FAQs data={faqs} />
            </div>
            <Footer />
        </>
    )
}

export default FAQ
