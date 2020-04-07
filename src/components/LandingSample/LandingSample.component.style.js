import styled from 'styled-components';

export const SampleDiv = styled.div`
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 2px #3E4960 solid;
  position: relative;

  img{
    display:block;  
    width: 100%;
  }
  .overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.15s ease;
  }

  &:hover{
    .overlay{
      opacity: 1;
      visibility: visible;
    }
  }
` 

export const SampleWrapper = styled.div`
  width: 50%;
  padding: 20px;
`
