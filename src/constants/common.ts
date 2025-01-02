import { ECommonServices, EMainSections } from "./localizations";

export const TEST_IMG_SERVICE_URL =
  "https://images.unsplash.com/photo-1531168738274-aa9955d5033f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
export const COMPANY_NAME = "Baharev-Group";

export const pages: { path: string; name: EMainSections }[] = [
  { path: "Main", name: EMainSections.Main },
  { path: "Services", name: EMainSections.Services },
  { path: "AboutCompany", name: EMainSections.AboutCompany },
  { path: "contacts", name: EMainSections.Сontacts },
];

export const commonService: Record<
  ECommonServices,
  { text: string; img: string }
> = {
  HousingLaw: {
    img: TEST_IMG_SERVICE_URL,
    text: "Жилищное право",
  },
  LaborLaw: {
    img: TEST_IMG_SERVICE_URL,
    text: "Трудовое право",
  },
  InheritanceLaw: {
    img: TEST_IMG_SERVICE_URL,
    text: "Наследственное право",
  },
};
