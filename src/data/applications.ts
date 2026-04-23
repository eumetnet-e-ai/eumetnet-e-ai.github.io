import yaml from "js-yaml";
import yamlSource from "./applications.yaml?raw";

export type PipelineStage =
  | "observation_qa"
  | "observation_dataset_processing"
  | "forecasting"
  | "postprocessing";

export interface PythonPackage {
  name: string;
  url?: string;
  maintained_by_eumetnet?: boolean;
}

export interface ExternalLink {
  label: string;
  url: string;
}

export interface Application {
  id: string;
  title: string;
  image: string;
  short: string;
  description: string;
  pipeline: PipelineStage;
  domains: string[];
  organization: string;
  eumetnet_member: boolean;
  packages: PythonPackage[];
  links?: ExternalLink[];
}

interface ApplicationsFile {
  applications: Application[];
}

const parsed = yaml.load(yamlSource) as ApplicationsFile;

export const applications: Application[] = parsed.applications;

export const pipelineLabels: Record<PipelineStage, string> = {
  observation_qa: "Observation QA",
  observation_dataset_processing: "Obs. Dataset Processing",
  forecasting: "Forecasting",
  postprocessing: "Post-processing",
};

export function getApplication(id: string): Application | undefined {
  return applications.find((a) => a.id === id);
}
