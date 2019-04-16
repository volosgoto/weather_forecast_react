export default function tempConverter(temp) {
  const KELVIN = 273;
  return Math.round(temp - KELVIN);
}
