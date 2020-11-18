import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: sticky;
  top: 70px;
`

export const MasteryContainer = styled.div`
  display: flex;

  border-bottom: 1px solid #aaa;

  padding: 4px;
  font-size: 14px;
  line-height: 14px;

  .left{
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  .right{
    position: relative;

    .lastGame{
      position: absolute;
      right: 0;
      bottom: 0;

      font-size: 10px;
      color: #777;
    }
  }
`

export const ChampionTile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 3px;
  margin-right: 4px;

  
`

export const InfoContainer = styled.div`
  display: flex;
  flex: 1;
`

export const ChestTile = styled.img`
  width: 15px;
  height: 15px;

  position: absolute;
  top: 0;
  right: 0;
`
