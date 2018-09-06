import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const VideoList = ({ videoImg, videoTitle }) => (
    <div id="video-list">
        <div style={styles.videoContainer}>
            <img src={videoImg} alt={videoTitle} style={styles.videoImg} />
            <p style={styles.videoDesc}>{videoTitle}</p>
        </div>
    </div>
);

VideoList.propTypes = {
    videoImg: PropTypes.string.isRequired,
    videoTitle: PropTypes.string.isRequired
};

export default VideoList;
