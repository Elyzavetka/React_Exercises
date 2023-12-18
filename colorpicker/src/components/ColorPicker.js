import React, { useState } from 'react';

export default function ColorPicker() {
    const [color, setColor] = useState();

    const divStyle = {backgroundColor: 'purple'};

    return (
        <div style={divStyle}>
            <p>The color is {color}</p>
            <button>
                Aquamarine
            </button>
            <button>
                BlueViolet
            </button>
            <button>
                Chartreuse
            </button>
            <button>
                CornflowerBlue
            </button>
        </div>
    );
}
