import PropTypes from "prop-types";
import React from "react";

// material-ui
// import { makeStyles } from "@material-ui/styles";
import { CardContent, Grid, Typography } from "@material-ui/core";

// project imports
// import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import MainCard from "../../../ui-component/cards/MainCard";
import SkeletonPopularCard from "../../../ui-component/cards/Skeleton/PopularCard";
import { gridSpacing } from "../../../store/constant";

// style constant
// const useStyles = makeStyles((theme) => ({
//   cardAction: {
//     padding: "10px",
//     paddingTop: 0,
//     justifyContent: "center",
//   },
//   primaryLight: {
//     color: theme.palette.primary[200],
//     cursor: "pointer",
//   },
//   divider: {
//     marginTop: "12px",
//     marginBottom: "12px",
//   },
//   avatarSuccess: {
//     width: "16px",
//     height: "16px",
//     borderRadius: "5px",
//     backgroundColor: theme.palette.success.light,
//     color: theme.palette.success.dark,
//     marginLeft: "15px",
//   },
//   successDark: {
//     color: theme.palette.success.dark,
//   },
//   avatarError: {
//     width: "16px",
//     height: "16px",
//     borderRadius: "5px",
//     backgroundColor: theme.palette.orange.light,
//     color: theme.palette.orange.dark,
//     marginLeft: "15px",
//   },
//   errorDark: {
//     color: theme.palette.orange.dark,
//   },
// }));

// ===========================|| DASHBOARD DEFAULT - POPULAR CARD ||=========================== //

