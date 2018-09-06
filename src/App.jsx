import React from 'react';
import styles from './styles/styles';
import { CustomNav } from './components/CustomNav';
import { VideoList } from './components/VideoList';
import { Social } from './components/Social';
import s1 from './assets/s1.png';
import s2 from './assets/s2.png';
import s3 from './assets/s3.png';
import s4 from './assets/s4.png';
import s5 from './assets/s5.png';

class App extends React.Component {
    render() {
        return (
            <div style={styles.container} className="App">
                <CustomNav />
                <iframe
                    title="gandalf"
                    style={styles.video}
                    src="https://www.youtube.com/embed/G1IbRujko-A?rel=0"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                />
                <VideoList videoImg={s1} videoTitle="Random Title 1" />
                <VideoList videoImg={s2} videoTitle="Random Title 2" />
                <VideoList videoImg={s3} videoTitle="Random Title 3" />
                <VideoList videoImg={s4} videoTitle="Random Title 4" />
                <VideoList videoImg={s5} videoTitle="Random Title 5" />
                <Social text="Is currently watching Gandalf" />
            </div>
        );
    }
}

export default App;
