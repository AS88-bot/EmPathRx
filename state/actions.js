import { calculateRisk } from '../utils/riskIndex';
import { moodWeights } from '../utils/moodMap';
import { getEmpatheticResponse } from '../services/bedrockService';

export const analyzeDiabetes = (context) => {
  const riskIndex = calculateRisk(context.glucose, 110, 15, moodWeights[context.mood] || 0);
  if (riskIndex > 2) return 'ALERT';
  return 'DONE';
};

export const analyzeAsthma = (context) => {
  const riskIndex = calculateRisk(context.peakFlow, 400, 50, moodWeights[context.mood] || 0);
  if (riskIndex > 2) return 'ALERT';
  return 'DONE';
};

export const analyzePCOS = (context) => {
  const riskIndex = calculateRisk(context.weight, 150, 20, moodWeights[context.mood] || 0);
  if (riskIndex > 2) return 'ALERT';
  return 'DONE';
};

export const sendEmpatheticAlert = async () => {
  const prompt = "We noticed a spike. You're not alone—want to talk or log again?";
  await getEmpatheticResponse(prompt);
};
