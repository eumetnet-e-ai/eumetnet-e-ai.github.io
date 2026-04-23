import yaml from "js-yaml";
import yamlSource from "./modules.yaml?raw";

export interface WgBadge {
  label: string;
  id: string;
}

export interface CategoryItem {
  id: string;
  title: string;
}

export interface DiagramNode {
  id: string;
  title: string;
  subtitle?: string;
  wgBadge?: WgBadge;
}

interface ModulesFile {
  categories: CategoryItem[];
  diagram_nodes: DiagramNode[];
}

const parsed = yaml.load(yamlSource) as ModulesFile;
export const categoriesData = parsed.categories;
export const diagramNodesData = parsed.diagram_nodes;

export function getCategory(id: string): CategoryItem | undefined {
  return categoriesData.find((c) => c.id === id);
}

export function getDiagramNode(id: string): DiagramNode | undefined {
  return diagramNodesData.find((n) => n.id === id);
}
