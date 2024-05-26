import { z } from "zod";

export const DataTableTrackSchema = z.object({
  spotify_id: z.string().min(1),
  artists: z.string().min(1),
  album: z.string().min(1),
  name: z.string().min(1),
});

export const DataTableLikedTrackSchema = DataTableTrackSchema.extend({
  tags: z.array(z.string().min(1)),
});

export type DataTableLikedTrack = z.infer<typeof DataTableLikedTrackSchema>;
