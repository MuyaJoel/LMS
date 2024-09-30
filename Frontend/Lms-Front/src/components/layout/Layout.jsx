import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./footer";
import Sidebar from "./sidebar";

const Layout = () => {
  return (
    <Grid
      templateAreas={{
        base: `"navbar" "main" "footer"`,
        md: `"navbar navbar" "sidebar main" "footer footer"`,
      }}
      templateColumns={{
        base: "1fr",
        md: "250px 1fr",
      }}
    >
      <GridItem area="navbar" bg="lightblue">
        <NavBar />
      </GridItem>
      <GridItem area="sidebar" bg="darkgrey" display={{base:"none", md:"block"}}>
        <Sidebar />
      </GridItem>
      <GridItem area="main" bg="whitesmoke">
        <Outlet />
      </GridItem>
      <GridItem area="footer" bg="goldenrod">
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default Layout;
