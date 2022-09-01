export function initTheme() {
  return {
    dark: false,
    toggleTheme() {
      this.$store.app.isDark = !this.$store.app.isDark;
    },
  };
}
