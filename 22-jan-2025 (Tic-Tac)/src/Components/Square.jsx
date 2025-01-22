
function Square({value,ClickSubmit}){
    return(
        <>
            <button className="square"
            onClick={ClickSubmit}
            >{value}</button>
        </>
    )
};
export default Square;