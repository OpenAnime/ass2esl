import { CompiledASSStyle } from 'ass-compiler';

import { STYLE_PROPERTY_MAP, VALID_STYLE_PROPS } from './constants';
import { ProcessedStyle } from './interfaces';
import { formatHclValue, quoteString } from './utils';

export function processStyles(rawStyles: Record<string, CompiledASSStyle>): {
    stylesHCL: string;
    processedStylesMap: Map<string, ProcessedStyle>;
} {
    const stylesHCLParts: string[] = [];
    const processedStylesMap = new Map<string, ProcessedStyle>();

    for (const [styleName, _styleData] of Object.entries(rawStyles)) {
        const styleData = _styleData?.style;

        if (styleData && typeof styleData === 'object') {
            const currentStyle: ProcessedStyle = {
                name: styleName,
                hclProperties: [],
                features: new Set<string>(),
                margins: {},
            };

            for (const [assPropName, assPropValue] of Object.entries(styleData)) {
                if (assPropValue === null || assPropValue === undefined) continue;

                if (['Bold', 'Italic', 'Underline', 'StrikeOut'].includes(assPropName)) {
                    if (assPropValue === -1) {
                        // thought it was 0 and 1 but looks like it's -1, 0 and -1 enables the style. weird.
                        currentStyle.features.add(assPropName);
                    }
                }

                if (
                    ['MarginL', 'MarginR', 'MarginV'].includes(assPropName) &&
                    typeof assPropValue === 'number'
                ) {
                    currentStyle.margins[assPropName as 'MarginL' | 'MarginR' | 'MarginV'] =
                        assPropValue;
                }

                if (VALID_STYLE_PROPS.includes(assPropName)) {
                    const eslPropName = STYLE_PROPERTY_MAP[assPropName];
                    const eslValue = formatHclValue(eslPropName, assPropValue);
                    currentStyle.hclProperties.push(`    ${eslPropName} = ${eslValue}`);
                }
            }
            processedStylesMap.set(styleName, currentStyle);

            stylesHCLParts.push(`style ${quoteString(styleName)} {`);
            stylesHCLParts.push(...currentStyle.hclProperties.sort()); // todo: sort by priority
            stylesHCLParts.push(`}`);
        }
    }
    return { stylesHCL: stylesHCLParts.join('\n'), processedStylesMap };
}
