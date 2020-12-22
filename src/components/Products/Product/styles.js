import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: "100%",
    boxShadow: `0px 4px 8px  rgba(0, 0, 0, 0.5)`,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  mediaModal: {
    /* height: 50,
    paddingTop: '56.25%', // 16:9
    width:"450px",
    marginLeft:"auto",
    marginRight:"auto"*/
    height: 0,
    paddingTop: "56.25%", // 16:9

    borderRadius: "10px",
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardContent: {
    textAlign: "center",
  },
  Button: {},
}));
