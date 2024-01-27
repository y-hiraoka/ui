import Color from "color";

export function selectHighContrastColors(
  baseColors: Record<string, string>,
  target1: string,
  target2: string,
): Record<string, string> {
  return Object.fromEntries(
    Object.entries(baseColors).map(([key, value]) => {
      const baseColor = Color(value);
      const target1Color = Color(target1);
      const target2Color = Color(target2);

      return [
        key,
        baseColor.contrast(target1Color) > baseColor.contrast(target2Color)
          ? target1
          : target2,
      ];
    }),
  );
}
