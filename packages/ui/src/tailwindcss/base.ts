import plugin from "tailwindcss/plugin";

export const basePlugin = plugin(({ addBase }) => {
  addBase({
    body: {
      color: 'theme("textColor.primary")',
      backgroundColor: 'theme("backgroundColor.base")',
    },

    '[data-color-mode="dark"] body': {
      color: 'theme("textColor.primary-dark")',
      backgroundColor: 'theme("colors.gray.950")',
    },
  });
});
