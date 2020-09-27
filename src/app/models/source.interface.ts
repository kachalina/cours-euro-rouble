export interface Source {
    url: string;
    template: string;
    type: 'xml' | 'json';
    delimitr: '.' | ',';
    order: number;
}
