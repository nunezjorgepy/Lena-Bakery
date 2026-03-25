import './ButtonComponent.css'

function ButtonComponent(props) {
    const { text, onClick, disabled, type } = props
    return (
        <button 
            className={`primary-btn ${props.className}`}
            onClick={onClick} 
            disabled={disabled} 
            type={type}
        >
            {text}
        </button>
    )
}

export default ButtonComponent