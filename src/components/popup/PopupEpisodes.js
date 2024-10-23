import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Loader } from '../common';
import arrowNext from '../../assets/icons/arrow-next.svg';
import arrowPrew from '../../assets/icons/arrow-prev.svg';

const API_EPISODES_URL = 'https://rickandmortyapi.com/api/episode';

export function PopupEpisodes({ episodes }) {
  const [series, setSeries] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [episodePageCount, setepisodePageCount] = useState(0);
  const [currentEpisodePage, setCurrentEpisodePage] = useState(1);

  const countElementOnPage = 1;

  useEffect(() => {
    if (!episodes?.length) {
      return;
    }

    setIsFetching(true);

    const episodesIds = episodes.map((ep) => ep.match(/\d+$/)[0]);

    axios
      .get(`${API_EPISODES_URL}/${episodesIds.join(',')}`)
      .then(({ data }) => {
        if (episodes.length === 1) {
          setSeries([data]);
        } else {
          setSeries(data);
        }
        setCurrentEpisodePage(1);
        setepisodePageCount(Math.ceil(episodes.length / countElementOnPage));
        setIsFetching(false);
      });
  }, [episodes]);

  function nextPage() {
    if (currentEpisodePage < episodePageCount)
      setCurrentEpisodePage((prev) => prev + 1);
  }

  function prevPage() {
    if (currentEpisodePage > 1) setCurrentEpisodePage((prev) => prev - 1);
  }

  if (isFetching) {
    return <Loader />;
  }

  return (
    <PopupEpisodesContent>
      <PopupEpisodesTitle>Participated in episodes:</PopupEpisodesTitle>
      <PopupEpisodesContainer episodePageCount={episodePageCount}>
        {episodePageCount <= 1 || (
          <PopupEpisodesArrow
            onClick={() => prevPage()}
            width="40px"
            src={arrowPrew}
          />
        )}
        <StyledPopupEpisodes _length={series.length}>
          {series
            .slice(
              currentEpisodePage * countElementOnPage - countElementOnPage,
              currentEpisodePage * countElementOnPage
            )
            ?.map(({ id, name, episode }) => (
              <Episode
                key={id}
                _length={series.length}
                episodePageCount={episodePageCount}
              >
                <EpisodeMarking>
                  {episode
                    .replace(/S0?(\d+)/, 'Season $1 - ')
                    .replace(/E0?(\d+)/, 'Ep. $1')}
                </EpisodeMarking>
                {name}
              </Episode>
            ))}
        </StyledPopupEpisodes>
        {episodePageCount <= 1 || (
          <PopupEpisodesArrow
            onClick={() => nextPage()}
            width="40px"
            src={arrowNext}
          />
        )}
      </PopupEpisodesContainer>
    </PopupEpisodesContent>
  );
}

const PopupEpisodesContent = styled.div`
  width: 100%;
`;
const PopupEpisodesTitle = styled.span`
  font-size: 19px;
  color: white;
  @media (max-width: 777px) {
    font-size: 17px;
  }
`;
const PopupEpisodesArrow = styled.img`
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.2);
  }
`;
const PopupEpisodesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({ episodePageCount }) =>
    episodePageCount <= 1 ? 'start' : 'space-between'};
`;
const StyledPopupEpisodes = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
`;

const Episode = styled.p`
  font-size: 18px;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: ${({ episodePageCount }) =>
    episodePageCount <= 1 ? 'start' : 'center'};
  padding: 10px 0;
  @media (max-width: 777px) {
    font-size: 16px;
  }
`;

const EpisodeMarking = styled.span`
  text-align: center;
  margin-bottom: 8px;
  color: #83bf46;
`;
