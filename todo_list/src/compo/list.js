import React from 'react'


function List({planName, id, Delete}) {;

    const onDelete= () => {
        console.log(id);
        Delete(id);
    }
    
    const onEdit = () => {
        console.log(id+'것은 에딧안의 아이디');
        const Answer = prompt('수정 값을 입력하세요',"")
        console.log(Answer);
        planName = Answer;
        List({Answer, id, Delete});
    }


    return (
        <>
        <hr style={{border:'solid 2px gray', width: '100%;'}}></hr>
        <div> 
            
            <h1 style={{fontSize:'1.2rem'}}>{planName}</h1>
            <button style={{padding:'1%', border:'none', marginLeft:'4px'}}onClick={() =>{onEdit(planName,id);}}>수정</button>
            <button style={{padding:'1%', border:'none', marginLeft:'5px'}}onClick={onDelete}>삭제</button>
    
        </div>
        </>
    )
}

export default List

