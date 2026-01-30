import type { ReactNode } from "react";

export default function RootNotFound(): ReactNode {
  return (
    <div style={{ padding: "2rem", textAlign: "center", fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>404</h1>
      <p style={{ color: "#666" }}>Page not found</p>
    </div>
  );
}
