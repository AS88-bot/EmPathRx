export function calculateRisk(vital, target, sd, moodWeight) {
  return (vital - target) / sd + moodWeight;
}
