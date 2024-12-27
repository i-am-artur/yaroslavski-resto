import StyledComponentsRegistry from '@repo/shared/src/styles/StyledComponents/registry';
import AppContext from '../src/app/context/AppContext';
import './globals.css';

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
