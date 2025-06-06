import { ALIGNMENT_MAP } from './constants';

// https://www.thespreadsheetguru.com/hex-color-codes-for-userforms/
// why tf are they using vb hex color codes?
export function convertVBHexToCssColor(vbHexColor: string): string {
    let hexStr = vbHexColor.trim();

    if (hexStr.startsWith('&H00')) {
        hexStr = hexStr.replace('&H00', '');
    }

    if (hexStr.endsWith('&')) {
        hexStr = hexStr.slice(0, -1);
    }

    return '#' + hexStr;
}

export function quoteString(s: string): string {
    const escaped = s
        .replace(/\\/g, '\\\\') // backslashes
        .replace(/"/g, '\\\\"') // double quotes
        .replace(/\n/g, '\\n'); // nl
    return `"${escaped}"`;
}

export function secondsToMilliseconds(seconds: number): number {
    return seconds * 1000;
}

export function formatHclValue(key: string, value: any): string | number | boolean {
    if (key === 'align' && typeof value === 'number') {
        return quoteString(ALIGNMENT_MAP[value] || `unknown-alignment-${value}`);
    }
    if ((key === 'in' || key === 'out') && typeof value === 'number') {
        return secondsToMilliseconds(value);
    }

    if (key === 'color' || key === 'border_color') {
        const colorData = convertVBHexToCssColor(value);
        if (colorData) {
            return quoteString(colorData);
        }
    }

    if (typeof value === 'string') {
        return quoteString(value);
    }
    if (typeof value === 'number' || typeof value === 'boolean') {
        return value;
    }

    return quoteString(String(value));
}

export function transformAssTextToEsl(assText: string): string {
    return assText.replace(/\\N/g, '<br>');
}

export function getDifferenceKeys(
    source: Record<string, any>,
    target: Record<string, any>,
): string[] {
    const result: Record<string, any> = {};
    for (const key in source) {
        if (source[key] !== target[key]) {
            result[key] = source[key];
        }
    }
    return Object.keys(result);
}

export function diffObj(
    source: Record<string, any>,
    target: Record<string, any>,
): Record<string, any> {
    const keys = getDifferenceKeys(source, target);
    const newObj: Record<string, any> = {};
    for (const key of keys) {
        newObj[key] = target[key];
    }
    return newObj;
}
