import GameSavingLoader from '../app/GameSavingLoader';

const expectedResult = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

test(('Check class GameSavingLoader'), async (done) => {
  const saving = await GameSavingLoader.load();
  expect(saving).toBe(expectedResult);
  done();
});
