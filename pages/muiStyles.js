import { makeStyles } from '@material-ui/core/styles';

/** Index Styles */
export const useStylesIndex = makeStyles(theme => ({
  box: {
    marginTop: 0
  },
  root: {
    flexGrow: 1,
    background: '#B8D8D8',
    overflow: 'hidden'
  },
  zonePaper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: '#7A9E9F',
  },
  zoneRangePaper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: '#EEF5DB',
  },
  title: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 24,
    marginBottom: 24,
    color: '#FE5F55'
  },
  textField: {
    background: '##cc8e35',
    marginLeft: 16,
    borderColor: 'red !important'
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
    backgroundColor: '#EEF5DB',
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