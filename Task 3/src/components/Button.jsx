

function Button({text , onClick, className}) {
    return (

        <button className={`btn ${className}`}  >{text}</button>
    )
}

export default Button;