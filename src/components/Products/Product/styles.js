import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)  => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: "100%",
  },
  media: {
    height: 50,
    paddingTop: '56.25%', // 16:9
    width:"300px",
    marginLeft:"auto",
    marginRight:"auto"
  },
  mediaModal:{
   /* height: 50,
    paddingTop: '56.25%', // 16:9
    width:"450px",
    marginLeft:"auto",
    marginRight:"auto"*/
    height: 50,
    paddingTop: '56.25%', // 16:9
    width:"300px",
    marginLeft:"auto",
    marginRight:"auto",
    borderRadius:"10px"
  },
  cardActions: {
display:"flex",
justifyContent:"space-between"
  },
  cardContent: {
  
    textAlign:"center"
  },
  Button:{
   



 
  
  },


}));