import React, {useState} from "react";


function ColorPicker(){

    const [color, setColor] = useState();

    function UpdateColor(event){
        setColor(event.target.value)
    }

    return(
        <div className = "color-container">
            <h1>Color Picker</h1>
            <div className = "selected-color" style = {{backgroundColor:color}}>
                <p>Selected Color: {color}</p>
            </div>

                <label>Select a Color</label>
                <input type = "color" value = {color} onChange = {UpdateColor} />
        </div>
    );
}

export default ColorPicker