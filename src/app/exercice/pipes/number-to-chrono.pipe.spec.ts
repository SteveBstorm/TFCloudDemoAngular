import { NumberToChronoPipe } from './number-to-chrono.pipe';

describe('NumberToChronoPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberToChronoPipe();
    expect(pipe).toBeTruthy();
  });
});
