import { type ChangeEvent, type KeyboardEvent, type FC, useState } from "react";

import { ScrollArea } from "@/app/components/shadcn/scroll-area";
import { Button } from "@/app/components/shadcn/button";
import { Input } from "@/app/components/shadcn/input";
import { Badge } from "@/app/components/shadcn/badge";

import { Cross2Icon } from "@radix-ui/react-icons";

import { type Row } from "@tanstack/react-table";
import { DataTableLikedTrack } from "@/app/library/types";

type CreateTagFormProps = {
  row: Row<DataTableLikedTrack>;
};

const CreateTagForm: FC<CreateTagFormProps> = ({ row }) => {
  const [tag_name, setTagName] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setTagName(event.target.value);
  }

  async function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    const trimmed = tag_name.trim();
    if (
      (event.key === "Enter" || event.key === "Tab") &&
      trimmed.length &&
      !tags.includes(trimmed)
    ) {
      event.preventDefault();
      setTags([...tags, trimmed]);
      setTagName("");
    }
  }

  const deleteTag = (tags: string[], tag: string) => {
    return tags.filter((item: string) => item !== tag);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <div className="grid flex-1 gap-2">
          <Input
            placeholder="Add a new tag..."
            value={tag_name}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <Button type="submit" size="sm" className="px-3">
          Add
        </Button>
      </div>
      <ScrollArea className="h-40 border border-muted p-1">
        <div className="flex flex-wrap gap-1">
          {tags.map((tag, index) => {
            return (
              <div key={index} className="">
                <Badge className="gap-1">
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                    {tag}
                  </span>
                  <Cross2Icon
                    className="rounded border hover:bg-destructive hover:text-destructive-foreground"
                    onClick={() => {
                      const filtered = deleteTag(tags, tag);
                      setTags(filtered);
                    }}
                  />
                </Badge>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

export default CreateTagForm;
