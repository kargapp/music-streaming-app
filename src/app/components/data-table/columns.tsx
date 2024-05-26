"use client";

import { DataTableLikedTrack } from "@/app/library/types";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./column-header";
import { Checkbox } from "@/app/components/shadcn/checkbox";
import { Button } from "../shadcn/button";
import { GearIcon, PlayIcon } from "@radix-ui/react-icons";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../shadcn/dialog";
import CreateTagForm from "./create-tag-form";

export const columns: ColumnDef<DataTableLikedTrack>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="select all rows"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="select one row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "artists",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Artist(s)" />
    ),
  },
  {
    accessorKey: "album",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Album" />
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Track" />
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <div className="flex items-end justify-end">
          <Button
            variant={"ghost"}
            onClick={() => {
              console.log(row.getValue("id"));
            }}
          >
            <PlayIcon />
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost">
                <GearIcon />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Edit Tags</DialogTitle>
                <DialogDescription>
                  Tag songs to create filters for smart playlists.
                </DialogDescription>
              </DialogHeader>
              <CreateTagForm row={row} />
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Cancel
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      );
    },
  },
];
