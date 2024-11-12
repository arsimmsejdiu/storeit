export interface UploadFileProps {
  file: File;
  ownerId: string;
  accountId: string;
  path: string;
}

export interface GetFilesProps {
  types?: string[];
  searchText?: string;
  sort?: string;
  limit?: number;
}

export interface RenameFileProps {
  fileId: string;
  name: string;
  extension: string;
  path: string;
}

export interface UpdateFileUsersProps {
  fileId: string;
  emails: string[];
  path: string;
}

export interface DeleteFileProps {
  fileId: string;
  bucketFileId: string;
  path: string;
}
