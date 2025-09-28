import type { ReactElement } from "react";

export interface Project {
    title: string;
    description: string;
    image: string;
    tech: ReactElement[];
    github?: string;
    liveDemo?: string;
}