import yaml from "js-yaml";
import yamlSource from "./working-groups.yaml?raw";

export interface Contact {
  name: string;
  email: string;
}

export interface WorkingGroup {
  id: string;
  name: string;
  emoji?: string;
  joint_programme?: string;
  resources?: Record<string, string | null>;
  facilitators?: Contact[];
  contacts?: Contact[];
}

interface WorkingGroupsFile {
  working_groups: WorkingGroup[];
}

const parsed = yaml.load(yamlSource) as WorkingGroupsFile;

export const workingGroups: WorkingGroup[] = parsed.working_groups;
