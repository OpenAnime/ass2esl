export const ALIGNMENT_MAP: Record<number, string> = {
    1: 'bottom-left',
    2: 'bottom-center',
    3: 'bottom-right',
    4: 'middle-left',
    5: 'middle-center',
    6: 'middle-right',
    7: 'top-left',
    8: 'top-center',
    9: 'top-right',
};

export const STYLE_PROPERTY_MAP: Record<string, string> = {
    Fontname: 'font_family',
    Fontsize: 'font_size',
    PrimaryColour: 'color',
    OutlineColour: 'border_color',
    Outline: 'border_width',
    Alignment: 'align',
    Spacing: 'letter_spacing',
};

// todo: support more properties
export const TAG_PROPERTY_MAP: Record<string, string> = {
    fs: 'font_size',
};

export const VALID_STYLE_PROPS = Object.keys(STYLE_PROPERTY_MAP);

// the special ones aren't actually used in ESL. I just added them for our "for" loop to count them as legitimate properties so it doesn't skip processing them
export const CUE_PROPERTY_MAP: Record<string, string> = {
    start: 'in',
    end: 'out',
    style: 'style',
    alignment: 'align',
    layer: 'layer',
    slices: 'slices', // special handling for text and tags from fragments
    pos: 'position', // special handling for \pos
    move: 'move', // special handling for \move
    fade: 'fade', // special handling for \fad
};
export const VALID_CUE_PROPS = Object.keys(CUE_PROPERTY_MAP);

export const TEXT_STYLE_TAGS: Record<string, string> = {
    Bold: 'b',
    Italic: 'i',
    Underline: 'u',
    StrikeOut: 's',
};
