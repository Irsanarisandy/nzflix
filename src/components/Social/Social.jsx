import { AccountCircle } from '@material-ui/icons';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const Social = ({ text }) => (
    <div id="social" style={styles.socialContainer}>
        <AccountCircle style={styles.dp} />
        <p style={styles.text}>{text}</p>
    </div>
);

Social.propTypes = {
    text: PropTypes.string.isRequired
};

export default Social;
