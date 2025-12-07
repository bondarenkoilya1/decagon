import type { FC } from "react";
import type { Children } from "src/shared";

import { CONTAINER_SIDE_LENGTH } from "src/shared";

export const VectorContainer: FC<Children> = ({ children }) => {
  return (
    <div
      className={`
      relative 
      rounded 
      border border-gray-300
      shadow-xs
      before:content-[''] before:absolute before:left-0 before:top-1/2 
      before:w-full before:h-px before:bg-gray-300
      after:content-[''] after:absolute after:left-1/2 after:top-0 
      after:w-px after:h-full after:bg-gray-300
    `}
      style={{
        width: `${CONTAINER_SIDE_LENGTH}px`,
        height: `${CONTAINER_SIDE_LENGTH}px`
      }}>
      {children}
    </div>
  );
};
