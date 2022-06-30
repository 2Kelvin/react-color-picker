const ButtonColor = ({ color, setBgColor }) => {
  
    return (
        <button
            onClick={ () => setBgColor(color) }
            className="color"
            style={{ backgroundColor: color }}
        ></button>
    );
}

export default ButtonColor;