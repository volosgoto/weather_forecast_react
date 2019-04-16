export default function pressureConverter(pressure) {
  const pascal = pressure / 0.01; // hPa
  const mmHg = pascal * 0.00750062; // to mm Hg
  return Math.round(mmHg);
}
