import yaml from "js-yaml";
import yamlSource from "./working-groups.yaml?raw";

export interface Contact {
  name: string;
  email: string;
}

export interface CommunicationChannels {
  github?: string;
  messaging?: { name: string; url: string };
  mailingList?: string;
  website?: string;
}

export interface WorkingGroup {
  id: string;
  name: string;
  emoji?: string;
  joint_programme?: string;
  resources?: Record<string, string | null>;
  facilitators?: Contact[];
  contacts?: Contact[];
  communication?: CommunicationChannels;
}

interface WorkingGroupsFile {
  working_groups: WorkingGroup[];
}

const parsed = yaml.load(yamlSource) as WorkingGroupsFile;

export const workingGroups: WorkingGroup[] = parsed.working_groups;
