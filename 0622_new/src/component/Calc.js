// import React from 'react';
import React, {Fragment, useState} from 'react';

function Calc(){
    const[centimeter, setCentimeter]=useState("0")
    // const[inch, setInch]=useState("0")

    const [status,setStatus]=useState(true);
    
    const handleCentimeter = (e) => {
        // e.preventDefault();
        setCentimeter(e.target.value);
    }
    // const handleInch = (e) => {
    //     // e.preventDefault();
    //     setInch(e.target.value);
    // }

    const handleSubmit = (e) =>{
        e.preventDefault();
        // setInch(centimeter / 2.54);
    }

    const resetInput = () =>{
        setCentimeter("");
        // setInch("변환된 인치값이 표시됩니다.");
    }

    const switchInput = () =>{
        setStatus(!status)
    }

    return (
        <Fragment>
            <h1 className='title py_1'>cm / inch 단위환산</h1>
            <p style={{fontSize:'.825em'}}>cm 를 inch로 환산하는 앱</p>
            <form className='flex' onSubmit={handleSubmit} >
                <label>
                    {/* 삼항조건연산자를 활용 */}
                    <input type="number" value={status ? centimeter * 2.54 : centimeter}  onChange={handleCentimeter} disabled={status} placeholder='cm'/>
                    cm
                </label>
                <label>
                    <input type="number" value={!status ? centimeter / 2.54 : centimeter} onChange={handleCentimeter} disabled={!status} placeholder='inch' />
                    inch
                </label>
                {/* <input type="submit" value="환산"/> */}
                <input type="reset" onClick={resetInput} value="초기화"/>
                <input type="submit" onClick={switchInput} value="입력반전"/>
            </form>
        </Fragment>
    )
}
// 모듈 = 컴포넌트
export default Calc;