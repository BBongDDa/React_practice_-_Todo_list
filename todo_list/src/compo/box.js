import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  min-width: 350px;
  width: 37vw;
  height: 100vh;

  position: relative; 
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;

  margin-top: 35px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

const MadeBy = styled.div`
  position : relative;
  left : -180px;
  font-size : 1rem;
  margin-top: 2rem;
  .react22{
    color : aqua;
  }
`;

function TodoTemplate({ children }) {
  return(
     <> <MadeBy>Made by <span className="react22">React</span></MadeBy> 
     <TodoTemplateBlock>{children}</TodoTemplateBlock> </>
  )
}

export default TodoTemplate;