import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { SideMenu } from '../components/SideMenu/SideMenu';

export default function HomePage() {
  return (
    <>
      <SideMenu />
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
