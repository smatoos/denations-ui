import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledComponentsThemeProvider theme={""}>
      {children}
    </StyledComponentsThemeProvider>
  );
}
