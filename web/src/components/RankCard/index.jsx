import React from 'react';

import { Container, RankEmblem, RankDetailContainer, CustomRange, WinLoseContainer } from './styles';

const cdnPath = 'http://localhost:3333/files';

function RankCard({ rankData }) {
  return (
    <Container>
      {rankData !== undefined &&
        <RankEmblem src={`${cdnPath}/emblem/Emblem_${rankData.tier}_${rankData.rank}.png`} alt="Emblem" />
      }
      <RankDetailContainer>
        <span className="queueType">{rankData !== undefined && rankData.queueType.split('_').join(' ')}</span>
        <div>
          <span>{rankData !== undefined && rankData.tier}</span>
          <span style={{ marginLeft: '6px' }}>{rankData !== undefined && rankData.rank}</span>
          <CustomRange value={rankData !== undefined && rankData.leaguePoints}>
            <div className="fill" />
            <span className="displayValue">{rankData !== undefined && rankData.leaguePoints} PDL</span>
          </CustomRange>
        </div>
        <WinLoseContainer>
          <span className="wins">WINS</span>
          <div>
            <span className="wins">{rankData !== undefined && rankData.wins}</span>
                -
                <span className="losses">{rankData !== undefined && rankData.losses}</span>
          </div>
          <span className="losses">LOSSES</span>
        </WinLoseContainer>
      </RankDetailContainer>
    </Container>
  );
}

export default RankCard;