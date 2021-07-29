module.exports = {
  purge: [],
  darkMode: "media",
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontWeight: "400",
            },
            h2: {
              fontWeight: "400",
              textAlign: "center",
            },
            h3: {
              fontWeight: "400",
            },
          },
        },
        light: {
          css: {
            color: theme("colors.gray.100"),
            a: {
              color: theme("colors.gray.100"),
            },
            h1: {
              color: theme("colors.gray.100"),
            },
            h2: {
              color: theme("colors.gray.100"),
            },
            h3: {
              color: theme("colors.gray.100"),
            },
          },
        },
        "light-lg": {
          css: {
            color: theme("colors.gray.100"),
            a: {
              color: theme("colors.gray.100"),
            },
            h1: {
              color: theme("colors.gray.100"),
            },
            h2: {
              color: theme("colors.gray.100"),
            },
            h3: {
              color: theme("colors.gray.100"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
