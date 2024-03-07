import './App.css';
import clip from './media/video/sharepointvid.mp4';
import {ReactComponent as Drp} from './drp.svg'
import {ReactComponent as QeMk} from './que.svg'
import Itemm from './Item/item';


function App() {

  const relload = ()=> window.location.reload();

  const ppointer = {
    cursor:'pointer'
  };

  return (
    <div className="App">
      
      <section>
        <video 
          className='f_video_player_'
          title='Dropbox'
          tabIndex={-1}
          src={clip}
          autoPlay
          loop
          muted
          poster={`https://cdn.glitch.global/bfc0eb11-7689-40ba-8901-5c09aeedb43c/poster.png?v=1709715044815`}
          preload='metadata'
        ></video>
      </section>

      <header>
        <nav className='nav_bar_'>

          <div className='lkjh' style={ppointer} onClick={relload}>
            <Drp 
              className='logo' 
            />
            &#160;
            &#160;
            <span>Dropbox Transfer</span>
          </div>

          <div style={ppointer} onClick={relload}>
            <QeMk 
              className='ques'
              
            />
          </div>

        </nav>
      </header>


      <article>
        <Itemm />
      </article>


    </div>
  );
}

export default App;