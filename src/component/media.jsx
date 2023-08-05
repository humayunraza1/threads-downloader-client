
import FileDownload from "js-file-download"


function Media({ image, username, caption, mediaType, download }) {

    function handleDownload() {
        const imageUrl = `http://localhost:8006/${download}`
        fetch(imageUrl)
            .then(response => response.blob())
            .then(blob => {
                // Download the image using the Blob data
                if (mediaType === "photos") {
                    FileDownload(blob, `${username}-${Date.now()}.jpg`);
                } else if (mediaType === "video") {
                    FileDownload(blob, `${username}-${Date.now()}.mp4`);
                }
            })
            .catch(error => {
                console.error('Failed to download the image: ', error);
            });
    }

    return (
        <div className="container">
            <div className="info-container">

                {mediaType === "photos" && <img src={`${image}`} alt={`${username}'s photo`} />}
                {mediaType === "video" && <video src={image} alt={`${username}'s video`} />}

            </div>
            <div className="post-info">
                <div className="username">
                    <h3>{username}</h3>
                </div>
                <div className="other-info">

                    <p>Caption: {caption}</p>
                    <p style={{ color: "grey", fontSize: "14px" }}>Type: {mediaType} </p>
                    <div className="download-container">
                        <button className="download-btn" onClick={handleDownload}>Download</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Media
