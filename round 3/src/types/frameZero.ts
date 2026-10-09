export type DifficultyLevel = 'Novice' | 'Intermediate' | 'Advanced' | 'Master';

export interface ConceptRequirement {
  id: string;
  label: string;
  category: 'element' | 'emotion' | 'composition' | 'lighting';
  primaryTerms: string[];
  synonyms: string[];
  description: string;
  weight: number;
}

export interface ContradictionRule {
  id: string;
  conflictingTerms: string[];
  explanation: string;
  penalty: number;
}

export interface Mission {
  id: string;
  title: string;
  japaneseTitle: string;
  tagline: string;
  difficulty: DifficultyLevel;
  difficultyStars: number;
  durationMinutes: number;
  maxAttempts: number;
  palette: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
  brief: {
    synopsis: string;
    actionRequirement: string;
    emotionRequirement: string;
    environmentRequirement: string;
    lightingRequirement: string;
    compositionRequirement: string;
  };
  requirements: ConceptRequirement[];
  contradictions: ContradictionRule[];
  defaultFeedback: {
    excellent: string;
    good: string;
    needsWork: string;
  };
}

export interface CategoryScore {
  name: string;
  earned: number;
  max: number;
  percentage: number;
  explanation?: string;
  evidence?: string[];
}

export interface EvaluationResult {
  totalScore: number;
  categoryScores: {
    elements: CategoryScore;
    emotion: CategoryScore;
    composition: CategoryScore;
    lighting: CategoryScore;
    consistency: CategoryScore;
  };
  satisfiedRequirements: string[];
  missingRequirements: string[];
  detectedContradictions: string[];
  feedbackNotes: string[];
  directorRank: string;
  promptWordCount: number;
  isLocked: boolean;
}

export interface PromptAttempt {
  attemptNumber: number;
  prompt: string;
  timestamp: string;
  evaluation: EvaluationResult;
}
