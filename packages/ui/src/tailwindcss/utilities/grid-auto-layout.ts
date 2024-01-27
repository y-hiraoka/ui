import plugin from "tailwindcss/plugin";

export const gridAutoLayoutPlugin = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      "grid-cols-auto-fill": (value) => ({
        gridTemplateColumns: `repeat(auto-fill, minmax(${value}, 1fr))`,
      }),
    },
    { values: theme("spacing") },
  );

  matchUtilities(
    {
      "grid-cols-auto-fit": (value) => ({
        gridTemplateColumns: `repeat(auto-fit, minmax(${value}, 1fr))`,
      }),
    },
    { values: theme("spacing") },
  );
});
