import plugin from "tailwindcss/plugin";

export const drawerPlugin = plugin(({ addComponents, theme }) => {
  addComponents({
    ".drawer-overlay": {
      position: "fixed",
      inset: "0",
      backgroundColor: theme("colors.black"),
      zIndex: "10",
      transition: "opacity 0.2s ease-in-out",
      "&[data-state=closed]": {
        opacity: "0",
      },
      "&[data-state=open]": {
        opacity: "0.2",
      },
    },
    ".drawer-content": {
      position: "fixed",
      width: theme("width.72"),
      height: "100dvh",
      inset: "0",
      zIndex: "20",
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme("colors.white"),
      overflow: "auto",
      transform: "translateX(-100%)",
      transition: "transform 0.2s ease-in-out",
      "&[data-state=closed]": {
        transform: "translateX(-100%)",
      },
      "&[data-state=open]": {
        transform: "translateX(0)",
      },
    },
  });
});
