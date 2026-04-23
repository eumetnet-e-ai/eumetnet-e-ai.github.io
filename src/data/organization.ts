import yaml from "js-yaml";
import yamlSource from "./organization_modules.yaml?raw";

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

export interface OrgItem {
  id: string;
  className?: string;
}

export interface ResolvedOrgItem extends OrgItem {
  title: string;
  subtitle?: string;
  wgBadge?: {
    label: string;
    id: string;
  };
}

export interface OrgPillar {
  id: string;
  title: string;
  items: OrgItem[];
  color: string;
}

export interface ResolvedOrgPillar extends Omit<OrgPillar, "items"> {
  items: ResolvedOrgItem[];
}

const rawPillars: OrgPillar[] = [
  {
    id: "data-curation",
    title: "a) Data Curation",
    color: "bg-blue-100",
    items: [
      { id: "radar-db", className: "col-span-1 bg-blue-200 border-blue-300" },
      { id: "text-db", className: "col-span-1 bg-blue-200 border-blue-300" },
      { id: "eumetsat", className: "col-span-1 row-span-2 bg-blue-200 border-blue-300" },
      { id: "hiw-db", className: "col-span-1 bg-blue-200 border-blue-300" },
      { id: "reanalyses", className: "col-span-1 bg-blue-200 border-blue-300" }
    ]
  },
  {
    id: "analysis-modelling",
    title: "b) Analysis, Modelling and Post Processing",
    color: "bg-yellow-100",
    items: [
      { id: "nowcasting", className: "col-span-1 bg-yellow-200 border-yellow-300" },
      { id: "post-processing", className: "col-span-1 bg-yellow-200 border-yellow-300" },
      { id: "obs-operators", className: "col-span-1 bg-yellow-200 border-yellow-300" },
      { id: "ecmwf", className: "col-span-1 row-span-2 bg-yellow-200 border-yellow-300" },
      { id: "foundation-model", className: "col-span-1 bg-yellow-200 border-yellow-300" }
    ]
  },
  {
    id: "products-services",
    title: "c) Products and Services",
    color: "bg-orange-100",
    items: [
      { id: "ai-warn", className: "col-span-1 bg-orange-200 border-orange-300" },
      { id: "climate-chat", className: "col-span-1 row-span-2 h-full bg-orange-200 border-orange-300" },
      { id: "toolbox", className: "col-span-1 row-span-2 bg-orange-200 border-orange-300" }
    ]
  }
];

export const organizationData = {
  header: {
    title: "E-AI Programme modules overview"
  },
  pillars: rawPillars.map(pillar => ({
    ...pillar,
    items: pillar.items.map(item => {
      const nodeData = getDiagramNode(item.id);
      return {
        ...item,
        title: nodeData?.title || item.id,
        subtitle: nodeData?.subtitle,
        wgBadge: nodeData?.wgBadge
      };
    })
  })) as ResolvedOrgPillar[]
};
