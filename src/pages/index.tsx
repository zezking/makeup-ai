import { Link, Container, Navbar, Text, Image } from "@nextui-org/react";
import Layout from "@/components/Layout";
import Survey from "@/components/Survey";
import "../styles/Home.module.css";
export default function Home() {
  const toggleItems = ["Item1", "Item2", "Item3"];
  return (
    <Layout>
      <Navbar isBordered height="139px">
        <Navbar.Content>
          <Container direction="column">
            <Text h2 size={30}>
              MakeupApp
            </Text>
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
                key={index}
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
      <Image
        css={{
          clipPath: "circle(100px at center)",
          height: "300px",
          marginTop: "-34px",
        }}
        src={"./profile.jpg"}
      />
      <Survey />
    </Layout>
  );
}
