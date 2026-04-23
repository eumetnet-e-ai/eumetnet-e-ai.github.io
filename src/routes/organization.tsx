import { createFileRoute, Link } from "@tanstack/react-router";
import { organizationData } from "@/data/organization";
import { getDiagramNode } from "@/data/organization_modules";

export const Route = createFileRoute("/organization")({
  head: () => ({
    meta: [
      { title: "E-AI Organization Diagram" },
      { name: "description", content: "E-AI Modular Concept Organization Diagram" },
    ],
  }),
  component: OrganizationPage,
});

function OrganizationPage() {
  const workflowsNode = getDiagramNode("workflows");
  const commsNode = getDiagramNode("communication");
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-0">
        {/* Header Section */}
        <div className="text-center mb-16 mt-8 w-full">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl w-full mx-auto leading-tight">
            {organizationData.header.title}
          </h1>
        </div>

        {/* Pillars Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {organizationData.pillars.map((pillar) => (
            <div key={pillar.id} className={`${pillar.color} rounded-md border border-gray-300 p-4 shadow-sm flex flex-col`}>
              <h2 className="text-center font-bold text-gray-800 mb-4 bg-white/50 py-2 rounded">
                {pillar.title}
              </h2>
              
              <div className="grid grid-cols-2 gap-3 flex-grow">
                {pillar.items.map((item) => {
                  const cardContent = (
                    <>
                      {item.wgBadge && (
                        <div
                          className="absolute -top-2 -right-2 bg-slate-800 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm z-10"
                        >
                          {item.wgBadge.label}
                        </div>
                      )}
                      <span className="font-bold text-sm text-gray-900">{item.title}</span>
                      {item.subtitle && (
                        <span className="text-xs text-gray-700 mt-2 font-medium">
                          {item.subtitle}
                        </span>
                      )}
                    </>
                  );

                  const cardClasses = `relative
                      ${item.className || "col-span-1 bg-[#b5d3a5]"}
                      rounded-md p-3 border border-[#9ebd8d] shadow-sm
                      flex flex-col items-center justify-center text-center
                      transition-transform hover:scale-105 cursor-pointer block w-full h-full
                    `;

                  if (item.wgBadge) {
                    return (
                      <Link
                        key={item.id}
                        to="/working-groups"
                        hash={item.wgBadge.id}
                        className={cardClasses}
                        title={`View ${item.wgBadge.label} details`}
                      >
                        {cardContent}
                      </Link>
                    );
                  }

                  return (
                    <div key={item.id} className={cardClasses}>
                      {cardContent}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Workflows and Communication Section */}
        <div className="bg-slate-100 rounded-md border border-slate-300 p-4 shadow-sm flex flex-col mt-6">
          <h2 className="text-center font-bold text-gray-800 mb-4 bg-white/50 py-2 rounded">
            d) Cross-cutting
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
            {workflowsNode?.wgBadge ? (
              <Link
                to="/working-groups"
                hash={workflowsNode.wgBadge.id}
                className="bg-white font-bold py-4 px-6 text-center rounded-md shadow-sm border border-slate-300 text-slate-800 text-lg transition-transform hover:scale-105 cursor-pointer relative"
                title={`View ${workflowsNode.wgBadge.label} details`}
              >
                <div className="absolute -top-2 -right-2 bg-slate-800 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm z-10">
                  {workflowsNode.wgBadge.label}
                </div>
                {workflowsNode.title}
              </Link>
            ) : (
              <div className="bg-white font-bold py-4 px-6 text-center rounded-md shadow-sm border border-slate-300 text-slate-800 text-lg transition-transform hover:scale-105 cursor-pointer">
                {workflowsNode?.title || "Workflows"}
              </div>
            )}
            <div className="bg-white font-bold py-4 px-6 text-center rounded-md shadow-sm border border-slate-300 text-slate-800 text-lg transition-transform hover:scale-105 cursor-pointer">
              {commsNode?.title || "Communication & Training"}
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-12 text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed bg-white p-8 rounded-lg shadow-sm border border-gray-200 italic">
          <p>
            The E-AI programme is structured in three modules: a) Data Curation, b) Analysis, Modelling and Post-Processing, and c) Products and Services. By working together on overarching Workflows, AI/ML can be used effectively across the entire value chain while also addressing necessary technical, administrative, and structural requirements. Moreover, the programme offers Communication and Training opportunities to ensure an efficient flow of information on AI/ML developments within and beyond the E-AI programme.
          </p>
        </div>
      </div>
    </div>
  );
}