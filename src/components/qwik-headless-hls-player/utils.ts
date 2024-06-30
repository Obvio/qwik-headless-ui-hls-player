// From https://stackoverflow.com/a/64869632
export function secondsToMMSS(secs: number) {
  const m: number = Math.floor(secs / 60);
  const s: number = secs % 60;
  const minutes: string | number = m < 10 ? "0" + m : m;
  const seconds: string | number = s < 10 ? "0" + s : s;
  return `${minutes}:${seconds}`;
}
