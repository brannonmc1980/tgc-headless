/**
 * Converts straight quotes and apostrophes to typographic (curly) quotes.
 * Mirrors what WordPress wptexturize() does server-side, so this is a
 * no-op on content that already contains proper Unicode quotes.
 */
export function smartQuotes(str: string): string {
  return str
    // Opening double quote: after space, start, or opening punctuation
    .replace(/(^|[-\u2013\u2014\s([{])"(?=\S)/g, '$1\u201C')
    // Closing double quote: before space, end, or closing punctuation
    .replace(/(\S)"(?=[\s)\].,;:!?]|$)/g, '$1\u201D')
    // Remaining straight double quotes → closing (e.g. "word")
    .replace(/"/g, '\u201D')
    // Apostrophe in contractions and possessives (between word chars)
    .replace(/(\w)'(\w)/g, '$1\u2019$2')
    // Opening single quote: after space, start, or opening punctuation
    .replace(/(^|[-\u2013\u2014\s([{])'(?=\S)/g, '$1\u2018')
    // Remaining single quotes → closing/right
    .replace(/'/g, '\u2019')
}
