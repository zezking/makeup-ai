import Box from "./Box";

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
  <Box
    css={{
      maxW: "100%",
      height: "100%",
    }}
  >
    {children}
  </Box>
);
export default Layout;
