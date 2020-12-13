import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    
    textAlign:"center"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    width:"150px",
    marginLeft:"auto",
    marginRight:"auto"
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',

    width: '100%',
    justifyContent: 'space-between',
  },
}));
