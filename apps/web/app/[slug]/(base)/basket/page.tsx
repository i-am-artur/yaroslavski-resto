// 'use client';
import { css, cx } from '../../../../styled-system/css';
import { stack } from '../../../../styled-system/recipes';
import CartContext from '../_components/CartContext';
import Header from '../_components/Header';
import ClientPage from './_components/ClientPage';
import Options from './_components/Options';
// import { QrIndexT } from '../../../../src/instances/languages/translation/qr/index/ua';

export default async function BasketPage() {
  return (
    <div
      className={cx(
        stack({ rGap: 'box' }),
        css({ marginTop: 'box.v', marginBottom: '75px' }),
        css({ marginLeft: 'auto', marginRight: 'auto', maxWidth: '1024px' })
      )}
    >
      <CartContext>
        <Header>
          <Options />
        </Header>
        <main
          className={css({
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
            maxWidth: 700,
          })}
        >
          {/* <Suspense> */}
          <ClientPage />
          {/* </Suspense> */}
        </main>
      </CartContext>
    </div>
  );
}

// export const metadata: Metadata = {
//   title: {
//     absolute: 'Меню ресторана',
//   },
//   description:
//     'Відкрийте для себе наше різноманітне меню ресторана, що містить смачні страви, приготовані з свіжих інгредієнтів. Задовольніть свої бажання нашими кулінарними шедеврами вже сьогодні!',
// };