const PopularCard = ({ isLoading }) => {
  // const classes = useStyles();
  //
  // const [anchorEl, setAnchorEl] = React.useState(null);
  //
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  //
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard />
      ) : (
        <MainCard content={false}>
          <CardContent>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Grid
                  container
                  alignContent="center"
                  justifyContent="space-between"
                >
                  <Grid item>
                    <Typography variant="h4">Popular Stakes</Typography>
                  </Grid>
                  {/* <Grid item> */}
                  {/*   <MoreHorizOutlinedIcon */}
                  {/*     fontSize="small" */}
                  {/*     className={classes.primaryLight} */}
                  {/*     aria-controls="menu-popular-card" */}
                  {/*     aria-haspopup="true" */}
                  {/*     onClick={handleClick} */}
                  {/*  /> */}
                  {/*   <Menu */}
                  {/*     id="menu-popular-card" */}
                  {/*     anchorEl={anchorEl} */}
                  {/*     keepMounted */}
                  {/*    open={Boolean(anchorEl)} */}
                  {/*    onClose={handleClose} */}
                  {/*    variant="selectedMenu" */}
                  {/*    anchorOrigin={{ */}
                  {/*      vertical: "bottom", */}
                  {/*      horizontal: "right", */}
                  {/*    }} */}
                  {/*    transformOrigin={{ */}
                  {/*      vertical: "top", */}
                  {/*      horizontal: "right", */}
                  {/*    }} */}
                  {/*  > */}
                  {/*    <MenuItem onClick={handleClose}> Today</MenuItem> */}
                  {/*    <MenuItem onClick={handleClose}> This Month</MenuItem> */}
                  {/*    <MenuItem onClick={handleClose}> This Year </MenuItem> */}
                  {/*  </Menu> */}
                  {/* </Grid> */}
                </Grid>
              </Grid>
              {/* <Grid item xs={12} sx={{ pt: "16px !important" }}> */}
              {/*  <PopularProductsChartArea /> */}
              {/* </Grid> */}
              {/* <Grid item xs={12}> */}
              {/*  <Grid container direction="column"> */}
              {/*    <Grid item> */}
              {/*      <Grid */}
              {/*        container */}
              {/*        alignItems="center" */}
              {/*        justifyContent="space-between" */}
              {/*      > */}
              {/*        <Grid item> */}
              {/*          <Typography variant="subtitle1" color="inherit"> */}
              {/*            Stake 1 */}
              {/*          </Typography> */}
              {/*        </Grid> */}
              {/*        <Grid item> */}
              {/*          <Grid */}
              {/*            container */}
              {/*            alignItems="center" */}
              {/*            justifyContent="space-between" */}
              {/*          > */}
              {/*            <Grid item> */}
              {/*              <Typography variant="subtitle1" color="inherit"> */}
              {/*                Ksh. 1839.00 */}
              {/*              </Typography> */}
              {/*            </Grid> */}
              {/*            <Grid item> */}
              {/*              <Avatar */}
              {/*                variant="rounded" */}
              {/*                className={classes.avatarSuccess} */}
              {/*              > */}
              {/*                <KeyboardArrowUpOutlinedIcon */}
              {/*                  fontSize="small" */}
              {/*                  color="inherit" */}
              {/*                /> */}
              {/*              </Avatar> */}
              {/*            </Grid> */}
              {/*          </Grid> */}
              {/*        </Grid> */}
              {/*      </Grid> */}
              {/*    </Grid> */}
              {/*    <Grid item> */}
              {/*      <Typography */}
              {/*        variant="subtitle2" */}
              {/*        className={classes.successDark} */}
              {/*      > */}
              {/*        10 Orders Today */}
              {/*      </Typography> */}
              {/*    </Grid> */}
              {/*  </Grid> */}
              {/*  <Divider className={classes.divider} /> */}
              {/*  <Grid container direction="column"> */}
              {/*    <Grid item> */}
              {/*      <Grid */}
              {/*        container */}
              {/*        alignItems="center" */}
              {/*        justifyContent="space-between" */}
              {/*      > */}
              {/*        <Grid item> */}
              {/*          <Typography variant="subtitle1" color="inherit"> */}
              {/*            Steak 2 */}
              {/*          </Typography> */}
              {/*        </Grid> */}
              {/*        <Grid item> */}
              {/*          <Grid */}
              {/*            container */}
              {/*            alignItems="center" */}
              {/*            justifyContent="space-between" */}
              {/*          > */}
              {/*            <Grid item> */}
              {/*              <Typography variant="subtitle1" color="inherit"> */}
              {/*                Ksh. 1100.00 */}
              {/*              </Typography> */}
              {/*            </Grid> */}
              {/*            <Grid item> */}
              {/*              <Avatar */}
              {/*                variant="rounded" */}
              {/*                className={classes.avatarError} */}
              {/*              > */}
              {/*                <KeyboardArrowDownOutlinedIcon */}
              {/*                  fontSize="small" */}
              {/*                  color="inherit" */}
              {/*                /> */}
              {/*              </Avatar> */}
              {/*            </Grid> */}
              {/*          </Grid> */}
              {/*        </Grid> */}
              {/*      </Grid> */}
              {/*    </Grid> */}
              {/*    <Grid item> */}
              {/*      <Typography */}
              {/*        variant="subtitle2" */}
              {/*        className={classes.successDark} */}
              {/*      > */}
              {/*        14 Orders Today */}
              {/*      </Typography> */}
              {/*    </Grid> */}
              {/*  </Grid> */}
              {/*  <Divider className={classes.divider} /> */}
              {/*  <Grid container direction="column"> */}
              {/*    <Grid item> */}
              {/*      <Grid */}
              {/*        container */}
              {/*        alignItems="center" */}
              {/*        justifyContent="space-between" */}
              {/*      > */}
              {/*        <Grid item> */}
              {/*          <Typography variant="subtitle1" color="inherit"> */}
              {/*            Steak 4 */}
              {/*          </Typography> */}
              {/*        </Grid> */}
              {/*        <Grid item> */}
              {/*          <Grid */}
              {/*            container */}
              {/*            alignItems="center" */}
              {/*            justifyContent="space-between" */}
              {/*          > */}
              {/*            <Grid item> */}
              {/*              <Typography variant="subtitle1" color="inherit"> */}
              {/*                Ksh 2000.00 */}
              {/*              </Typography> */}
              {/*            </Grid> */}
              {/*            <Grid item> */}
              {/*              <Avatar */}
              {/*                variant="rounded" */}
              {/*                className={classes.avatarSuccess} */}
              {/*              > */}
              {/*                <KeyboardArrowUpOutlinedIcon */}
              {/*                  fontSize="small" */}
              {/*                  color="inherit" */}
              {/*                /> */}
              {/*              </Avatar> */}
              {/*            </Grid> */}
              {/*          </Grid> */}
              {/*        </Grid> */}
              {/*      </Grid> */}
              {/*    </Grid> */}
              {/*    <Grid item> */}
              {/*      <Typography */}
              {/*        variant="subtitle2" */}
              {/*        className={classes.successDark} */}
              {/*      > */}
              {/*        109 Orders this week */}
              {/*      </Typography> */}
              {/*    </Grid> */}
              {/*  </Grid> */}
              {/*  <Divider className={classes.divider} /> */}
              {/*  <Grid container direction="column"> */}
              {/*    <Grid item> */}
              {/*      <Grid */}
              {/*        container */}
              {/*        alignItems="center" */}
              {/*        justifyContent="space-between" */}
              {/*      > */}
              {/*        <Grid item> */}
              {/*          <Typography variant="subtitle1" color="inherit"> */}
              {/*            Steak 9 */}
              {/*          </Typography> */}
              {/*        </Grid> */}
              {/*        <Grid item> */}
              {/*          <Grid */}
              {/*            container */}
              {/*            alignItems="center" */}
              {/*            justifyContent="space-between" */}
              {/*          > */}
              {/*            <Grid item> */}
              {/*              <Typography variant="subtitle1" color="inherit"> */}
              {/*                Ksh. 9189.00 */}
              {/*              </Typography> */}
              {/*            </Grid> */}
              {/*            <Grid item> */}
              {/*              <Avatar */}
              {/*                variant="rounded" */}
              {/*                className={classes.avatarError} */}
              {/*              > */}
              {/*                <KeyboardArrowDownOutlinedIcon */}
              {/*                  fontSize="small" */}
              {/*                  color="inherit" */}
              {/*                /> */}
              {/*              </Avatar> */}
              {/*            </Grid> */}
              {/*          </Grid> */}
              {/*        </Grid> */}
              {/*      </Grid> */}
              {/*    </Grid> */}
              {/*    <Grid item> */}
              {/*      <Typography */}
              {/*        variant="subtitle2" */}
              {/*        className={classes.successDark} */}
              {/*      > */}
              {/*        12 Orders today */}
              {/*      </Typography> */}
              {/*    </Grid> */}
              {/*  </Grid> */}
              {/*  <Divider className={classes.divider} /> */}
              {/*  <Grid container direction="column"> */}
              {/*    <Grid item> */}
              {/*      <Grid */}
              {/*        container */}
              {/*        alignItems="center" */}
              {/*        justifyContent="space-between" */}
              {/*      > */}
              {/*        <Grid item> */}
              {/*          <Typography variant="subtitle1" color="inherit"> */}
              {/*            Steak 12 */}
              {/*          </Typography> */}
              {/*        </Grid> */}
              {/*        <Grid item> */}
              {/*          <Grid */}
              {/*            container */}
              {/*            alignItems="center" */}
              {/*            justifyContent="space-between" */}
              {/*          > */}
              {/*            <Grid item> */}
              {/*              <Typography variant="subtitle1" color="inherit"> */}
              {/*                Ksh. 9,189.00 */}
              {/*              </Typography> */}
              {/*            </Grid> */}
              {/*            <Grid item> */}
              {/*              <Avatar */}
              {/*                variant="rounded" */}
              {/*                className={classes.avatarError} */}
              {/*              > */}
              {/*                <KeyboardArrowDownOutlinedIcon */}
              {/*                  fontSize="small" */}
              {/*                  color="inherit" */}
              {/*                /> */}
              {/*              </Avatar> */}
              {/*            </Grid> */}
              {/*          </Grid> */}
              {/*        </Grid> */}
              {/*      </Grid> */}
              {/*    </Grid> */}
              {/*    <Grid item> */}
              {/*      <Typography */}
              {/*        variant="subtitle2" */}
              {/*        className={classes.errorDark} */}
              {/*      > */}
              {/*        10 Orders today */}
              {/*      </Typography> */}
              {/*    </Grid> */}
              {/*  </Grid> */}
              {/* </Grid> */}
            </Grid>
          </CardContent>
        </MainCard>
      )}
    </>
  );
};

PopularCard.propTypes = {
  isLoading: PropTypes.bool,
};

export default PopularCard;
