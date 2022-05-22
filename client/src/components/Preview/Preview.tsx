import Button from '../Button/Button';
import './Preview.scss';

interface Props {
  background: string;
  title: string;
  tech: string;
  projectName: string;
  style: { transitionDelay: string };
  openInNewTab: any;
  siteUrl: string;
  showButton: boolean;
  active: boolean;
}

const Preview: React.FC<Props> = ({ background, title, tech, style, openInNewTab, siteUrl, showButton, active }) => {
  return (
    <div className={active ? 'preview__container reveal active' : 'preview__container reveal'} style={style}>
      <img src={background} alt='screenshot' className='preview__image' />
      <div className='preview__overlay'>
        <div className='preview__text'>
          <h3 className='preview__title'>{title}</h3>
          <p className='preview__tech'>{tech}</p>
        </div>
        {showButton ? <Button onClick={openInNewTab} onClickText={siteUrl} label='visit site' /> : ''}
      </div>
    </div>
  );
};

export default Preview;
