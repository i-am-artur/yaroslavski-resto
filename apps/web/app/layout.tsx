import StyledComponentsRegistry from '@repo/shared/src/styles/StyledComponents/registry';
import './globals.css';
import AppContext from '../src/app/context/AppContext';
import { defaultFont } from '@repo/shared/src/styles/js/vars/font';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledComponentsRegistry>
      <AppContext>{children}</AppContext>
    </StyledComponentsRegistry>
  );
}
