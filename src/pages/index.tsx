import { Link, Container, Navbar, Text } from "@nextui-org/react";
import { Layout } from "@/components/Layout";
import dynamic from "next/dynamic";

const Survey = dynamic(() => import("@/components/Survey"), { ssr: false });
export default function Home() {
  const toggleItems = ["Item1", "Item2", "Item3"];
  return (
    <Layout>
      <Navbar isBordered height="139px">
        <Navbar.Content>
          <Container direction="column">
            <Text h2>MakeupApp</Text>
            <Text>Estee Lauder</Text>
          </Container>
        </Navbar.Content>
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" />
        </Navbar.Brand>
        <Navbar.Collapse>
          {toggleItems.map((item, index) => (
            <Navbar.CollapseItem key={item}>
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
      <Survey />
    </Layout>
  );
}
