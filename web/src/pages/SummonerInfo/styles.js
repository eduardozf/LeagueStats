import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Space Grotesk', sans-serif;
  position: relative;

  background-image: url(${props => props.bg});
  background-size: 20%;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
  margin: 120px 0;
  background: #f0f0f0;
  box-shadow: 0 0 30px #000;

  .accountInfo{
    display: flex;
    flex: 1;
    .userInfoContainer{
      display: flex;
      position: relative;
      align-items: center;
      margin-bottom: 10px;

      .BorderContainer {
        position: relative;
        .levelBg{
          position: absolute;
          left: 20%;
          top: 65px;
        }
        .level{
          position: absolute;
          left: 28px;
          top: 68px;

          color: var(--gold);
        }
      }

      .infoContainer{
        display: flex;
        margin-left: 8px;
        span{
          font-size: 22px;
          font-weight: bold;
        }
      }

      .accountContainer{
        display: none;
        position: absolute;
        width: 700px;

        padding: 10px;
        background: #A3CFEC;
        div{
          font-size: 12px;
          color: #777;
        }
        span{
          font-size: 14px;
          font-weight: bold;
          color: #000;
        }
      }
      &:hover{
        .accountContainer{
          display: block;
          left: 120px;
          z-index: 2;
        }
      }
    }
    
  }
`

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;

  margin-top: 60px;
  background: #f0f0f0;
  box-shadow: 0 0 30px #000;

  .lds-facebook {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-facebook div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: var(--green);
    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  .lds-facebook div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }
  .lds-facebook div:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }
  .lds-facebook div:nth-child(3) {
    left: 56px;
    animation-delay: 0;
  }
  @keyframes lds-facebook {
    0% {
      top: 8px;
      height: 64px;
    }
    50%, 100% {
      top: 24px;
      height: 32px;
    }
  }
`

export const UserHeader = styled.div`
  display: flex;
`

export const UserData = styled.div`
  display: flex;
`

export const RankCards = styled.div`
  display: flex;
`

export const LeftSide = styled.div`
  width: 300px;
  padding: 10px;
`

export const RightSide = styled.div`
  min-width: 600px;
  padding: 10px;
`

export const ShowMoreGames = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  margin-top: 22px;
  padding: 12px 0;

  font-size: 16px;
  font-weight: bold;
  
  background: #fff;
  border: 1px solid #aaa;
  cursor: pointer;

  :hover{
    background: var(--green);
    color: white;
    border: 1px solid var(--green);
  }
`

export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`
