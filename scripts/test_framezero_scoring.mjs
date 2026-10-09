/**
 * Automated Regression & Integrity Suite for Frame Zero Scoring Engine
 * Verifies that:
 * 1. "its very goof" and gibberish receive 0/100 (and 0 for consistency).
 * 2. Empty inputs receive 0/100.
 * 3. Lantern-only prompt receives only lantern points, NOT emotion/composition/lighting.
 * 4. Missing emotion receives 0 for emotion.
 * 5. Full cinematic prompt receives high score (>85/100).
 * 6. Contradictions (e.g. sunny sky in storm) are penalized.
 */

import assert from 'node:assert';
import { evaluateDirectorPrompt } from '../round 3/src/engine/directorEvaluator.ts';
import { MISSIONS } from '../round 3/src/data/missions.ts';

console.log('🧪 Starting Frame Zero Scoring Engine Verification Suite...\n');

let totalTests = 0;
let passedTests = 0;

function test(name, fn) {
  totalTests++;
  try {
    fn();
    console.log(`  ✅ PASS: ${name}`);
    passedTests++;
  } catch (err) {
    console.error(`  ❌ FAIL: ${name}`);
    console.error(`     Error: ${err.message}`);
    process.exitCode = 1;
  }
}

const lastPromise = MISSIONS[0]; // The Last Promise

test('CRITICAL BUG FIX: "its very goof" receives 0/100 and 0 for consistency', () => {
  const result = evaluateDirectorPrompt('its very goof', lastPromise);
  assert.strictEqual(result.totalScore, 0, `Total score should be 0, received ${result.totalScore}`);
  assert.strictEqual(result.categoryScores.consistency.earned, 0, `Consistency should be 0, received ${result.categoryScores.consistency.earned}`);
  assert.strictEqual(result.categoryScores.elements.earned, 0);
  assert.strictEqual(result.categoryScores.emotion.earned, 0);
  assert.strictEqual(result.categoryScores.composition.earned, 0);
  assert.strictEqual(result.categoryScores.lighting.earned, 0);
});

test('Empty prompt receives 0/100 and 0 for all categories', () => {
  const result = evaluateDirectorPrompt('   ', lastPromise);
  assert.strictEqual(result.totalScore, 0);
  assert.strictEqual(result.categoryScores.consistency.earned, 0);
});

test('Random unrelated text receives 0/100 and 0 for consistency', () => {
  const result = evaluateDirectorPrompt('banana pancake helicopter quantum physics', lastPromise);
  assert.strictEqual(result.totalScore, 0);
  assert.strictEqual(result.categoryScores.consistency.earned, 0);
});

test('Lantern-only prompt receives only lantern element points and no emotion/comp/lighting', () => {
  const result = evaluateDirectorPrompt('A paper lantern hangs quietly.', lastPromise);
  // Lantern is worth 9 points in elements
  assert.strictEqual(result.categoryScores.elements.earned, 9, `Elements should be 9, got ${result.categoryScores.elements.earned}`);
  assert.strictEqual(result.categoryScores.emotion.earned, 0, 'Emotion must be 0');
  assert.strictEqual(result.categoryScores.composition.earned, 0, 'Composition must be 0');
  assert.strictEqual(result.categoryScores.lighting.earned, 0, 'Lighting must be 0');
  // Consistency should be small scaled credit, not full 10
  assert(result.categoryScores.consistency.earned <= 3, `Consistency should be <= 3, got ${result.categoryScores.consistency.earned}`);
});

test('Prompt with elements but missing emotion receives 0 for emotion', () => {
  const result = evaluateDirectorPrompt('A lone swordsman stands on the temple roof during a violent rain storm holding a glowing lantern.', lastPromise);
  assert(result.categoryScores.elements.earned >= 25, 'Elements should be well credited');
  assert.strictEqual(result.categoryScores.emotion.earned, 0, 'Emotion must be 0 when no emotion keywords exist');
});

test('Comprehensive cinematic prompt receives high score (>85/100)', () => {
  const prompt = 'A lone swordsman shields a glowing paper lantern beneath ancient temple eaves as heavy rain lashes the slate rooftop. A low-angle cinematic wide shot frames him against the storm with atmospheric depth, warm amber lantern glow cutting through cool blue rainfall, conveying quiet resolve and fierce determination with unwavering hope.';
  const result = evaluateDirectorPrompt(prompt, lastPromise);
  assert(result.totalScore >= 85, `High quality prompt score should be >= 85, got ${result.totalScore}`);
  assert(result.categoryScores.elements.earned >= 30, 'Elements high');
  assert(result.categoryScores.emotion.earned >= 15, 'Emotion high');
  assert(result.categoryScores.composition.earned >= 15, 'Composition high');
  assert(result.categoryScores.lighting.earned >= 10, 'Lighting high');
  assert.strictEqual(result.categoryScores.consistency.earned, 10, 'Consistency full');
  assert.strictEqual(result.detectedContradictions.length, 0);
});

test('Contradictory scene prompt is penalized in consistency', () => {
  const prompt = 'A swordsman on a temple rooftop under bright sunshine clear sky laughing hysterically in torrential rain.';
  const result = evaluateDirectorPrompt(prompt, lastPromise);
  assert(result.detectedContradictions.length > 0, 'Contradictions must be detected');
  assert(result.categoryScores.consistency.earned < 5, 'Consistency penalized heavily');
});

console.log(`\n========================================`);
console.log(`Summary: ${passedTests}/${totalTests} Tests Passed successfully!`);
console.log(`========================================\n`);

if (process.exitCode) {
  process.exit(process.exitCode);
}
