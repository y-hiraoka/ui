type ClassName = string | false | null | undefined;
export function classNames(...classes: ClassName[]): string {
  return classes.filter(Boolean).join(" ");
}
