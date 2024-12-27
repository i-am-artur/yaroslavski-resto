import StyledComponentsRegistry from '@repo/shared/src/styles/StyledComponents/registry';
import './globals.css';
import AppContext from '../_instances/app/context/AppContext';

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
