import { PROJECTS, EXPERIENCE } from "./data";

// Extra keywords/aliases so a skill can be matched against
// project tags or experience text even if the wording differs a bit.
const SKILL_ALIASES: Record<string, string[]> = {
  "JavaScript": ["javascript", "js", "react", "node.js", "next.js"],
  "TypeScript": ["typescript", "ts"],
  "Node.js": ["node.js", "node", "express"],
  "React": ["react"],
  "Next.js": ["next.js", "nextjs"],
  "HTML": ["html"],
  "CSS": ["css", "tailwind", "bootstrap"],
  "Tailwind CSS": ["tailwind"],
  "Bootstrap": ["bootstrap"],
  "MySQL": ["mysql", "sql", "database"],
  "MongoDB": ["mongodb", "mongo"],
  "Firebase": ["firebase"],
  "Python": ["python"],
  "Java": ["java"],
  "PHP": ["php"],
  "Express": ["express"],
  "Electronic Medical Records": ["ehr", "electronic health record", "electronic patient records", "medical records"],
  "Health Information Systems": ["health information", "health ict", "healthcare systems", "digital health"],
  "Medical Data Standards": ["medical data", "patient records", "clinical data"],
  "Data Analytics": ["data analytics", "data management"],
  "Machine Learning": ["machine learning", "ai ", " ai", "predictive"],
  "Power BI": ["power bi"],
  "Tableau": ["tableau"],
  "Git": ["git"],
  "GitHub": ["github"],
  "Docker": ["docker"],
  "VS Code": ["vs code", "visual studio code"],
  "Android Studio": ["android studio", "android"],
};

function getKeywords(skillName: string): string[] {
  const alias = SKILL_ALIASES[skillName];
  return [skillName.toLowerCase(), ...(alias ?? [])];
}

function textIncludesAny(text: string, keywords: string[]): boolean {
  const lower = text.toLowerCase();
  return keywords.some((k) => lower.includes(k));
}

const BASE_LEVEL = 40;        // "familiar" baseline
const PROJECT_BONUS = 18;     // hands-on project usage = strong signal
const EXPERIENCE_BONUS = 8;   // mentioned in work/education = weaker signal
const MAX_LEVEL = 98;

/**
 * Automatically calculates a skill's proficiency % based on how many
 * PROJECTS and EXPERIENCE entries reference it. Update PROJECTS.tags
 * or EXPERIENCE.description and the percentage recalculates itself.
 */
export function computeSkillLevel(skillName: string): number {
  const keywords = getKeywords(skillName);

  const projectMatches = PROJECTS.filter((project) =>
    project.tags.some((tag) => textIncludesAny(tag, keywords))
  ).length;

  const experienceMatches = EXPERIENCE.filter((exp) =>
    textIncludesAny(`${exp.role} ${exp.description}`, keywords)
  ).length;

  const level =
    BASE_LEVEL + projectMatches * PROJECT_BONUS + experienceMatches * EXPERIENCE_BONUS;

  return Math.min(MAX_LEVEL, level);
}