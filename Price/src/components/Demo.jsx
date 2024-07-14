import proptypes from "prop-types";
const Demo=({cards})=>{
    return(
        <div>
            <div>{cards.text}</div>
        </div>
    );
};
Demo.propTypes={
    cards:proptypes.string.isRequired,
};


export default Demo;