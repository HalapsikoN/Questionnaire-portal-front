export const SINGLE_LINE_TEXT = 'SINGLE_LINE_TEXT';
export const MULTILINE_TEXT = 'MULTILINE_TEXT';
export const RADIO_BUTTON = 'RADIO_BUTTON';
export const CHECKBOX = 'CHECKBOX';
export const COMBOBOX = 'COMBOBOX';
export const DATE = 'DATE';


export function convertFieldTypeToStringText(string) {
    const end=string.trim().toLowerCase().substr(1).replace(/[_]/g, " ");

    const firstLetter=string.trim()[0];

    return firstLetter+end;
}