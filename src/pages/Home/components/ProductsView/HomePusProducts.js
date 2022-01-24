import React from "react";
import {
  Card,
  CardContent,
  Divider,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {},
  productCard: {
    borderRadius: 10,
    backgroundColor: theme.palette.white.main,
    marginTop: theme.spacing(0),
  },
  pageHeading: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    fontWeight: 700,
    fontSize: 21,
    textAlign: "center",
    alignContent: "center",
  },
  midPageDivider: {
    marginTop: theme.spacing(2),
  },
  pageSubHeading: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    fontWeight: 300,
    fontSize: 14,
    textAlign: "center",
    alignContent: "center",
  },
  subText: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    fontWeight: 300,
    fontSize: 12,
  },
  inner: {
    [theme.breakpoints.down("sm")]: {
      width: 260,
      overflowX: "scroll",
    },
    marginBottom: theme.spacing(2),
  },
  productCardTitle: {
    fontSize: 18,
    fontWeight: "lighter",
    fontStyle: "normal",
    textAlign: "center",
    color: theme.palette.black,
    textTransform: "uppercase",
  },
  tableHead: {
    fontWeight: 700,
    color: theme.palette.white.main,
  },
  tableRibbon: {
    backgroundColor: theme.palette.primary.main,
    opacity: 0.8,
  },
  validityCardTitle: {
    fontSize: 17,
    fontWeight: "lighter",
    fontStyle: "normal",
    textAlign: "center",
    color: theme.palette.black,
  },
  productCardSubtitle: {
    height: 18,
    fontSize: 15,
    fontWeight: "bolder",
    fontStyle: "normal",
    textAlign: "center",
  },
  bundleSizeText: {
    height: 59,
    fontSize: 50,
    fontWeight: "bold",
    fontStyle: "normal",
    textAlign: "center",
    color: theme.palette.black,
  },
  productColorName: {
    height: 48,
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "normal",
    textAlign: "center",
    color: theme.palette.white.main,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  bronzeProductColorHeader: {
    background:
      "linear-gradient(0deg, #8B5A44 0%, rgba(156, 116, 97, 0) 202.04%)",
    paddingTop: theme.spacing(-2),
    marginTop: theme.spacing(-1),
    height: "66px",
    borderRadius: "0 0 5 5",
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
  },
  silverProductColorHeader: {
    background:
      "linear-gradient(0deg, #515151 0%, rgba(255, 255, 255, 0) 181.63%)",
    paddingTop: theme.spacing(0),
    marginTop: theme.spacing(-1),
    height: "66px",
    borderRadius: "0 0 5 5",
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
  },
  goldProductColorHeader: {
    background:
      "linear-gradient(0deg, #E5BF4F 57.88%, rgba(255, 255, 255, 0) 246.94%)",
    paddingTop: theme.spacing(0),
    marginTop: theme.spacing(-1),
    height: "66px",
    borderRadius: "0 0 5 5",
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
  },
  diamondProductColorHeader: {
    background:
      "linear-gradient(0deg, #C2576C 0%, rgba(255, 255, 255, 0) 403.06%)",
    paddingTop: theme.spacing(0),
    marginTop: theme.spacing(-1),
    height: "66px",
    borderRadius: "0 0 5 5",
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
  },
  amountText: {
    height: 59,
    marginTop: theme.spacing(1),
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "normal",
    textAlign: "center",
    color: theme.palette.black,
  },
  productCardTitleHolder: {
    marginTop: theme.spacing(1),
  },
  listText: {
    fontSize: 8,
  },
  availableIconColor: {
    color: theme.palette.primary.main,
  },
  unavailableIconColor: {
    color: theme.palette.error.main,
  },
  getConnectedButton: {
    marginTop: theme.spacing(1),
    justifyContent: "center",
  },
  additionalFeatures: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    fontSize: 14,
  },
  plusPackageNotation: {
    textAlign: "center",
    fontSize: 15,
    marginTop: theme.spacing(1),
    fontWeight: 700,
  },
}));

function createData(packageName, price, bundle) {
  return { packageName, price, bundle };
}

