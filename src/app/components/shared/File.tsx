import Image from "next/image";
import DocIcon from "@/assets/files/doc.svg";
import PdfIcon from "@/assets/files/pdf.svg";
import CodeIcon from "@/assets/files/code.svg";
import ImgIcon from "@/assets/files/image.svg";
import DownloadIcon from "@/assets/download.svg";
import type { FileType, MockFile } from "@/types/files";
import InfoCard from "../InfoCard";

type FileConfigProps = {
  [key in FileType]: {
    icon: string;
    bgColor: string;
  };
};

const fileConfig: FileConfigProps = {
  doc: {
    icon: DocIcon,
    bgColor: "bg-info-200",
  },
  pdf: {
    icon: PdfIcon,
    bgColor: "bg-danger-200",
  },
  code: {
    icon: CodeIcon,
    bgColor: "bg-primary-200",
  },
  img: {
    icon: ImgIcon,
    bgColor: "bg-success-200",
  },
};

const File = ({ file, type }: { file: MockFile; type: FileType }) => {
  return (
    <InfoCard
      title={file.name}
      subtitle={`${file.type.toUpperCase()} ${file.size}`}
      image={
        <div className={`${fileConfig[type].bgColor} p-4 rounded-md`}>
          <Image
            src={fileConfig[type].icon}
            alt={type}
            height={24}
            width={24}
          />
        </div>
      }
      rightInfo={
        <Image src={DownloadIcon} alt="download" height={24} width={24} />
      }
    />
  );
};

export default File;
