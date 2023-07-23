import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Box from "@mui/material/Box";
// import { themeOptions as muiTheme } from "./muiTheme";

function Nav() {
  return (
    <Box
      // theme={muiTheme}
      // display={"flex"}
      // justify-content={"flex-end"}
      sx={{
        width: 3000,
        height: 150,
        backgroundColor: "primary.dark",
      }}
    >
      <Breadcrumbs separator="||" size="lg">
        <Link
          to={"/who-i-am"}
          underline="none"
          level="h5"
          className="nav-item custom-nav"
          style={{ margin: "1rem" }}
        >
          who i am
        </Link>
        <Link
          to={"/who-i-am"}
          underline="none"
          level="h5"
          variant="primary"
          className="nav-item custom-nav"
          style={{ margin: "1rem" }}
        >
          what i do
        </Link>
        <Link
          to={"/who-i-am"}
          underline="none"
          level="h5"
          variant="primary"
          className="nav-item custom-nav"
          style={{ margin: "1rem" }}
        >
          contact me
        </Link>
        <Link
          to={"/who-i-am"}
          underline="none"
          level="h5"
          variant="primary"
          className="nav-item custom-nav"
          style={{ margin: "1rem" }}
        >
          photography
        </Link>
        <Link
          to={"/who-i-am"}
          underline="none"
          level="h5"
          variant="primary"
          className="nav-item custom-nav"
          style={{ margin: "1rem" }}
        >
          audio
        </Link>
      </Breadcrumbs>
    </Box>
  );
}

export default Nav;
