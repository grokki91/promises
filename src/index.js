import GameSavingLoader from './app/GameSavingLoader';

GameSavingLoader.load().then((saving) => saving, (error) => {
  throw new Error(error);
});
