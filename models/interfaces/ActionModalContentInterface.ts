import { Models } from "node-appwrite";

export interface ActionModalContentProps {
  file: Models.Document;
  onInputChange: React.Dispatch<React.SetStateAction<string[]>>;
  onRemove: (email: string) => void;
}
