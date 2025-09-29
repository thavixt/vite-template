import { PropsWithChildren } from 'react';
import { Burger, Container, AppShell as MantineAppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

type AppShellProps = PropsWithChildren<{
  logo: React.ReactNode;
  navbar: React.ReactNode;
}>;

export function AppShell({ children, logo, navbar }: AppShellProps) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineAppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
    >
      <MantineAppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Container>{logo}</Container>
      </MantineAppShell.Header>
      <MantineAppShell.Navbar>
        <Container p={8}>{navbar}</Container>
      </MantineAppShell.Navbar>
      <MantineAppShell.Main>
        <Container>{children}</Container>
      </MantineAppShell.Main>
    </MantineAppShell>
  );
}
