export type FileType = "doc" | "pdf" | "code" | "img";
export type MockFile = {
  name: string;
  type: FileType;
  size: string;
  url: string;
};
