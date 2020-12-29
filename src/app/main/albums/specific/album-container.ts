import { Album } from "./album";

export interface AlbumContainer {
  id: number;
  artist: string;
  album: Album[];
}
