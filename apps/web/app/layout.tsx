import StyledComponentsRegistry from '@repo/shared/src/styles/StyledComponents/registry';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
