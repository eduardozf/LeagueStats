import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import queues from '../../data/queueType.json';
import runes from '../../data/runesReforged.json';
import { data as spells } from '../../data/spells.json';
import { data as champions } from '../../data/champion.json';

import {
  Container,
  TopBar,
  LeftContainer,
  InfoContainer,
  StatusContainer,
  ItemContainer,
  SpellsContainer,
  InfoItem,
  RunesContainer,
  GoldContainer,
  PlayersContainer,
  RightContainer,
} from './styles';
import { FaArrowDown } from 'react-icons/fa';

const cdnPath = 'http://localhost:3333/files';

function GetLaneIcon(lane, role) {
  if (lane !== "BOTTOM") {
    return cdnPath + `/positions/${lane}.png`
  }

  if (role === "DUO_CARRY") {
    return cdnPath + `/positions/BOTTOM.png`
  }
  else {
    return cdnPath + `/positions/SUPPORT.png`
  }
}

function GetPlayedChamp(champId) {
  const champ = champions.find(champ => champ.key === champId.toString());
  return champ;
}

function GetMySummoner(summonerId, allSummoners) {
  if (!summonerId || !allSummoners) return;
  const result = allSummoners.find(summoner => summoner.identity.player.summonerId === summonerId);
  return result
}

function GetPlayerList(fullMatch) {
  const result = fullMatch.participantIdentities.map(identity => {
    const participant = fullMatch.participants.find(participant => participant.participantId === identity.participantId);
    return { identity, participant };
  });
  return result;
}

function GetTeams(teamId, allSummoners) {
  if (!teamId || !allSummoners) return;
  // eslint-disable-next-line array-callback-return
  const result = allSummoners.map(summoner => {
    if (summoner.participant.teamId === teamId) {
      const champ = GetPlayedChamp(summoner.participant.championId)
      const player = summoner.identity.player;
      return (
        <div>
          <img src={`${cdnPath}/champion/tiles/${champ.id}_0.jpg`} alt="Champion" height="18x" width="18x" title={champ.name} />
          <a href={`/?summoner=${player.summonerName}`}> {player.summonerName}</a>
        </div>
      )
    }
  })
  return result;
}

function GetRune(groupId, runeId) {
  const group = runes.find(group => group.id === groupId);
  const slot = group.slots.findIndex(slot => slot.runes.find(rune => rune.id === runeId))
  const rune = group.slots[slot].runes.find(rune => rune.id === runeId);
  if (!rune) return;
  return `${cdnPath}/${rune.icon}`;
}

function GetSpell(spellId) {
  const spell = spells.find(spell => spell.key === spellId.toString())
  if (!spell) return;
  return spell;
}

