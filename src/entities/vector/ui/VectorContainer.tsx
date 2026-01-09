import type { FC } from "react";
import type { Children } from "src/shared";

import { CONTAINER_SIDE_LENGTH } from "src/shared";

export const VectorContainer: FC<Children> = ({ children }) => {
  return (
    <div
      className={`relative rounded border border-gray-300 shadow-xs before:absolute before:top-1/2 before:left-0 before:h-px before:w-full before:bg-gray-300 before:content-[''] after:absolute after:top-0 after:left-1/2 after:h-full after:w-px after:bg-gray-300 after:content-['']`}
      style={{
        width: `${CONTAINER_SIDE_LENGTH}px`,
        height: `${CONTAINER_SIDE_LENGTH}px`
      }}>
      {children}
    </div>
  );
};
