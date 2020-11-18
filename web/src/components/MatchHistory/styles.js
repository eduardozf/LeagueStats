import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  width: 700px;
  margin: 4px 0;

  background: ${props => props.win ? '#A3CFEC' : '#E2B6B3'};
  border: 1px solid ${props => props.win ? '#4aa1d2' : '#d67b77'};
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const TopBar = styled.div`
  display: flex;
  align-items: center;

  padding: 4px;
  span{
    margin-left: 6px;
  }
  .gray{
    font-size: 13px;
    color: #555;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 6px 0;
`

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 24px;

  .playedChampion{
    border-radius: 4px;
  }
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 8px;
  img{
    margin: 0 1px;
    border-radius: 3px;
  }
`

export const SpellsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    margin: 2px 0;
  }
`

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100px;
  height: 80px;
`

export const RunesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    filter: drop-shadow(0 0 4px #000);
  }
`

export const GoldContainer = styled.div`
  display: flex;
  align-items: baseline;

  margin: 8px 0;
  img{
    width: 20px;
    height: 20px;

    filter: drop-shadow(0 0 4px #000);
    margin-right: 6px;
  }
`

export const PlayersContainer = styled.div`
  display: flex;
  font-size: 12px;
  margin-right: 10px;
  
  div{
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    a{
      text-decoration: none;
      color: #000;
      :hover{
        color: var(--purple);
      }
    }
  }

  .right{ margin-left: 8px;}
`

export const RightContainer = styled.div`
  display: flex;
  button{
    color: ${props => props.win ? '#00639D' : '#C6443E'};
    background: ${props => props.win ? '#64B1E4' : '#E89D99'};
    border-left: 1px solid ${props => props.win ? '#4aa1d2' : '#d67b77'};
    padding: 0 10px;
    cursor: pointer;
  }
`
