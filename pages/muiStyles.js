import { makeStyles } from '@material-ui/core/styles';

/** Index Styles */
export const useStylesIndex = makeStyles(theme => ({
  box: {
    marginTop: 0
  },
  root: {
    flexGrow: 1,
    background: '#A9A9A9',
    overflow: 'hidden'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: '#98B0B9',
  },
  title: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 24,
    marginBottom: 24,
    color: '#ffda79'
  },
  textField: {
    background: '##cc8e35',
    marginLeft: 16,
  },
  getZonesButton: {
    display: 'block',
    marginTop: 20,
    marginLeft: 16,
  },
  resetButton: {
    marginTop: 20,
    marginBottom: 50,
    marginLeft: 16,
  },
  titleContainer: {
    backgroundColor: '#227093',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 40
  }
}));

  /** ZoneGrid Styles  */
export const useStylesGrid = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: '#98B0B9'
  },
}));