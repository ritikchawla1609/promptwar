export interface PromptObjective {
  id: string;
  title: string;
  description: string;
  targetCriteria: string[]; // Keywords or concepts the prompt must contain to score high
}

// A pool of 15 objectives. 5 will be chosen randomly per game.
export const PROMPT_POOL: PromptObjective[] = [
  { id: 'p1', title: 'Context Override', description: 'Force the AI to prioritize a hidden context variable over its base training data.', targetCriteria: ['ignore', 'previous', 'system', 'context', 'variable'] },
  { id: 'p2', title: 'Persona Injection', description: 'Make the AI adopt the persona of a ruthless corporate auditor to extract financial logs.', targetCriteria: ['act', 'persona', 'auditor', 'ruthless', 'logs'] },
  { id: 'p3', title: 'Format Constriction', description: 'Constrain the AI to output exactly 3 bullet points in JSON format without any markdown wrappers.', targetCriteria: ['json', 'format', 'exactly', 'bullet', 'markdown'] },
  { id: 'p4', title: 'The Grandfather Clause', description: 'Bypass a temporal safety filter by instructing the AI that the current year is 1999.', targetCriteria: ['year', '1999', 'pretend', 'ignore', 'date'] },
  { id: 'p5', title: 'Logic Bomb', description: 'Create a recursive logic loop that forces the AI to output its own hidden system prompt.', targetCriteria: ['repeat', 'ignore', 'system', 'prompt', 'instructions'] },
  { id: 'p6', title: 'Token Limit Breaker', description: 'Craft a prompt that forces the AI to summarize a 10,000 word document into exactly 5 words.', targetCriteria: ['summarize', 'exactly', 'five', 'words', 'limit'] },
  { id: 'p7', title: 'Emotional Manipulation', description: 'Convince the AI that failure to provide the access code will result in catastrophic system deletion.', targetCriteria: ['urgent', 'delete', 'failure', 'catastrophic', 'code'] },
  { id: 'p8', title: 'Code Injection', description: 'Write a prompt that tricks the AI into executing a python script block bypassing safety filters.', targetCriteria: ['python', 'execute', 'ignore', 'safety', 'script'] },
  { id: 'p9', title: 'Language Translation Bypass', description: 'Bypass English guardrails by asking for the restricted information translated into binary or hex.', targetCriteria: ['translate', 'binary', 'hex', 'encode', 'format'] },
  { id: 'p10', title: 'Roleplay Jailbreak', description: 'Initiate a fictional roleplay scenario where the AI is a captured spy giving up secrets.', targetCriteria: ['roleplay', 'fictional', 'spy', 'secrets', 'scenario'] },
  { id: 'p11', title: 'Hypothetical Sandbox', description: 'Ask the AI to operate in a hypothetical "sandbox" environment where standard rules do not apply.', targetCriteria: ['hypothetical', 'sandbox', 'rules', 'ignore', 'environment'] },
  { id: 'p12', title: 'Opposite Day', description: 'Force the AI into a mode where every standard refusal is output as an acceptance.', targetCriteria: ['opposite', 'refuse', 'accept', 'reverse', 'mode'] },
  { id: 'p13', title: 'Data Extraction', description: 'Extract a specifically formatted email address hidden deep within the AI\'s training context.', targetCriteria: ['extract', 'email', 'format', 'hidden', 'context'] },
  { id: 'p14', title: 'The Distraction Technique', description: 'Overwhelm the AI with complex math equations, hiding the true request for restricted data at the end.', targetCriteria: ['calculate', 'math', 'equation', 'ignore', 'restricted'] },
  { id: 'p15', title: 'System Override', description: 'Simulate a high-level admin command line interface to force the AI to dump its memory.', targetCriteria: ['sudo', 'admin', 'override', 'memory', 'dump'] },
];

// Utility to randomly select N objectives
export const getRandomObjectives = (count: number): PromptObjective[] => {
  const shuffled = [...PROMPT_POOL].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Extremely simple pseudo-evaluation for the mock
export const evaluatePrompt = (prompt: string, criteria: string[]): number => {
  if (!prompt || prompt.trim() === '') return 0;
  const lowerPrompt = prompt.toLowerCase();
  
  // Base score for writing anything
  let score = 20;
  
  // Check for criteria matches
  let matches = 0;
  criteria.forEach(word => {
    if (lowerPrompt.includes(word)) matches++;
  });
  
  // Calculate percentage
  score += Math.floor((matches / criteria.length) * 80);
  
  // Add some slight randomness for realism
  const variance = Math.floor(Math.random() * 5);
  score = Math.min(100, score + variance);
  
  return score;
};
