export interface SpaceInfo {
  size: number;
  latestDate: string;
}

export interface TotalSpace {
  document: SpaceInfo;
  image: SpaceInfo;
  video: SpaceInfo;
  audio: SpaceInfo;
  other: SpaceInfo;
}