function MatchHistory({ MatchInfo, Summoner }) {
  const [fullMatch, setFullMatch] = useState();
  const [allSummoners, setAllSummoners] = useState([]);
  const [mySummoner, setMySummoner] = useState();
  const [myStats, setMyStats] = useState();
  const [win, setWin] = useState(false);
  const [playedChamp, setPlayedChamp] = useState();

  const queueType = queues.find(item => item.queueId === MatchInfo.queue);

  // Set fullMatch state
  useEffect(() => {
    api.get(`/match/${MatchInfo.gameId}`).then(response => {
      setFullMatch(response.data);
    })
  }, [MatchInfo.gameId])

  // Set allSummoners state
  useEffect(() => {
    if (!fullMatch) return;
    setAllSummoners(GetPlayerList(fullMatch));
  }, [fullMatch])

  // Set mySummoner state
  useEffect(() => {
    if (Summoner && allSummoners) {
      setMySummoner(GetMySummoner(Summoner.id, allSummoners))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Summoner.id, allSummoners])

  // Set myStats state
  // Set playedChamp state
  useEffect(() => {
    if (!mySummoner) return;
    setMyStats(mySummoner.participant.stats);
    setPlayedChamp(GetPlayedChamp(mySummoner.participant.championId));
  }, [mySummoner])

  // Set win state
  useEffect(() => {
    if (myStats) {
      setWin(myStats.win);
    }
  }, [myStats])

  return (
    <Container win={win}>
      <LeftContainer>
        <TopBar>
          <img src={GetLaneIcon(MatchInfo.lane, MatchInfo.role)} alt="Lane" width="32px" height="32px" />
          <div>{queueType && queueType.description}</div>

          <span className="gray">/ {win ? "Vitória" : "Derrota"}</span>
          <span className="gray">/ ~{fullMatch && (fullMatch.gameDuration / 60).toFixed()} min</span>
          <span className="gray">/ {MatchInfo.gameId}</span>
          <span className="gray">/ {MatchInfo.platformId}</span>
        </TopBar>

        <InfoContainer>
          <StatusContainer>
            {playedChamp &&
              <img
                src={`${cdnPath}/champion/tiles/${playedChamp.id}_0.jpg`}
                alt="Champion"
                className="playedChampion"
                height="50px"
                width="50px"
                title={playedChamp.name}
              />}
            <ItemContainer>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div>{myStats && myStats.kills}/</div>
                <div style={{ color: "#8d0801" }}>{myStats && myStats.deaths}</div>
                <div>/{myStats && myStats.assists}</div>
              </div>
              <div>
                {myStats && <>
                  <div>
                    <img src={`${cdnPath}/item/${myStats.item0}.png`} alt="Item" height="20px" width="20px" />
                    <img src={`${cdnPath}/item/${myStats.item1}.png`} alt="Item" height="20px" width="20px" />
                    <img src={`${cdnPath}/item/${myStats.item2}.png`} alt="Item" height="20px" width="20px" />
                  </div>
                  <div>
                    <img src={`${cdnPath}/item/${myStats.item3}.png`} alt="Item" height="20px" width="20px" />
                    <img src={`${cdnPath}/item/${myStats.item4}.png`} alt="Item" height="20px" width="20px" />
                    <img src={`${cdnPath}/item/${myStats.item5}.png`} alt="Item" height="20px" width="20px" />
                  </div>
                </>}
              </div>
            </ItemContainer>

            <SpellsContainer>
              {mySummoner && (
                <>
                  <img
                    src={`${cdnPath}/spell/${GetSpell(mySummoner.participant.spell1Id).image.full}`}
                    alt="Spell1"
                    height="25px"
                    width="25px"
                  />
                  <img
                    src={`${cdnPath}/spell/${GetSpell(mySummoner.participant.spell2Id).image.full}`}
                    alt="Spell2"
                    height="25px"
                    width="25px"
                  />
                </>
              )}
            </SpellsContainer>

          </StatusContainer>

          <InfoItem>
            <h3>RUNAS</h3>
            <RunesContainer>
              {myStats && (
                <>
                  <img
                    src={GetRune(myStats.perkPrimaryStyle, myStats.perk0, 0)}
                    alt="Rune"
                    height="40px"
                    width="40px"
                  />
                  <img
                    src={GetRune(myStats.perkSubStyle, myStats.perk5, 3)}
                    alt="Rune"
                    height="25px"
                    width="25px"
                  />
                </>
              )}
            </RunesContainer>
          </InfoItem>

          <InfoItem>
            <h3>OURO</h3>
            <GoldContainer>
              <img src={`${cdnPath}/public/Store.png`} alt="gold" />
              {myStats && myStats.goldEarned}
            </GoldContainer>
          </InfoItem>

          <PlayersContainer>
            <div className="left">
              {GetTeams(100, allSummoners)}
            </div>
            <div className="right">
              {GetTeams(200, allSummoners)}
            </div>
          </PlayersContainer>

        </InfoContainer>
      </LeftContainer>
      <RightContainer win={win}>
        <button><FaArrowDown /></button>
      </RightContainer>
    </Container >
  );
}

export default MatchHistory;