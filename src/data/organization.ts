export interface OrgItem {
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
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

export const organizationData = {
  header: {
    title: "E-AI Programme modules overview"
  },
  pillars: [
    {
      id: "data-curation",
      title: "a) Data Curation",
      color: "bg-blue-100", // using light tailwind colors similar to the image background
      items: [
        { id: "radar-db", title: "RADAR DB", className: "col-span-1 bg-blue-200 border-blue-300" },
        { id: "text-db", title: "Weather & Climate Texts DB", className: "col-span-1 bg-blue-200 border-blue-300", wgBadge: { label: "WG8", id: "wg-8" } },
        { id: "eumetsat", title: "EUMETSAT AI/ML Project", subtitle: "Observations, Data Curation and Data Products", className: "col-span-1 row-span-2 bg-blue-200 border-blue-300", wgBadge: { label: "WG4", id: "wg-4" } },
        { id: "hiw-db", title: "HIW DB", className: "col-span-1 bg-blue-200 border-blue-300" },
        { id: "reanalyses", title: "Global and Regional Reanalyses", className: "col-span-1 bg-blue-200 border-blue-300" }
      ]
    },
    {
      id: "analysis-modelling",
      title: "b) Analysis, Modelling and Post Processing",
      color: "bg-yellow-100",
      items: [
        { id: "nowcasting", title: "AI/ML in Now Casting", className: "col-span-1 bg-yellow-200 border-yellow-300", wgBadge: { label: "WG6", id: "wg-6" } },
        { id: "post-processing", title: "AI/ML Post Processing", className: "col-span-1 bg-yellow-200 border-yellow-300", wgBadge: { label: "WG1", id: "wg-1" } },
        { id: "obs-operators", title: "AI Obs Operators", className: "col-span-1 bg-yellow-200 border-yellow-300" },
        { id: "ecmwf", title: "ECMWF Pilot Project", subtitle: "Modeling Analyses Ensembles", className: "col-span-1 row-span-2 bg-yellow-200 border-yellow-300" },
        { id: "foundation-model", title: "Weather Foundation Model", className: "col-span-1 bg-yellow-200 border-yellow-300", wgBadge: { label: "WG5", id: "wg-5" } }
      ]
    },
    {
      id: "products-services",
      title: "c) Products and Services",
      color: "bg-orange-100",
      items: [
        { id: "ai-warn", title: "AI Warn", className: "col-span-1 bg-orange-200 border-orange-300" },
        { id: "climate-chat", title: "Weather and Climate Chat", className: "col-span-1 row-span-2 h-full bg-orange-200 border-orange-300" },
        { id: "toolbox", title: "High Impact Weather Toolbox", subtitle: "Identify Characterize Visualize", className: "col-span-1 row-span-2 bg-orange-200 border-orange-300" }
      ]
    }
  ]
};
