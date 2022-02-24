import React from "react";
import {
  Accordion,
  AccordionDetails,
  Button,
  Card,
  CardContent,
  Divider,
  FormControl,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const useStyles = makeStyles((theme) => ({
  root: {},
  productCard: {
    borderRadius: 10,
    backgroundColor: theme.palette.white.main,
    marginTop: theme.spacing(0),
  },
  selectedProductView: {
    borderRadius: 10,
    background:
      "linear-gradient(300deg, #2cb34a -10%, rgba(156, 116, 97, 0) 10.04%)",
    marginTop: theme.spacing(3),
    marginLeft: "25%",
    marginRight: "25%",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(1),
      marginLeft: "0%",
      marginRight: "0%",
    },
  },
  pageHeading: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    fontWeight: 700,
    fontSize: 21,
    textAlign: "center",
    alignContent: "center",
  },
  filteredCardSubheading: {
    fontWeight: 700,
    fontSize: 15,
    textAlign: "center",
    alignContent: "center",
  },
  midPageDivider: {
    marginTop: theme.spacing(2),
  },
  filterFields: {
    borderRadius: 20,
    height: 35,
  },
  filterFieldLabels: {
    color: theme.palette.primary.main,
  },
  pageSubHeading: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    fontWeight: 300,
    fontSize: 14,
    textAlign: "center",
    alignContent: "center",
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(0),
    },
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
  buttonAction: {
    textTransform: "capitalize",
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    borderColor: theme.palette.primary.main,
  },
  actionSpace: {
    justifyItems: "center",
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
    fontSize: 40,
    fontWeight: "bold",
    fontStyle: "normal",
    textAlign: "center",
    color: theme.palette.black,
  },
  productColorName: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    textAlign: "center",
    color: theme.palette.white.main,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  bronzeProductColorHeader: {
    background: theme.palette.primary.main,
    paddingTop: theme.spacing(0),
    marginTop: theme.spacing(0),
    height: "66px",
    opacity: 0.8,
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
  createData("HOME PLUS 1000", "Ksh. 1,000", "5GB + 400Min + 1000SMS"),
  createData("HOME PLUS 2000", "Ksh. 2,000", "15GB + 1000Min + 2000SMS"),
  createData("HOME PLUS 3000", "Ksh. 3,000", "25GB + 1500Min + 3000SMS"),
  createData("HOME PLUS 5000", "Ksh. 5,000", "35GB + 2500Min + 5000SMS"),
];

const homePackages = [
  {
    productId: 1,
    packageName: "Bronze",
    packagePrice: "Kshs 2,999",
    packageBandwidth: "8 MBPS",
    priceInt: 2999,
  },
  {
    productId: 2,
    packageName: "Silver",
    packagePrice: "Kshs 4,100",
    packageBandwidth: "20 MBPS",
    priceInt: 4100,
  },
  {
    productId: 3,
    packageName: "Gold",
    packagePrice: "Kshs 6,299",
    packageBandwidth: "40 MBPS",
    priceInt: 6299,
  },
  {
    productId: 4,
    packageName: "Diamond",
    packagePrice: "Kshs 12,499",
    packageBandwidth: "100 MBPS",
    priceInt: 12499,
  },
];

const homePlusPackages = [
  {
    id: 1,
    packageName: "Home Plus 1000",
    priceInt: 1000,
    plusBundle: "5GB + 400Min + 1000SMS",
  },
  {
    id: 2,
    packageName: "Home Plus 2000",
    priceInt: 2000,
    plusBundle: "15GB + 1000Min + 2000SMS",
  },
  {
    id: 3,
    packageName: "Home Plus 3000",
    priceInt: 3000,
    plusBundle: "25GB + 1500Min + 3000SMS",
  },
  {
    id: 4,
    packageName: "Home Plus 5000",
    priceInt: 5000,
    plusBundle: "35GB + 2500Min + 5000SMS",
  },
];

const HomePlusPackages = () => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(true);
  const [fiberProductId, setFiberProductId] = React.useState(1);
  const [plusProductId, setPlusProductId] = React.useState(1);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  const numberFormat = new Intl.NumberFormat("en-US");

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item lg={12} md={12} xl={12} sm={12} xs={12}>
          <Card className={classes.productCard} elevation={0}>
            <CardContent>
              <Typography className={classes.pageHeading}>
                Home Plus Packages
              </Typography>
              <Accordion
                expanded={expanded}
                onChange={handleChange}
                variant="outlined"
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography>Home Plus Packages</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <TableContainer className={classes.inner}>
                        <Paper>
                          <Table aria-label="simple table-1">
                            <TableHead className={classes.tableRibbon}>
                              <TableRow>
                                <TableCell
                                  className={classes.tableHead}
                                  align="left"
                                >
                                  Package
                                </TableCell>
                                <TableCell
                                  className={classes.tableHead}
                                  align="left"
                                >
                                  Price
                                </TableCell>
                                <TableCell
                                  className={classes.tableHead}
                                  align="left"
                                >
                                  Bundle
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows.map((row) => (
                                <TableRow key={row.packageName}>
                                  <TableCell
                                    component="th"
                                    scope="row"
                                    align="center"
                                  >
                                    {row.packageName}
                                  </TableCell>
                                  <TableCell align="left">
                                    {row.price}
                                  </TableCell>
                                  <TableCell align="left">
                                    {row.bundle}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </Paper>
                      </TableContainer>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Typography className={classes.subText}>
                        All bundles are valid for 30 days <br />
                        All bundles come with a 2GB Free YouTube bundle and Free
                        WhatsApp access upon full utilization of the data bundle{" "}
                        <br />
                        Customers will be able to share the bundle resources
                        with members of their household
                      </Typography>
                      <div align="center">
                        <Link to="/faqs" target="_blank">
                          <Button
                            variant="outlined"
                            className={classes.buttonAction}
                          >
                            Find out more <NavigateNextIcon />
                          </Button>
                        </Link>
                      </div>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
              <Typography className={classes.pageHeading}>
                Create your preference
              </Typography>
              <Typography className={classes.pageSubHeading}>
                Select your fiber package and match it to a preferred Home Plus
                package. Prices will be shown below your selection.
              </Typography>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                  &nbsp;
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    className={classes.filterFieldLabels}
                  >
                    Fiber package interested in
                  </Typography>
                  <FormControl variant="standard" fullWidth>
                    <Select
                      labelId="demo-simple-select-standard-label-products"
                      id="demo-simple-select-standard-products"
                      variant="outlined"
                      fullWidth
                      onChange={(e) => {
                        setFiberProductId(e.target.value);
                      }}
                      className={classes.filterFields}
                      value={fiberProductId}
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
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    className={classes.filterFieldLabels}
                  >
                    Home-plus package interested in
                  </Typography>
                  <FormControl variant="standard" fullWidth>
                    <Select
                      labelId="demo-simple-select-standard-label-products"
                      id="demo-simple-select-standard-products"
                      variant="outlined"
                      fullWidth
                      className={classes.filterFields}
                      onChange={(e) => {
                        setPlusProductId(e.target.value);
                      }}
                      value={plusProductId}
                    >
                      {homePlusPackages.map((item) => (
                        <MenuItem value={item.id} key={item.id}>
                          <Typography className={classes.productListing}>
                            <span className={classes.packageName}>
                              {item.packageName}
                            </span>
                            <span>
                              {" "}
                              {item.packageBandwidth} |{" Ksh. "}
                              {item.priceInt}
                            </span>
                          </Typography>
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                  &nbsp;
                </Grid>
              </Grid>
              <Card
                className={classes.selectedProductView}
                variant="outlined"
                elevation={0}
                hidden={!fiberProductId > 0 && !plusProductId > 0}
              >
                <Paper
                  elevation={1}
                  className={classes.bronzeProductColorHeader}
                >
                  <Typography className={classes.productColorName}>
                    {homePackages[fiberProductId - 1].packageName} +{" "}
                    {homePlusPackages[plusProductId - 1].packageName}
                  </Typography>
                </Paper>
                <CardContent>
                  <Grid container spacing={5}>
                    <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                      <Typography className={classes.filteredCardSubheading}>
                        What you get
                      </Typography>
                      <Divider variant="inset" />
                      <List component="nav" aria-label="main mailbox folders">
                        <ListItem className={classes.listText} key={0}>
                          <ListItemIcon className={classes.availableIconColor}>
                            <CheckCircleIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography className={classes.productListing}>
                                <span className={classes.packageName}>
                                  {homePackages[fiberProductId - 1].packageName}{" "}
                                </span>
                                <span>
                                  {
                                    homePackages[fiberProductId - 1]
                                      .packageBandwidth
                                  }
                                </span>
                              </Typography>
                            }
                          />
                        </ListItem>
                        <ListItem className={classes.listText} key={1}>
                          <ListItemIcon className={classes.availableIconColor}>
                            <CheckCircleIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography variant="body2">
                                {homePlusPackages[plusProductId - 1].plusBundle}
                              </Typography>
                            }
                          />
                        </ListItem>
                      </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                      <Typography className={classes.productCardTitle}>
                        KSH.
                      </Typography>
                      <Typography className={classes.bundleSizeText}>
                        {numberFormat.format(
                          homePackages[fiberProductId - 1].priceInt +
                            homePlusPackages[plusProductId - 1].priceInt
                        )}
                      </Typography>
                      <div align="center">
                        <Link to="/faqs" target="_blank">
                          <Button
                            variant="outlined"
                            className={classes.buttonAction}
                          >
                            Find out more <NavigateNextIcon />
                          </Button>
                        </Link>
                      </div>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default React.memo(HomePlusPackages);