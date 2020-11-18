import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 60px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 10;

  background: var(--navy-blue);

  .logo{
    display: flex;
    flex: 1;
    margin-left: 60px;

    img{
      filter: invert(100%);
    }
  }
  .serachBar{
    display: flex;
    height: 40px;
    margin-right: 60px;

    input{
      width: 200px;
      padding-left: 20px;
      border-radius: 4px 0 0 4px ;
      font-size: 14px;
      border: 2px solid #fff;
      border-right: none;

      &:focus{
        border: 2px solid var(--green);
        border-right: none;
      }
    }

    button{
      display:flex;
      justify-content: center;
      align-items: center;

      width: 40px;
      border-radius: 0 4px 4px 0;
      background: var(--green);
      color: #fff;

      font-size: 18px;
      cursor: pointer;

      &:hover{
        filter: brightness(1.2);
        svg{
          transform: scale(1.2);
        }
      }
    }
  }

`;
