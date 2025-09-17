

function Emojis(props) {
    const { emoji, text } = props;
    const emojis = emoji === "hearts" ? <span className='welcome-emojis'>🧡🧡🧡</span> :
                   emoji === "stars" ? <span className='welcome-emojis'>✨✨✨</span> :
                    <span className='welcome-emojis'>🍞🍞🍞</span>

    return (
        <div className="bg-emojis">
            <div className="emojis">
                {emojis}
            </div>
            <div className="welcome-p-container">
                <p className='welcome-p'>{text}</p>
                
            </div>
            <div className="emojis">
                {emojis}
            </div>
        </div>
    )
}

export default Emojis