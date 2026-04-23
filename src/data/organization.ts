import { getModule, ModuleItem } from "./modules";

export interface OrgItem {
  id: string;
  className?: string;
}

export interface OrgItemResolved extends OrgItem, Omit<ModuleItem, "id"> {}

export interface OrgPillar {
  id: string;
  title: string;
  items: OrgItem[];
  color: string;
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
    title: "b) Analysis, Modelling and PP",
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

export interface ResolvedOrgPillar extends Omit<OrgPillar, "items"> {
  items: OrgItemResolved[];
}

export const organizationData = {
  header: {
    title: "E-AI Programme modules overview"
  },
  pillars: rawPillars.map(pillar => ({
    ...pillar,
    items: pillar.items.map(item => {
      const moduleData = getModule(item.id);
      return {
        ...item,
        title: moduleData?.title || item.id,
        subtitle: moduleData?.subtitle,
        wgBadge: moduleData?.wgBadge
      };
    })
  })) as ResolvedOrgPillar[]
};
