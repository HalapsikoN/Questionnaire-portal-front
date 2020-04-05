export const SINGLE_LINE_TEXT = 'Single line text';
export const MULTILINE_TEXT = 'Multiline text';
export const RADIO_BUTTON = 'Radio button';
export const CHECKBOX = 'Checkbox';
export const COMBOBOX = 'Combobox';
export const DATE = 'Date';


export function convertFieldTypeToStringText(string) {
    const end=string.trim().toLowerCase().substr(1).replace(/[_]/g, " ");

    const firstLetter=string.trim()[0];

    return firstLetter+end;
}