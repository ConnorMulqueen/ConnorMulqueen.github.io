import React from 'react';
import Container from '@material-ui/core/Container';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Lottie from 'react-lottie';

const useStyles = makeStyles({
    backgroundDiv: {
        paddingBottom: 100,
    },
    bigAvatar: {
      margin: 50,
      width: 400,
      height: 400,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center'
    },
    smallAvatar: {
        margin: 10,
        width: 200,
        height: 200
    },
    bottomArrow: {
        position: 'relative',
        bottom: 0
    }
  });

const LottieOptions = {
        loop: true,
        autoplay: true,
        animationData: require('./Assets/Lottie/downwardArrow.json'),
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        },
        paddingTop: 600
};

const Home: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.backgroundDiv}>
            <Container>
                <Grid container justify = "center">
                    <Avatar alt="profile_pic" src={require('./Assets/Images/profile_pic.jpg')} className={classes.bigAvatar} />
                </Grid>
                <Typography variant="h1">
                    Connor Mulqueen
                </Typography>
                <Typography variant="h4">
                    Software Engineer
                </Typography>

                <Lottie options={LottieOptions}
                    height={50}
                    width={50}
                    />
         </Container>

        </div>
    )
}

export default Home;
