import { ReactNode } from "react";

export default function StudioLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
