import { ScriptInfo } from 'ass-compiler';

import { quoteString } from './utils';

export function generateMetaHCL(info: ScriptInfo | undefined): string {
    const title = info?.Title ?? 'Untitled';
    const resolutionX = info?.PlayResX ?? 1920;
    const resolutionY = info?.PlayResY ?? 1080;

    const scaleBorderAndShadow = info?.ScaledBorderAndShadow === 'yes';

    return `
meta {
    title = ${quoteString(title)}
    resolution = [${resolutionX}, ${resolutionY}]
    scale_border_and_shadow = ${scaleBorderAndShadow}
    esl_version = "1.0"
}`;
}
