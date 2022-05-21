import Button from '../Button/Button';
import './Preview.scss';

interface Props {
  background: string;
  title: string;
  tech: string;
  projectName: string;
  setModalProjectName?: React.Dispatch<React.SetStateAction<string | boolean>>;
  style: { transitionDelay: string };
  openInNewTab: any;
  siteUrl: string;
  showButton: boolean;
  // setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Preview: React.FC<Props> = ({
  background,
  title,
  tech,
  projectName,
  setModalProjectName,
  style,
  openInNewTab,
  siteUrl,
  showButton,
}) => {
  return (
    <div className='preview__container' style={style}>
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
