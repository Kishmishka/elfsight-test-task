import styled from 'styled-components';
import { PopupEpisodes } from './PopupEpisodes';
import { PopupHeader } from './PopupHeader';
import { PopupInfo } from './PopupInfo';
import { useEffect } from 'react';

export function Popup({ settings: { visible, content }, setSettings }) {
  const {
    name,
    gender,
    image,
    status,
    species,
    type,
    origin,
    location,
    episode: episodes
  } = content;

  function addKeydownListener(event) {
    if (event.code === 'Escape') {
      togglePopup();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', addKeydownListener);
    return () => {
      document.removeEventListener('keydown', addKeydownListener);
    };
  }, []);

  function togglePopup(e) {
    setSettings((prevState) => ({
      ...prevState,
      visible: !prevState.visible
    }));
    document.body.style.overflow = 'auto';
  }

  return (
    <PopupContainer visible={visible} onClick={togglePopup}>
      <PopupContent onClick={(e) => e.stopPropagation()}>
        <CloseIcon onClick={togglePopup} />
        <PopupHeader
          name={name}
          gender={gender}
          image={image}
          status={status}
          species={species}
          type={type}
        />
        <PopupInfo origin={origin} location={location} />
        <PopupEpisodes episodes={episodes} />
      </PopupContent>
    </PopupContainer>
  );
}

const PopupContainer = styled.div`
  position: fixed;
  z-index: 10;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100vh;
  color: #fff;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
  pointer-events: none;
  transition: opacity 0.3s, visible 0.3s;

  ${({ visible }) =>
    visible &&
    `
      opacity: 1;
      visibility: initial;
      pointer-events: all;
    `}
`;

const PopupContent = styled.div`
  max-height: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 400px;
  position: relative;
  margin: 0 auto;
  max-height: 90vh;
  margin-top: calc(15vh - 20px);
  background: #263750;
  border-radius: 15px;
  padding: 20px;
  border: 2px solid #83bf46;

  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 777px) {
    margin-top: calc(10vh - 20px);
  }
  @media (max-width: 777px) {
    max-width: 300px;
  }
`;

const CloseIcon = styled.div`
  cursor: pointer;
  position: absolute;
  top: -10px;
  right: -10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #83bf46aa;
  transition: 0.3s;
  &:before,
  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 20px;
    height: 2px;
    background: #fff;
  }

  &:before {
    left: 4.5px;
    transform: rotate(-45deg);
  }

  &:after {
    right: 4.5px;
    transform: rotate(45deg);
  }

  ${window.screen.width < 930 && 'right: calc(10% - 10px)'};
  ${window.screen.width < 600 && 'right: calc(3% - 10px)'};
  &:hover {
    background-color: #83bf46;
  }
`;
