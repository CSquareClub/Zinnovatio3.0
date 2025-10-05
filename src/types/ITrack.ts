import type { JSX } from "react";

export interface ITrackThemeData {
    id: number;
    title: string;
    sdg: string;
    icon: JSX.Element;
    description: string;
    impact: string;
    color: string;
    borderColor: string;
    participants: number;
    projects: number;
}