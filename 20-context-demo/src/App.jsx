import { Menu, MenuTrigger, MenuItems, MenuItem } from './components/menu';

function App() {
  return (
    <div>
      <header>
        <h1>Context Demo</h1>
      </header>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consectetur fugit ex laborum beatae tenetur deleniti labore, totam aliquid dolores necessitatibus consequuntur porro. Minus, quaerat sed ducimus suscipit quo aut!</p>
        <Menu>
          {/* //Global State is in Menu */}
          <MenuTrigger> Edit </MenuTrigger>
          <MenuItems>
            <MenuItem> Cut </MenuItem>
            <MenuItem onAction={() => alert('Copy')}> Copy </MenuItem>
            <MenuItem> Paste </MenuItem>
          </MenuItems>
        </Menu>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic molestiae dicta ex doloribus eos distinctio consequatur totam repellendus amet, adipisci dolores unde expedita necessitatibus reiciendis libero cumque et! Est, ipsum!</p>
        <Menu>
          {/* //Global State is in Menu */}
          <MenuTrigger> User </MenuTrigger>
          <MenuItems>
            <MenuItem> Profil </MenuItem>
            <MenuItem> Logout </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
}

export default App;
