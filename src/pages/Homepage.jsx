import { useState, useEffect } from "react"
import Media from "../component/media";
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from "../component/Header";
import Footer from "../component/Footer";
import CustomLoader from "../component/CustomLoader";
import FAQs from "../component/FAQs";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1ae5d2",
        }
    },
});

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


function Homepage() {
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [tData, setTdata] = useState([])
    const [thumbnailUrl, setThumbnailUrl] = useState(null);
    const [Files, setFiles] = useState([]);
    const [isReady, setIsReady] = useState(false);
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const onAnimationEnd = () => {
            setShowText(true);
        };
        const imageContainer = document.querySelector('.image-container');
        imageContainer.addEventListener('animationend', onAnimationEnd);
        return () => {
            imageContainer.removeEventListener('animationend', onAnimationEnd);
        };
    }, []);

    let filepath = [];
    function handleChange(e) {
        const { value } = e.target;
        setInput(value);
    }
    async function handleSubmit() {
        setIsReady(false)
        setThumbnailUrl([]);
        if (input === "") return
        if (!input.includes("threads.net")) return alert("Invalid Link!");
        setIsLoading(true);
        try {
            const res = await fetch("http://144.126.208.29:80/media", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ input })
            })
            if (!res.ok) {
                setIsLoading(false)
                return console.log("Unknown error")
            }
            const { postData, mediaFiles } = await res.json();
            setIsLoading(false)
            setTdata(postData.media)
            filepath = mediaFiles.map((media) => {
                return media.filePath;
            })  // check if it is an array and implement checks accordingly 
            // console.log(postData.media)
            // fetchThumbnail(filepath)
            setFiles(filepath);
            console.log("file path: ", filepath)
            console.log("filepath: ", filepath)
            const links = filepath.map((url) => fetchThumbnail(url));
            console.log("tData: ", tData)
            setIsReady(true)
        } catch (err) {
            setIsLoading(false);
            console.log(err);
        }
    }


    const fetchThumbnail = async (url) => {
        const thumbnailUrl = `http://localhost:8006/${url}`;

        try {
            const response = await fetch(thumbnailUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const blob = await response.blob(); // Convert the response to a blob
            const imageUrl = URL.createObjectURL(blob); // Create a temporary URL for the blob

            // Set the imageUrl in the state to display the thumbnail image
            setThumbnailUrl((url) => [...url, imageUrl])

        } catch (error) {
            console.error('Error fetching thumbnail:', error);
        }
    };

    // function extractLink(link) {
    //     const blobUrl = link;

    //     const startIndex = blobUrl.indexOf("http");
    //     const extractedLink = blobUrl.substring(startIndex);

    //     return extractedLink; // Output: "http://localhost:3000/90898c38-82d1-49cd-ac87-dc1703f86d87"

    // }

    function handlePasteButtonClick() {
        if (navigator.clipboard) {
            navigator.clipboard.readText()
                .then(text => {
                    setInput(text);
                })
                .catch(err => {
                    console.error('Failed to read clipboard contents: ', err);
                });
        } else {
            console.error('Clipboard API is not supported in this browser.');
        }
    };
    return (
        <div>
            <div className="main-tool">

                <Header />
                <div className="title-container">
                    <div className="image-container">
                        <img src="https://seeklogo.com/images/T/threads-by-instagram-logo-20008C5295-seeklogo.com.png?v=638252100920000000" alt="Thread.net logo" />
                    </div>
                    <div className="text-container">
                        <h1>Download Media From Threads.net</h1>
                    </div>
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit()
                }} method="POST">
                    <div className="input-wrapper">
                        <input type="text" value={input} onChange={(e) => { handleChange(e) }} placeholder="Paste your link here.."></input>
                        <div className="form-btns">
                            <a className="paste-btn" onClick={handlePasteButtonClick} disabled={isLoading}><ContentPasteIcon /></a>
                            <button className="go-btn" type="submit" disabled={isLoading}>GO</button>
                        </div>
                    </div>
                </form>
            </div>
            <>
                <div className="body-wrapper">
                    <div className="media-container">
                        {/* {isLoading &&
                            <ThemeProvider theme={theme}>
                                <Box sx={{ width: '50%' }}>
                                    <LinearProgress />
                                </Box>
                            </ThemeProvider>
                        } */}
                        {isLoading && <CustomLoader />}
                        {isReady &&
                            thumbnailUrl.map((url, index) => {
                                return <Media mediaType={tData[0].type} caption={tData[0].caption} username={tData[0].user.username} image={url} download={Files[index]} alt={`${tData[0].user.username}'s photo`} key={index} />
                            })
                        }
                        <div className="home-faq">
                            <h2>Frequently Asked Questions</h2>
                            <FAQs data={faqs} />
                        </div>
                    </div>
                    <Footer />
                </div>
            </>
        </div>
    )
}

export default Homepage;
