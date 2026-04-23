import yaml from "js-yaml";
import yamlSource from "./applications.yaml?raw";
import { getCategory } from "./modules";

// Eagerly import all cover images from src/assets/applications.
// File name (without extension) must match the application `id`.
const imageModules = import.meta.glob("../assets/applications/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const imagesById: Record<string, string> = {};
for (const [path, url] of Object.entries(imageModules)) {
  const file = path.split("/").pop() ?? "";
  const id = file.replace(/\.(jpg|jpeg|png|webp)$/i, "");
  imagesById[id] = url;
}

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
  /** Resolved at load time from src/assets/applications/<id>.<ext>. */
  image: string;
  short: string;
  description: string;
  modules: string[];
  domains: string[];
  organization: string;
  eumetnet_member: boolean;
  packages: PythonPackage[];
  links?: ExternalLink[];
}

type RawApplication = Omit<Application, "image"> & { image?: string };

interface ApplicationsFile {
  applications: RawApplication[];
}

const parsed = yaml.load(yamlSource) as ApplicationsFile;

const FALLBACK_IMAGE =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 10'><rect width='16' height='10' fill='%23e5e7eb'/></svg>`,
  );

export const applications: Application[] = parsed.applications.map((a) => ({
  ...a,
  image: imagesById[a.id] ?? FALLBACK_IMAGE,
}));

export function getApplication(id: string): Application | undefined {
  return applications.find((a) => a.id === id);
}

export function getModuleLabel(id: string): string {
  return getCategory(id)?.title || id;
}
