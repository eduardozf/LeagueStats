import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--black);
  background: #ddd;
  border-radius: 4px;

  margin: 0 20px;
  padding: 6px;
  box-shadow: 0 0 16px #ababab;
`

export const RankEmblem = styled.img`
  height: 120px;
  width: 120px;
`

export const RankDetailContainer = styled.div`

  margin-left: 20px;
  margin-right: 10px;

  .queueType{
    font-weight: bold;
    font-size: 18px;
  }
`

export const CustomRange = styled.div`
  display: flex;
  flex: 1;
  height: 14px;

  background: #999;
  border-radius: 4px;
  margin: 3px 0;

  position: relative;
  overflow: hidden;

  .fill{
    display: flex;
    flex: 1;

    position: absolute;
    left: 0;
    right: ${props => props.value ? `${(100 - props.value)}%` : '100%'};
    top: 0;
    bottom: 0;

    background: var(--green);
  }
  .displayValue{
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    font-size: 12px;
    color: #fff;
  }
`

export const WinLoseContainer = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 15px;

  .wins{
    color: #31c544;
    font-weight: bold;
  }
  .losses{
    color: #ff5151;
    font-weight: bold;
  }

  div{
    span{
      margin: 4px;
    }
  }
`
