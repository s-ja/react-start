import React, {Fragment} from 'react';

function Header({title, hello}){
    // const title = "my-app-title";

    // 컴포넌트(모듈) 사용과 프롭스를 통한 컴포넌트간 데이터 송신
    return (
        <Fragment>
            <h1 id='mainTitle' onClick={hello} className="title py_1">{title} <i class="fa-solid fa-skull-crossbones"></i></h1>
        </Fragment>
    )
}
// 모듈 = 컴포넌트
export default Header;