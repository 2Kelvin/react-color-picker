import ButtonColor from "./ButtonColor";

const ColorPicker = ({ setBgColor }) => {
    const colors = ["#c14741", "#333cfc", "#4b4541", "violet", "#eb8c04", "#9f9f9f", "#fe1900", "#00c543", "dodgerblue", "peru", "white", "black"];

    return (
        <ul className="colorList">
            {
            colors.map(color => (
                <ButtonColor
                    setBgColor={setBgColor}
                    color={color}
                    key={color}
                />
            ))}
        </ul>
    );
}

export default ColorPicker;