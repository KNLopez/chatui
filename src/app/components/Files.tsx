import { MockFile } from "@/types/files";
import File from "./shared/File";
import Tag from "./shared/Tag";

const mockFiles: MockFile[] = [
  {
    name: "i9.pdf",
    type: "pdf",
    size: "1.5MB",
    url: "/files/i9.pdf",
  },
  {
    name: "project.doc",
    type: "doc",
    size: "2.3MB",
    url: "/files/project.doc",
  },
  {
    name: "code.zip",
    type: "code",
    size: "3.1MB",
    url: "/files/code.zip",
  },
  {
    name: "screenshot.png",
    type: "img",
    size: "4.2MB",
    url: "/files/screenshot.png",
  },
];

const Files = () => {
  return (
    <div className="flex flex-col border-t py-8 px-4">
      <div className="flex gap-2 mb-4">
        <h2 className="font-semibold">Files</h2>
        <Tag tag="chip" text={mockFiles.length.toString()} />
      </div>
      {mockFiles.map((file, idx) => (
        <File key={idx} file={file} type={file.type} />
      ))}
    </div>
  );
};

export default Files;
