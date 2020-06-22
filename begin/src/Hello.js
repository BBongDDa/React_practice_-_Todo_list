import React from 'react';

function Hello({color, name, isSpecial}) {

return <div style={{
    color : color
}}><br/>
{isSpecial ? <b>*</b> : <b>!!</b>}
안녕하세요 &nbsp;<button style={{
    color : color
}}>{name}</button></div>;
}

Hello.defaultProps = {
    name : '이름없음',
}
export default Hello;