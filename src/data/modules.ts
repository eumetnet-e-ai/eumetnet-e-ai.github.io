import yaml from "js-yaml";
import yamlSource from "./modules.yaml?raw";

export interface WgBadge {
  label: string;
  id: string;
}

export interface ModuleItem {
  id: string;
  title: string;
  subtitle?: string;
  wgBadge?: WgBadge;
  pillar?: string;
}

interface ModulesFile {
  modules: ModuleItem[];
}

const parsed = yaml.load(yamlSource) as ModulesFile;
export const modulesData = parsed.modules;

export function getModule(id: string): ModuleItem | undefined {
  return modulesData.find((m) => m.id === id);
}
