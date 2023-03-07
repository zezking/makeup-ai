import Box from "./Box";

export const Layout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => (
  <Box
    css={{
      maxW: "100%",
    }}
  >
    {children}
  </Box>
);
