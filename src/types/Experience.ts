import type { ReactElement } from "react";

export interface Experience {
  company: string;
  logo: string;
  role: string;
  duration: string;
  location: string;
  achievements: string[];
  tech: ReactElement[];
}
