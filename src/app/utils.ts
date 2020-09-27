export function fillTemplate(templateString: string, templateVars: {json: any}): string {
  return new Function('return `' + templateString + '`;').call(templateVars);
}
