import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { data as champions } from '../../data/champion.json';

import { Container, MasteryContainer, InfoContainer, ChampionTile, ChestTile } from './styles';

const cdnPath = 'http://localhost:3333/files';

function GetPlayedChamp(champId) {
  const champ = champions.find(champ => champ.key === champId.toString());
  return champ;
}

function Masterys({ Summoner }) {
  const [allMasterys, setAllMasterys] = useState([]);


  //Get summoner Masterys
  useEffect(() => {
    api.get(`/mastery/${Summoner.id}`).then(response => {
      setAllMasterys(response.data);
    })
  }, [Summoner.id])

  return (
    <Container>
      <h3>Maestrias</h3>
      <div style={{ border: "1px solid #606060", borderRadius: "4px" }}>
        {allMasterys.slice(0, 10).map(mastery => (
          <MasteryContainer>
            <div>
              <ChampionTile src={`${cdnPath}/champion/tiles/${GetPlayedChamp(mastery.championId).id}_0.jpg`} alt="" />
            </div>
            <InfoContainer>
              <div className="left">
                <h4>{GetPlayedChamp(mastery.championId).name}</h4>
                <div>
                  Maestria <b>{mastery.championLevel}</b>
                </div>
                <div>
                  Pontos <b>{mastery.championPoints}</b>
                </div>
              </div>

              <div className="right">
                <div>
                  {mastery.chestGranted ? '' : (
                    <ChestTile
                      src={`${cdnPath}/public/chest.png`}
                      alt="chest"
                      title="Disponível"
                    />
                  )}
                </div>
                <div className="lastGame">
                  {new Date(mastery.lastPlayTime).toLocaleDateString()}
                </div>
              </div>
            </InfoContainer>

          </MasteryContainer>
        ))}
      </div>
    </Container>
  )
}

export default Masterys;