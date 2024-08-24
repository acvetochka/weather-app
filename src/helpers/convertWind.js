export function convertWind(kmh) {
  return Math.round((kmh * 1000) / 3600);
}
