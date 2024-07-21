import { Button } from "@/components/ui/button";
import React from "react";

const Skills: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Button variant={"outline"}>
        <a href="https://github.com/mayinuddin-munna" target="_blank">
          Skills
        </a>
      </Button>
    </div>
  );
};

export default Skills;
