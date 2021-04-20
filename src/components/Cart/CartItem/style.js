import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    marginTop: "45px",
    boxShadow: `0px 4px 8px  rgba(0, 0, 0, 0.5)`,
  },
  media: {
    height: 160,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cartActions: {
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "whitesmoke",
    },
  },
}));