const rows = [
  createData("BRONZE PLUS 1000", "Ksh. 1,000", "5GB + 400Min + 1000SMS"),
  createData("SILVER PLUS 2000", "Ksh. 2,000", "15GB + 1000Min + 2000SMS"),
  createData("GOLD PLUS 3000", "Ksh. 3,000", "25GB + 1500Min + 3000SMS"),
  createData("DIAMOND PLUS 5000", "Ksh. 5,000", "35GB + 2500Min + 5000SMS"),
];

const homePackages = [
  {
    productId: 1,
    packageName: "Bronze",
    packagePrice: "Kshs 2,999",
    packageBandwidth: "8 MBPS",
  },
  {
    productId: 2,
    packageName: "Silver",
    packagePrice: "Kshs 4,100",
    packageBandwidth: "20 MBPS",
  },
  {
    productId: 3,
    packageName: "Gold",
    packagePrice: "Kshs 6,299",
    packageBandwidth: "40 MBPS",
  },
  {
    productId: 4,
    packageName: "Diamond",
    packagePrice: "Kshs 12,499",
    packageBandwidth: "100 MBPS",
  },
];

const HomePlusPackages = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item lg={12} md={12} xl={12} sm={12} xs={12}>
          <Card className={classes.productCard} elevation={0}>
            <CardContent>
              <Typography className={classes.pageHeading}>
                Home Plus Packages
              </Typography>
              <TableContainer className={classes.inner}>
                <Paper>
                  <Table aria-label="simple table-1">
                    <TableHead className={classes.tableRibbon}>
                      <TableRow>
                        <TableCell className={classes.tableHead} align="left">
                          Package
                        </TableCell>
                        <TableCell className={classes.tableHead} align="left">
                          Price
                        </TableCell>
                        <TableCell className={classes.tableHead} align="left">
                          Bundle
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.packageName}>
                          <TableCell component="th" scope="row" align="center">
                            {row.packageName}
                          </TableCell>
                          <TableCell align="left">{row.price}</TableCell>
                          <TableCell align="left">{row.bundle}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Paper>
              </TableContainer>
              <Typography className={classes.subText}>
                All bundles are valid for 30 days <br />
                All bundles come with a 2GB Free YouTube bundle and Free
                WhatsApp access upon full utilization of the data bundle <br />
                Customers will be able to share the bundle resources with
                members of their household
              </Typography>
              <Divider className={classes.midPageDivider} />
              <Typography className={classes.pageHeading}>
                Create your preference
              </Typography>
              <Typography className={classes.pageSubHeading}>
                Select your fiber package and match it to a preferred Home Plus
                package. Prices will be shown below your selection.
              </Typography>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Typography variant="subtitle2" gutterBottom>
                    Package Interested in
                  </Typography>
                  <FormControl variant="standard" fullWidth>
                    <Select
                      labelId="demo-simple-select-standard-label-products"
                      id="demo-simple-select-standard-products"
                      fullWidth
                      // onChange={(e) => {
                      //   setFieldValue("productId", e.target.value, true);
                      // }}
                      // value={values.productId}
                    >
                      {homePackages.map((product) => (
                        <MenuItem
                          value={product.productId}
                          key={product.productId}
                        >
                          <Typography className={classes.productListing}>
                            <span className={classes.packageName}>
                              {product.packageName}
                            </span>
                            <span>
                              {" "}
                              {product.packageBandwidth} |{" "}
                              {product.packagePrice}
                            </span>
                          </Typography>
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Typography variant="subtitle2" gutterBottom>
                    Package Interested in
                  </Typography>
                  <FormControl variant="standard" fullWidth>
                    <Select
                      labelId="demo-simple-select-standard-label-products"
                      id="demo-simple-select-standard-products"
                      fullWidth
                      // onChange={(e) => {
                      //   setFieldValue("productId", e.target.value, true);
                      // }}
                      // value={values.productId}
                    >
                      {homePackages.map((product) => (
                        <MenuItem
                          value={product.productId}
                          key={product.productId}
                        >
                          <Typography className={classes.productListing}>
                            <span className={classes.packageName}>
                              {product.packageName}
                            </span>
                            <span>
                              {" "}
                              {product.packageBandwidth} |{" "}
                              {product.packagePrice}
                            </span>
                          </Typography>
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default React.memo(HomePlusPackages);
