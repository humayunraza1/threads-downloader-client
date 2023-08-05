import { useState } from "react";



function FAQs({ data }) {
    const [curOpen, setCurOpen] = useState(null);
    return (
        <div className="accordion">
            {data.map((el, i) => (
                <AccordionItem
                    curOpen={curOpen}
                    onOpen={setCurOpen}
                    title={el.title}
                    num={i}
                    key={el.title}
                >
                    {el.text}
                </AccordionItem>
            ))} </div>
    )
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
    const isOpen = num === curOpen;

    function handleToggle() {
        onOpen(isOpen ? null : num);
    }

    return (
        <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
            <div className="faq-title">
                <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
                <p className="title">{title}</p>
                <p className="icon">{isOpen ? "-" : "+"}</p>
            </div>

            {isOpen && <div className="content-box">{children}</div>}
        </div>
    );
}

export default FAQs;
