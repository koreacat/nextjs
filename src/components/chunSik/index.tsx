import styles from './chunSik.module.scss';
import classnames from 'classnames/bind';
import {useEffect, useState} from 'react';

const cx = classnames.bind(styles);

const clothesData = [
  '/nextjs/img/chunSik/imgChunSikGentleman.png',
  '/nextjs/img/chunSik/imgChunSikLoopy.png',
  '/nextjs/img/chunSik/imgChunSikMacho.png',
  '/nextjs/img/chunSik/imgChunSikMask.png',
  '/nextjs/img/chunSik/imgChunSikPitter.png',
  '/nextjs/img/chunSik/imgChunSikSanta.png',
  '/nextjs/img/chunSik/imgChunSikCucumber.png',
];

interface IClothesListProps {
  clothes: string;
  setClothes: (clothes) => void;
}

const ClothesList = ({
                       clothes,
                       setClothes
                     }: IClothesListProps) => {

  const handleOnClick = (src) => {
    if (clothes === src) return;
    const soundFlicks = new Audio('/nextjs/sound/chunSik/soundFlicks.mp3');
    soundFlicks.play();
    setClothes(src);
  }

  const clothesList = clothesData.map((src, index) => {
    return (
      <li
        key={index}
        className={cx('item')}
        onClick={() => handleOnClick(src)}
      >
        <img src={src}/>
      </li>
    )
  })

  return (
    <ul className={cx('list')}>
      {clothesList}
    </ul>
  )
}


const SoundButton = () => {
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const audio = new Audio('/nextjs/sound/chunSik/soundQuincasMoreira.mp3')
    setAudio(audio);

    audio.addEventListener('ended', () => {
      audio.currentTime = 0;
      audio.play();
    });

    return (() => {
      audio.pause();
    })
  }, []);

  const handleSoundPlay = () => {
    if (isSoundPlaying) {
      setIsSoundPlaying(false);
      audio.pause();
      // audio.currentTime = 0;
    } else {
      setIsSoundPlaying(true);
      audio.play();
    }
  }

  return (
    <div className={cx('soundWrap')}>
      {
        isSoundPlaying ?
          <span className={cx('soundIcon')} onClick={handleSoundPlay}/> :
          <span className={cx('soundIcon', 'mute')} onClick={handleSoundPlay}/>
      }
    </div>
  )
};


const ChunSik = () => {
  const [clothes, setClothes] = useState('');

  const handleOnClick = () => {
    if (clothes === '') return;
    const soundFlicks = new Audio('/nextjs/sound/chunSik/soundFlicks.mp3');
    soundFlicks.play();
    setClothes('');
  }

  return (
    <div className={cx('wrap')}>
      <div className={cx('frame')}>
        <SoundButton/>
        <div className={cx('chunSikWrap')}>
          <span className={cx('chunSikBody')}/>
          <span className={cx('chunSikFace')}/>
          <span
            className={cx('chunSikClothes')}
            style={{backgroundImage: `url('${clothes}')`}}
            onClick={() => handleOnClick()}
          />
        </div>
        <div className={cx('selectWrap')}>
          <ClothesList
            clothes={clothes}
            setClothes={setClothes}
          />
        </div>
      </div>
    </div>
  )
}

export default ChunSik;
