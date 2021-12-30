import React from "react";

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import './footer.scss'

function Footer() {
    return (
      <div className='footer'>
              <Grid container  spacing={4}>
                <Grid item xs={8} className="footer__content-left">
                        <Typography variant="h5" component="h3">
                                F1 Web App &hearts;
                        </Typography>
                </Grid>
                <Grid item xs={4} className="footer__content-right">
                    <Typography component="p">
                        @2021 All right reserved to site owner
                    </Typography>
                    <Typography component="p">
                    &copy; Luka Radovanovic & his sleepy koala
                    </Typography>
                </Grid>
              </Grid>
              </div>
    );
  }
   
   
  export default Footer;
