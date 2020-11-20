import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import {
  Container,
  HistoryContainer,
  MainContainer,
  LoadingContainer,
  UserHeader,
  RankCards,
  UserData,
  LeftSide,
  RightSide,
  ShowMoreGames,
} from './styles';
import MatchHistory from '../../components/MatchHistory';
import NavBar from '../../components/NavBar';
import RankCard from '../../components/RankCard';
import Masterys from '../../components/Masterys';

const cdnPath = 'http://localhost:3333/files';
const urlParams = new URLSearchParams(window.location.search);
const searchUser = urlParams.get('summoner');

function Home() {
  const [rank, setRank] = useState([]);
  const [history, setHistory] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [user, setUser] = useState({});

  // On Document Ready, set loading to false
  useEffect(() => {
    if (document.readyState === 'complete') {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [document.readyState])

  // Update page title
  useEffect(() => {
    document.title = "League Stats - " + searchUser;
  }, [searchUser])

  // Get UserData
  useEffect(() => {
    api.get(`/user/${searchUser}`).then(response => {
      setUser(response.data);
    })
  }, [])

  // Get Ranking
  useEffect(() => {
    api.get(`/ranking/${user.id}`).then(response => {
      setRank(response.data);
    })
  }, [user])

  // Get History
  useEffect(() => {
    api.get(`/history/${user.accountId}?endIndex=10&beginIndex=0`).then(response => {
      setHistory(response.data.matches);
    })
  }, [user])

  // Show 10 more games
  function GetMoreGames() {
    const begin = history.length;
    const end = (history.length + 10);
    api.get(`/history/${user.accountId}?endIndex=${end}&beginIndex=${begin}`).then(response => {
      setHistory(old => [...old, ...response.data.matches])
    })
  }

  return (
    <>
      <NavBar />
      <Container bg={`${cdnPath}/public/Background.jpg`}>
        {isLoading ? (
          <LoadingContainer>
            <div class="lds-facebook"><div></div><div></div><div></div></div>
          </LoadingContainer>
        ) : (
            <MainContainer>
              <UserHeader>
                <div className="accountInfo">
                  <div className="userInfoContainer">
                    <div className="BorderContainer">
                      <img
                        src={user && `${cdnPath}/profileicon/${user.profileIconId}.png`}
                        alt="Summoner"
                        style={{ width: '80px', height: '80px', borderRadius: '10px' }}
                      />
                      <img
                        src={user && `${cdnPath}/public/LevelBorder.png`}
                        className="levelBg"
                        alt="User Level"
                        height="25px" width="auto"
                      />
                      <span className="level">{user.summonerLevel}</span>
                    </div>
                    <div className="infoContainer">
                      <span>{user.name}</span>

                      <div className="accountContainer">
                        <div><span>Encrypted Summoner Id:</span> {user.id}</div>
                        <div><span>ACCOUNT_ID:</span> {user.accountId}</div>
                        <div><span>PUUID:</span> {user.puuid}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <RankCards>
                  {rank.length >= 1 && rank.map((rank, index) => <RankCard rankData={rank} key={index} />)}
                </RankCards>
              </UserHeader>

              <UserData>
                <LeftSide>
                  <Masterys Summoner={user} />
                </LeftSide>

                <RightSide>
                  <HistoryContainer>
                    {history && history.map(match => (
                      <MatchHistory MatchInfo={match} Summoner={user} key={match.gameId} />
                    ))}
                    <ShowMoreGames onClick={() => { GetMoreGames() }}>
                      Mostrar mais...
                    </ShowMoreGames>
                  </HistoryContainer>
                </RightSide>
              </UserData>
            </MainContainer>
          )}
      </Container >

    </>
  );
}

export default Home;