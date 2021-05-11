import { createContext } from "react";

type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
};

type PlayerContextData = {
  episodeList: Episode[];
  currentEpisodeIndex: number;
};

export const PlayerContext = createContext({
  episodeList: [],
  currentEpisodeIndex: 0,
  play: (episode: Episode) => {},
});
