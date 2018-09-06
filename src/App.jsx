import { Button } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import React from 'react';
import MediaQuery from 'react-responsive';
import styles from './styles/styles';
import { CustomNav } from './components/CustomNav';
import { VideoList } from './components/VideoList';
import { Social } from './components/Social';
import s1 from './assets/s1.png';
import s2 from './assets/s2.png';
import s3 from './assets/s3.png';
import s4 from './assets/s4.png';
import stream from './assets/stream.png';
import './styles/main.css';

class App extends React.Component {
    render() {
        return (
            <div style={styles.container} className="App">
                <CustomNav />
                <div id="current-content" style={styles.currentContent}>
                    <div id="video-container" style={styles.videoContainer}>
                        <iframe
                            title="gandalf"
                            id="current-video"
                            style={styles.video}
                            src="https://www.youtube.com/embed/G1IbRujko-A?rel=0"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        />
                        <MediaQuery minWidth={750.5}>
                            <h2>Find your next favourite</h2>
                            <div style={styles.videoSuggestionContainer}>
                                <img
                                    src={s1}
                                    alt="s1"
                                    style={styles.videoSuggestion}
                                />
                                <img
                                    src={s2}
                                    alt="s2"
                                    style={styles.videoSuggestion}
                                />
                                <img
                                    src={s3}
                                    alt="s3"
                                    style={styles.videoSuggestion}
                                />
                                <img
                                    src={s4}
                                    alt="s4"
                                    style={styles.videoSuggestion}
                                />
                            </div>
                            <Button
                                variant="fab"
                                aria-label="Left"
                                style={styles.left}
                            >
                                <KeyboardArrowLeft />
                            </Button>
                            <Button
                                variant="fab"
                                aria-label="Right"
                                style={styles.right}
                            >
                                <KeyboardArrowRight />
                            </Button>
                        </MediaQuery>
                    </div>
                    <MediaQuery
                        id="desc-container"
                        style={styles.descContainer}
                        minWidth={750.5}
                    >
                        <div style={styles.descContent}>
                            <h1>Random Title</h1>
                            <p>Some random episode</p>
                            <hr style={styles.break} />
                            <p>
                                <strong style={styles.rating}>PG</strong>
                                &nbsp;Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div
                            id="socialContainer"
                            style={styles.socialContainer}
                        >
                            <h2>Social Activity</h2>
                            <Social text="Is currently watching Gandalf" />
                        </div>
                        <div id="obsession" style={styles.obsession}>
                            <img
                                src={stream}
                                alt="stream"
                                style={styles.obsImg}
                            />
                            <div style={styles.obsDesc}>
                                <h3>Find your obsession</h3>
                                <p>More shows ></p>
                            </div>
                        </div>
                    </MediaQuery>
                </div>
                <MediaQuery maxWidth={750.5}>
                    <VideoList videoImg={s1} videoTitle="Random Title 1" />
                    <VideoList videoImg={s2} videoTitle="Random Title 2" />
                    <VideoList videoImg={s3} videoTitle="Random Title 3" />
                    <VideoList videoImg={s4} videoTitle="Random Title 4" />
                    <Social text="Is currently watching Gandalf" />
                </MediaQuery>
            </div>
        );
    }
}

export default App;
