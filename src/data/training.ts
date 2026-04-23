import yaml from "js-yaml";
import yamlSource from "./training.yaml?raw";

export interface TrainingItem {
  id: string;
  title: string;
  date: string;
  description: string;
  githubLink?: string;
  slidesLink?: string;
  type: string;
  tags?: string[];
}

interface TrainingFile {
  training: TrainingItem[];
}

const parsed = yaml.load(yamlSource) as TrainingFile;
export const trainingData = parsed.training;
