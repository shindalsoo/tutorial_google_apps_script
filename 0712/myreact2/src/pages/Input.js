import React, {useState} from "react";

const Input = () => {
    const [txtValue, setTxtValue] = useState("");

    const hosung = (e) => {
        setTxtValue(e.target.value);
    }

    return (
        <div>
            <input type="text" value={txtValue} onChange={hosung}/>
            <br/>
            <p>
                결과
                <br/>
                {txtValue}
            </p>
        </div>
    );
}

export default Input;