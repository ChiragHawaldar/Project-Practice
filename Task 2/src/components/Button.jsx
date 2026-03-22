

function Button ({Text,onClick }) {
    return(
        <>
            <button className="btn" onClick={onClick}>{Text}</button>
        </>
    )
}


export default Button;