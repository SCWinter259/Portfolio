import type { ReactElement } from "react";

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  achievements: string[];
  tech: ReactElement[];
}
