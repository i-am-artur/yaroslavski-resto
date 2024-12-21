'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { css } from '../../../../../styled-system/css';
import CloseIconButton from '../../../ui/buttons/CloseIconButton';
import Modal from '../../../ui/modals/Modal';
import { languages } from '../../data';
import './index.css';
import Arrows from '../../../ui/icons/Arrows';
import useCloseModalOnHistoryPop from '../../../../hooks/useCloseModalOnHistoryPop';

export default function LanguageList(props: {
  open: boolean;
  onClose?: () => void;
  t: { chooseLanguage: string };
}) {
  props.onClose && useCloseModalOnHistoryPop({ action: props.onClose });
  const router = useRouter();
  const pathname = usePathname();
  // const pageCtx = useContext(pageContext);
  const searchParams = useSearchParams();

  return (
    <Modal open={props.open} onClose={props.onClose}>
      <div
        className={css({
          height: '30%',
          right: 0,
          left: 0,
          bottom: 0,
          padding: 'radius.xl',
          backgroundColor: 'white',
          borderTopLeftRadius: 'xl',
          borderTopRightRadius: 'xl',
          position: 'absolute',
          zIndex: 15,
          animation: 'from-bottom-animate .3s linear',
        })}
      >
        <fieldset
          className={css({
            display: 'flex',
            flexDirection: 'column',
            rowGap: 'box.v',
            border: 'none',
            fontSize: '1.3rem',
            fontWeight: 'bold',
          })}
        >
          <legend
            className={css({
              marginBottom: 'box.v',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            })}
          >
            {props.t.chooseLanguage}
            <CloseIconButton onClick={props.onClose} />
          </legend>

          {languages.map((language) => {
            return (
              <label
                key={language.id}
                className={css({
                  display: 'flex',
                  fontSize: 'inherit',
                })}
              >
                <input
                  type='radio'
                  value={language.id}
                  onChange={() => {
                    const newLocation = (() => {
                      const pathNameSplit = pathname.split('/');
                      pathNameSplit[1] = language.id;
                      // const searchParams = pageCtx.searchParams;
                      return `${pathNameSplit.join('/')}${searchParams ? `?${searchParams.toString()}` : ''} `;
                    })();
                    router.push(newLocation);
                    props.onClose?.();
                  }}
                  className={css({ visibility: 'hidden', height: 0 })}
                />{' '}
                <span
                  className={css({
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                  })}
                >
                  {language.fullName} <Arrows />
                </span>
              </label>
            );
          })}
        </fieldset>
      </div>
    </Modal>
  );
}
