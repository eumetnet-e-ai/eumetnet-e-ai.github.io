import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { createRootRoute, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, notFound, createRouter, useRouter } from "@tanstack/react-router";
import { Github } from "lucide-react";
import yaml from "js-yaml";
const appCss = "/assets/styles-CP1ZR3uU.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
const Route$6 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("nav", { className: "border-b bg-background", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4 sm:px-6 flex h-14 items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar pr-4", children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/",
            className: "text-sm font-medium transition-colors hover:text-primary [&.active]:text-primary text-muted-foreground whitespace-nowrap",
            children: "Showcase"
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/working-groups",
            className: "text-sm font-medium transition-colors hover:text-primary [&.active]:text-primary text-muted-foreground whitespace-nowrap",
            children: "Working Groups"
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/organization",
            className: "text-sm font-medium transition-colors hover:text-primary [&.active]:text-primary text-muted-foreground whitespace-nowrap",
            children: "Organization"
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/training",
            className: "text-sm font-medium transition-colors hover:text-primary [&.active]:text-primary text-muted-foreground whitespace-nowrap",
            children: "Training"
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/communication",
            className: "text-sm font-medium transition-colors hover:text-primary [&.active]:text-primary text-muted-foreground whitespace-nowrap",
            children: "Communication"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center pl-2 sm:pl-4 border-l", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://github.com/leifdenby/e-ai-website",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium whitespace-nowrap",
          title: "View source on GitHub",
          children: [
            /* @__PURE__ */ jsx(Github, { className: "h-5 w-5" }),
            /* @__PURE__ */ jsx("span", { className: "hidden sm:inline-block", children: "Contribute" })
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx(Outlet, {})
  ] });
}
const $$splitComponentImporter$5 = () => import("./working-groups-Cxmb90Tm.js");
const Route$5 = createFileRoute("/working-groups")({
  head: () => ({
    meta: [{
      title: "EUMETNET ML Working Groups"
    }, {
      name: "description",
      content: "Working Groups focusing on machine learning within the EUMETNET community."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./training-D028WlLO.js");
const Route$4 = createFileRoute("/training")({
  head: () => ({
    meta: [{
      title: "EUMETNET ML Training & Workshops"
    }, {
      name: "description",
      content: "Discover training materials, tutorials, and workshops for machine learning across EUMETNET."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./organization-D_v4Vltm.js");
const Route$3 = createFileRoute("/organization")({
  head: () => ({
    meta: [{
      title: "E-AI Organization Diagram"
    }, {
      name: "description",
      content: "E-AI Modular Concept Organization Diagram"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./communication-DDhBbp2T.js");
const Route$2 = createFileRoute("/communication")({
  head: () => ({
    meta: [{
      title: "EUMETNET ML Communication"
    }, {
      name: "description",
      content: "Connect with the E-AI community via Rocket Chat, mailing lists, and WG channels."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-DNymuS58.js");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "EUMETNET ML Applications Gallery"
    }, {
      name: "description",
      content: "A gallery of machine learning applications in weather and climate from across the EUMETNET community."
    }, {
      property: "og:title",
      content: "EUMETNET ML Applications Gallery"
    }, {
      property: "og:description",
      content: "Browse machine learning applications in weather and climate from EUMETNET members."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const __vite_glob_0_0 = "/assets/aicon-dwd-dVIQ9XdY.jpeg";
const __vite_glob_0_1 = "/assets/aifs-ecmwf-C5vO-01n.jpeg";
const __vite_glob_0_2 = "/assets/anemoi-framework-BvCdJPYv.jpeg";
const __vite_glob_0_3 = "/assets/bris-met-norway-DLviWfw4.jpeg";
const __vite_glob_0_4 = "/assets/cross-border-convection-DVdLp_ev.jpeg";
const __vite_glob_0_5 = "/assets/data-curation-opera-BtKMLtcD.jpeg";
const __vite_glob_0_6 = "/assets/dawid-natural-language-oYbiNvk4.png";
const __vite_glob_0_7 = "/assets/eai-in-person-workshops-B6xn6jcB.jpeg";
const __vite_glob_0_8 = "/assets/eai-tutorials-Ct0u_qmr.jpeg";
const __vite_glob_0_9 = "/assets/ensemble-postprocessing-drn-V_x26bYz.jpg";
const __vite_glob_0_10 = "/assets/limited-area-modeling-BZ_OEBwG.jpeg";
const __vite_glob_0_11 = "/assets/ml-front-detection-CEV3kOKd.jpeg";
const __vite_glob_0_12 = "/assets/ml-ops-DVQkYlGv.png";
const __vite_glob_0_13 = "/assets/mlcast-nowcasting-fHLe0ip9.jpeg";
const __vite_glob_0_14 = "/assets/pangu-weather-emulator-DVV0aLTc.jpg";
const __vite_glob_0_15 = "/assets/radar-nowcasting-pysteps-ml-BBOzFazY.jpg";
const __vite_glob_0_16 = "/assets/satellite-cloud-classification-B4dlO3zB.jpg";
const __vite_glob_0_17 = "/assets/statistical-downscaling-gan-bGyO-v7c.jpg";
const yamlSource$1 = 'applications:\n  - id: statistical-downscaling-gan\n    title: Statistical Downscaling GAN\n    short: Generative downscaling of precipitation from 25 km to 1 km.\n    description: |\n      Conditional GAN producing physically plausible high-resolution precipitation fields conditioned on coarse NWP output. Calibrated against radar-gauge analyses over Central Europe.\n    organization_modules:\n      - post-processing\n    domains:\n      - downscaling\n      - precipitation\n      - generative\n    organization: MeteoSwiss\n    eumetnet_member: true\n    packages:\n      - name: torch\n        maintained_by_eumetnet: false\n      - name: climetlab\n        url: https://github.com/ecmwf/climetlab\n        maintained_by_eumetnet: true\n    working_groups:\n      - wg-11\n  - id: satellite-cloud-classification\n    title: Satellite Cloud Classification\n    short: Pixel-wise cloud type classification from MTG-I imagery.\n    description: |\n      Transformer-based segmentation of cloud regimes from Meteosat Third Generation imagery, producing inputs for nowcasting and data assimilation. Trained on collocated CloudSat/CALIPSO labels.\n    organization_modules:\n      - data-curation\n    domains:\n      - satellite\n      - classification\n    organization: EUMETSAT (collaboration)\n    eumetnet_member: false\n    packages:\n      - name: torch\n        maintained_by_eumetnet: false\n      - name: satpy\n        url: https://satpy.readthedocs.io\n        maintained_by_eumetnet: false\n      - name: pyresample\n        url: https://pyresample.readthedocs.io\n        maintained_by_eumetnet: false\n    working_groups:\n      - wg-1\n  - id: ensemble-postprocessing-drn\n    title: Ensemble Post-processing (DRN)\n    short: Distributional regression networks for calibrated 2 m temperature.\n    description: |\n      Neural network producing calibrated parametric forecast distributions from raw ensemble output. Operational for 2 m temperature and 10 m wind speed at several EUMETNET centres.\n    organization_modules:\n      - post-processing\n    domains:\n      - calibration\n      - ensemble\n      - bias_correction\n    organization: MET Norway\n    eumetnet_member: true\n    packages:\n      - name: torch\n        maintained_by_eumetnet: false\n      - name: properscoring\n        maintained_by_eumetnet: false\n      - name: anemoi-utils\n        url: https://github.com/ecmwf/anemoi-utils\n        maintained_by_eumetnet: true\n    working_groups:\n      - wg-13\n  - id: anemoi-framework\n    title: Anemoi\n    short: Framework for data-driven forecasting\n    description: |\n      A comprehensive framework to support data-driven forecasting operations,  developed as part of the EUMETNET E-AI activities to bridge research and operations.\n    organization_modules:\n      - modelling\n    domains:\n      - emulation\n    organization: ECMWF\n    eumetnet_member: true\n    packages:\n      - name: anemoi-models\n        url: https://github.com/ecmwf/anemoi-models\n        maintained_by_eumetnet: true\n    working_groups:\n      - ats\n      - wg-3\n  - id: aifs-ecmwf\n    title: AIFS\n    short: Global DET + ENS forecasting using Anemoi\n    description: |\n      AIFS by ECMWF implementing Global Deterministic and Ensemble (DET + ENS)  forecasting capabilities by leveraging the Anemoi framework.\n    organization_modules:\n      - modelling\n    domains:\n      - medium_range\n      - ensemble\n    organization: ECMWF\n    eumetnet_member: true\n    packages: []\n    working_groups:\n      - ats\n  - id: bris-met-norway\n    title: BRIS\n    short: Stretched-Grid limited area model by MET Norway et al.\n    description: |\n      A stretched-grid limited area model developed by MET Norway and partners,  built upon the Anemoi framework for high-resolution regional forecasting.\n    organization_modules:\n      - modelling\n    domains:\n      - regional\n      - emulation\n    organization: MET Norway\n    eumetnet_member: true\n    packages: []\n    working_groups:\n      - ats\n  - id: aicon-dwd\n    title: AICON\n    short: Based on ICON-DREAM (using Anemoi)\n    description: |\n      AICON model by DWD, based on the ICON-DREAM architecture and utilizing  the Anemoi framework for AI-enhanced weather prediction.\n    organization_modules:\n      - modelling\n    domains:\n      - regional\n    organization: DWD\n    eumetnet_member: true\n    packages: []\n    working_groups:\n      - ats\n  - id: limited-area-modeling\n    title: LAM with Anemoi\n    short: Limited Area Modeling using the Anemoi framework\n    description: |\n      Application of the Anemoi framework for Limited Area Modeling (LAM)  in operational weather prediction contexts.\n    organization_modules:\n      - modelling\n    domains:\n      - regional\n      - high_resolution\n    organization: EUMETNET\n    eumetnet_member: true\n    packages: []\n    working_groups:\n      - ats\n  - id: dawid-natural-language\n    title: "DAWID: Natural Language Services"\n    short: Natural Language Services for meteorology\n    description: |\n      Natural language processing services and models tailored for meteorological  applications and automated forecast generation.\n    organization_modules:\n      - post-processing\n    domains:\n      - nlp\n    organization: EUMETNET\n    eumetnet_member: true\n    packages: []\n    working_groups:\n      - wg-2\n  - id: data-curation-opera\n    title: "Data Curation: AI-ready OPERA-SEVIRI"\n    short: AI-ready dataset collaboration between EUMETNET and EUMETSAT\n    description: |\n      Curating and preparing an AI-ready OPERA-SEVIRI dataset to facilitate  machine learning training and research across European weather services.\n    organization_modules:\n      - data-curation\n    domains:\n      - satellite\n      - data_curation\n    organization: EUMETNET & EUMETSAT\n    eumetnet_member: true\n    packages: []\n    working_groups:\n      - wg-1\n  - id: eai-tutorials\n    title: E-AI Tutorials\n    short: ML/AI tutorials for Meteorological Services\n    description: |\n      Training and educational resources focusing on Machine Learning and AI  applications specifically designed for National Meteorological Services.\n    organization_modules:\n      - post-processing\n    domains:\n      - training\n    organization: EUMETNET\n    eumetnet_member: true\n    packages: []\n  - id: mlcast-nowcasting\n    title: MLCast\n    short: AI-based nowcasting of precipitation and solar radiation\n    description: |\n      AI-based nowcasting system dedicated to predicting precipitation and  solar radiation for short-term forecasting.\n    organization_modules:\n      - modelling\n    domains:\n      - nowcasting\n      - precipitation\n      - solar\n    organization: EUMETNET\n    eumetnet_member: true\n    packages: []\n    working_groups:\n      - wg-6\n  - id: eai-in-person-workshops\n    title: E-AI Workshops\n    short: In-person workshops for EUMETNET E-AI\n    description: |\n      Collaborative in-person workshops to advance AI and machine learning  integration in weather and climate among EUMETNET members.\n    organization_modules:\n      - post-processing\n    domains:\n      - training\n    organization: EUMETNET\n    eumetnet_member: true\n    packages: []\n  - id: ml-ops\n    title: ML/Ops\n    short: Bringing ML models from research to operations\n    description: |\n      Frameworks, strategies, and infrastructure implementations for bridging  the gap between ML research models and robust operational deployments.\n    organization_modules:\n      - post-processing\n    domains:\n      - mlops\n    organization: EUMETNET\n    eumetnet_member: true\n    packages: []\n    working_groups:\n      - wg-3\n  - id: cross-border-convection\n    title: ASP-CBCF\n    short: Developing ML-support for cross-border convection forecasts\n    description: |\n      Machine learning support project aimed at improving cross-border  convection forecasts (ASP-CBCF) across national boundaries.\n    organization_modules:\n      - modelling\n    domains:\n      - convection\n      - nowcasting\n    organization: EUMETNET\n    eumetnet_member: true\n    packages: []\n  - id: ml-front-detection\n    title: ML Front Detection\n    short: ML-based front detection for weather analysis\n    description: |\n      Application of machine learning algorithms to automatically detect  and trace meteorological fronts in gridded datasets.\n    organization_modules:\n      - post-processing\n    domains:\n      - front_detection\n    organization: EUMETNET\n    eumetnet_member: true\n    packages: []\n    working_groups:\n      - wg-13\n';
const yamlSource = "categories:\n  - id: data-curation\n    title: Data Curation\n  - id: analysis\n    title: Analysis\n  - id: modelling\n    title: Modelling\n  - id: post-processing\n    title: Post Processing\n  - id: products-services\n    title: Products and Services\n\ndiagram_nodes:\n  - id: radar-db\n    title: RADAR DB\n    wgBadge:\n      label: WG1\n      id: wg-1\n  - id: text-db\n    title: Weather & Climate Texts DB\n  - id: eumetsat\n    title: EUMETSAT AI/ML Project\n    subtitle: Observations, Data Curation and Data Products\n  - id: hiw-db\n    title: HIW DB\n    wgBadge:\n      label: WG1\n      id: wg-1\n  - id: reanalyses\n    title: Global and Regional Reanalyses\n    wgBadge:\n      label: WG1\n      id: wg-1\n  - id: nowcasting\n    title: AI/ML in Now Casting\n    wgBadge:\n      label: WG6\n      id: wg-6\n  - id: post-processing\n    title: AI/ML Post Processing\n    wgBadge:\n      label: WG13\n      id: wg-13\n  - id: obs-operators\n    title: AI Obs Operators\n  - id: ecmwf\n    title: ECMWF Pilot Project\n    subtitle: Modeling Analyses Ensembles\n    wgBadge:\n      label: ATS\n      id: ats\n  - id: foundation-model\n    title: Weather Foundation Model\n  - id: ai-warn\n    title: AI Warn\n    wgBadge:\n      label: WG2\n      id: wg-2\n  - id: climate-chat\n    title: Weather and Climate Chat\n    wgBadge:\n      label: WG2\n      id: wg-2\n  - id: toolbox\n    title: High Impact Weather Toolbox\n    subtitle: Identify Characterize Visualize\n  - id: workflows\n    title: Workflows\n    wgBadge:\n      label: WG3\n      id: wg-3\n  - id: communication\n    title: Communication\n  - id: training\n    title: Training\n";
const parsed$1 = yaml.load(yamlSource);
const categoriesData = parsed$1.categories;
const diagramNodesData = parsed$1.diagram_nodes;
function getCategory(id) {
  return categoriesData.find((c) => c.id === id);
}
function getDiagramNode(id) {
  return diagramNodesData.find((n) => n.id === id);
}
const rawPillars = [
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
      {
        id: "climate-chat",
        className: "col-span-1 row-span-2 h-full bg-orange-200 border-orange-300"
      },
      { id: "toolbox", className: "col-span-1 row-span-2 bg-orange-200 border-orange-300" }
    ]
  }
];
const organizationData = {
  header: {
    title: "E-AI Programme modules overview"
  },
  pillars: rawPillars.map((pillar) => ({
    ...pillar,
    items: pillar.items.map((item) => {
      const nodeData = getDiagramNode(item.id);
      return {
        ...item,
        title: nodeData?.title || item.id,
        subtitle: nodeData?.subtitle,
        wgBadge: nodeData?.wgBadge
      };
    })
  }))
};
const imageModules = /* @__PURE__ */ Object.assign({
  "../assets/applications/aicon-dwd.jpeg": __vite_glob_0_0,
  "../assets/applications/aifs-ecmwf.jpeg": __vite_glob_0_1,
  "../assets/applications/anemoi-framework.jpeg": __vite_glob_0_2,
  "../assets/applications/bris-met-norway.jpeg": __vite_glob_0_3,
  "../assets/applications/cross-border-convection.jpeg": __vite_glob_0_4,
  "../assets/applications/data-curation-opera.jpeg": __vite_glob_0_5,
  "../assets/applications/dawid-natural-language.png": __vite_glob_0_6,
  "../assets/applications/eai-in-person-workshops.jpeg": __vite_glob_0_7,
  "../assets/applications/eai-tutorials.jpeg": __vite_glob_0_8,
  "../assets/applications/ensemble-postprocessing-drn.jpg": __vite_glob_0_9,
  "../assets/applications/limited-area-modeling.jpeg": __vite_glob_0_10,
  "../assets/applications/ml-front-detection.jpeg": __vite_glob_0_11,
  "../assets/applications/ml-ops.png": __vite_glob_0_12,
  "../assets/applications/mlcast-nowcasting.jpeg": __vite_glob_0_13,
  "../assets/applications/pangu-weather-emulator.jpg": __vite_glob_0_14,
  "../assets/applications/radar-nowcasting-pysteps-ml.jpg": __vite_glob_0_15,
  "../assets/applications/satellite-cloud-classification.jpg": __vite_glob_0_16,
  "../assets/applications/statistical-downscaling-gan.jpg": __vite_glob_0_17
});
const imagesById = {};
for (const [path, url] of Object.entries(imageModules)) {
  const file = path.split("/").pop() ?? "";
  const id = file.replace(/\.(jpg|jpeg|png|webp)$/i, "");
  imagesById[id] = url;
}
const parsed = yaml.load(yamlSource$1);
const FALLBACK_IMAGE = "data:image/svg+xml;utf8," + encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 10'><rect width='16' height='10' fill='%23e5e7eb'/></svg>`
);
const applications = parsed.applications.map((a) => ({
  ...a,
  image: imagesById[a.id] ?? FALLBACK_IMAGE
}));
function getApplication(id) {
  return applications.find((a) => a.id === id);
}
function getModuleLabel(id) {
  return getCategory(id)?.title || id;
}
const $$splitNotFoundComponentImporter = () => import("./apps._appId-2r5jxss4.js");
const $$splitComponentImporter = () => import("./apps._appId-B0iFE8a9.js");
const Route = createFileRoute("/apps/$appId")({
  loader: ({
    params
  }) => {
    const app = getApplication(params.appId);
    if (!app) throw notFound();
    return {
      app
    };
  },
  head: ({
    loaderData
  }) => {
    const app = loaderData?.app;
    if (!app) return {
      meta: [{
        title: "Application not found"
      }]
    };
    return {
      meta: [{
        title: `${app.title} — EUMETNET ML Gallery`
      }, {
        name: "description",
        content: app.short
      }, {
        property: "og:title",
        content: app.title
      }, {
        property: "og:description",
        content: app.short
      }, {
        property: "og:image",
        content: app.image
      }, {
        name: "twitter:card",
        content: "summary_large_image"
      }, {
        name: "twitter:image",
        content: app.image
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
const WorkingGroupsRoute = Route$5.update({
  id: "/working-groups",
  path: "/working-groups",
  getParentRoute: () => Route$6
});
const TrainingRoute = Route$4.update({
  id: "/training",
  path: "/training",
  getParentRoute: () => Route$6
});
const OrganizationRoute = Route$3.update({
  id: "/organization",
  path: "/organization",
  getParentRoute: () => Route$6
});
const CommunicationRoute = Route$2.update({
  id: "/communication",
  path: "/communication",
  getParentRoute: () => Route$6
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const AppsAppIdRoute = Route.update({
  id: "/apps/$appId",
  path: "/apps/$appId",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  CommunicationRoute,
  OrganizationRoute,
  TrainingRoute,
  WorkingGroupsRoute,
  AppsAppIdRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent,
    basepath: "/"
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  applications as a,
  getModuleLabel as b,
  categoriesData as c,
  getDiagramNode as g,
  organizationData as o,
  router as r
};
