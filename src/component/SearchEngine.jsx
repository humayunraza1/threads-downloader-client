import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import styles from './SearchEngine.module.css'


function SearchEngine({ handleSubmit, input, handleChange, isLoading, handlePasteButtonClick }) {
    return (
        <div>
            {/* <img className={styles.notShape} src="../resources/wave-1.svg" alt='wave-1' />
                 */}
            <div className={styles.ocean}>
                <div className={`${styles.wave} ${styles.wave1}`}></div>
                <div className={`${styles.wave} ${styles.wave2}`}></div>
                <div className={`${styles.wave} ${styles.wave3}`}></div>

            </div>
            {/* <img className={styles.notShape} src="../resources/wave-2.svg" alt='wave-2' /> */}
            {/* <img className={styles.Shape} src="../resources/wave-3.svg" alt='wave-3' /> */}
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
    )
}

export default SearchEngine
