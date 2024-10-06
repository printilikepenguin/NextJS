import React, { createContext, useContext, useState } from "react";
import {
  BarSongTitle,
  BottomBar,
  Button,
  PlayList,
  Song,
  SongTitle,
} from "./styles.js";
import { songList } from "./constants.js";

const buttonLabels = ["Not replaying", "Replaying all", "Replaying one"];
// Context 생성
const PlayerContext = createContext();

// Provider 컴포넌트
const PlayerProvider = ({ children }) => {
  const [currentMode, setCurrentMode] = useState(0); // 0: Not replaying, 1: Replaying all, 2: Replaying one
  const [activeSongId, setActiveSongId] = useState(null);
  const [activeSongTitle, setActiveSongTitle] = useState("");
  const [activeSongAuthor, setActiveSongAuthor] = useState("");

  return (
    <PlayerContext.Provider
      value={{
        songList,
        buttonLabels,
        currentMode,
        setCurrentMode,
        activeSongId,
        setActiveSongId,
        activeSongTitle,
        setActiveSongTitle,
        activeSongAuthor,
        setActiveSongAuthor,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

// Context 사용을 위한 훅
const usePlayerContext = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayerContext must be used within a PlayerProvider");
  }
  return context;
};

const ControlBar = () => {
  const {
    activeSongTitle,
    activeSongAuthor,
    currentMode,
    setCurrentMode,
    songList,
    activeSongId,
    setActiveSongId,
  } = usePlayerContext();

  const handleNext = () => {
    const currentIndex = songList.findIndex((song) => song.id === activeSongId);
    if (currentMode === 0) {
      // Not replaying
      if (currentIndex < songList.length - 1) {
        setActiveSongId(songList[currentIndex + 1].id);
        setActiveSongTitle(songList[currentIndex + 1].title);
        setActiveSongAuthor(songList[currentIndex + 1].author);
      }
    } else if (currentMode === 1) {
      // Replaying all
      const nextIndex = (currentIndex + 1) % songList.length;
      setActiveSongId(songList[nextIndex].id);
      setActiveSongTitle(songList[nextIndex].title);
      setActiveSongAuthor(songList[nextIndex].author);
    }
  };

  const handlePrevious = () => {
    const currentIndex = songList.findIndex((song) => song.id === activeSongId);
    if (currentMode === 0) {
      // Not replaying
      if (currentIndex > 0) {
        setActiveSongId(songList[currentIndex - 1].id);
        setActiveSongTitle(songList[currentIndex - 1].title);
        setActiveSongAuthor(songList[currentIndex - 1].author);
      }
    } else if (currentMode === 1) {
      // Replaying all
      const previousIndex =
        (currentIndex - 1 + songList.length) % songList.length;
      setActiveSongId(songList[previousIndex].id);
      setActiveSongTitle(songList[previousIndex].title);
      setActiveSongAuthor(songList[previousIndex].author);
    }
  };

  const handleModeChange = () => {
    setCurrentMode((currentMode + 1) % 3); // 0 -> 1 -> 2 -> 0
  };

  const title =
    activeSongTitle && activeSongAuthor
      ? `${activeSongAuthor} - ${activeSongTitle}`
      : "";

  return (
    <BottomBar>
      <BarSongTitle data-testid="barTitle">{title}</BarSongTitle>
      <div>
        <Button data-testid="previousButton" onClick={handlePrevious}>
          Previous
        </Button>
        <Button data-testid="nextButton" onClick={handleNext}>
          Next
        </Button>
        <Button data-testid="currentModeButton" onClick={handleModeChange}>
          {buttonLabels[currentMode]}
        </Button>
      </div>
    </BottomBar>
  );
};

const Songs = () => {
  const {
    songList,
    activeSongId,
    setActiveSongId,
    setActiveSongTitle,
    setActiveSongAuthor,
  } = usePlayerContext();

  const handleClick = (id, title, author) => {
    setActiveSongId(id);
    setActiveSongTitle(title);
    setActiveSongAuthor(author);
  };

  return (
    <PlayList>
      {songList.map(({ id, title, author }) => (
        <Song key={id} onClick={() => handleClick(id, title, author)}>
          <SongTitle data-testid={id} active={activeSongId === id}>
            {title}
          </SongTitle>
          <p>{author}</p>
        </Song>
      ))}
    </PlayList>
  );
};

const App = () => {
  return (
    <PlayerProvider>
      <main data-testid="mainPart">
        <Songs />
        <ControlBar />
      </main>
    </PlayerProvider>
  );
};

export default App;
