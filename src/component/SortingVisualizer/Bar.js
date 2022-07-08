import { useState, useEffect } from "react";
import './Bar.css'

const Bars= ({index, length, colorKey, changeArray}) => {

    const [len, setlen] = useState(length);

    useEffect(()=>{
        setlen(length);
    }, [length])


    const colors = ['#ffb6c1', '#ff00ff', '#00ff7f', '#ffa500','#0000ff'];

    let barStyle = {
        background: colors[colorKey],
        height: length,
        marginTop: 200 - length 
    }

    let textStyle = {
        width: length,
        position: 'relative',
        bottom: '2rem',
        // top: -Math.floor(length/4),
        left: -Math.floor(length / 2) + 11
    }

    let quantityBtnStyle = {
        top: length - 10,
        width: '25px'
    }

    const handleChange = (e) => {
        let val = e.target.value;
        if(val === ''){
            setlen(0);
            changeArray(index, 0);
        }
        else{
            val = parseInt(val);
            if(val>200){
                setlen(200);
                changeArray(index, 200);
            }
            else{
                setlen(val);
                changeArray(index, val);
            }
        }
    }

    // const increment = () => {
    //     setlen(len + 1);
    //     changeArray(index, len + 1);
    // }

    // const decrement = () => {
    //     setlen(len - 1);
    //     changeArray(index, len - 1);
    // }

    return (
        <div className="bar" style={barStyle}>
            <input type="number" style={textStyle} className="text" value={len} onChange={handleChange} />
            <input className="quantity-btn" style={quantityBtnStyle} type="number" value={len} onChange={handleChange} />
        </div>
    );
}

export default Bars;