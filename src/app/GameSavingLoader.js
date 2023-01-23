import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    const data = read(); // возвращается Promise!
    return data.then((response) => response).then((value) => json(value)).catch((error) => {
      new Error(error);
    });
  }
}
