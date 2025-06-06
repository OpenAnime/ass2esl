export interface ProcessedStyle {
    name: string;
    hclProperties: string[];
    features: Set<string>; // called them features but they are just text styles like bold, italic, etc.
    margins: { MarginL?: number; MarginR?: number; MarginV?: number };
}
