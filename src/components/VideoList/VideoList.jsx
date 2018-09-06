import React from 'react';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import styles from './styles';

const VideoList = ({ videoImg, videoTitle }) => (
    <div id="video-list">
        <div style={styles.videoContainer}>
            <img src={videoImg} alt={videoTitle} style={styles.videoImg} />
            <MediaQuery maxWidth={414.5}>
                <p style={styles.videoDesc}>{videoTitle}</p>
            </MediaQuery>
        </div>
    </div>
);

VideoList.propTypes = {
    videoImg: PropTypes.string.isRequired,
    videoTitle: PropTypes.string.isRequired
};

export default VideoList;
