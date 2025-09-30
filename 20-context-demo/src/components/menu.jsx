import { createContext, use, useId, useState } from 'react';
import classes from './menu.module.css';

const MenuContext = createContext(null);

export function Menu({ children }) {
  const [isOpen, setOpen] = useState(false);

  // library hooks, so it produces a new unique ID
  const menuId = useId();

  return (
    <>
      {/* 2. <button
        style={{ anchorName: '--anker' }}
        onClick={(() => setOpen(open => !open))}
        popoverTarget="bsp"
        popoverTargetAction="toggle"
        className={classes.trigger}
      >
        Edit
      </button> */}

      {/* 3. <MenuTrigger setOpen={setOpen}> Edit </MenuTrigger>
      <MenuItems isOpen={isOpen}>
        <MenuItem setOpen={setOpen}> Cut </MenuItem>
        <MenuItem setOpen={setOpen}> Copy </MenuItem>
        <MenuItem setOpen={setOpen}> Paste </MenuItem>
      </MenuItems> */}

      {/* Context Provider */}
      <MenuContext value={{ isOpen, setOpen, menuId }}>
        {children}
      </MenuContext>

      {/* 1. { isOpen
        && (
          <div style={{ positionAnchor: '--anker' }} className={classes.popover}>
            <div className={classes.items}>
              <button onClick={() => setOpen(false)} className={classes.item}>Cut</button>
              <button onClick={() => setOpen(false)} className={classes.item}>Copy</button>
              <MenuItem setOpen={setOpen}> Paste </MenuItem>
            </div>
          </div>
        )} */}

    </>
  );
}

export function MenuTrigger({ children }) {
  { /* Context Consumer */ }
  const { setOpen, menuId } = use(MenuContext);

  return (
    <>
      <button
        style={{ anchorName: '--anker-' + menuId }}
        onClick={() => setOpen(open => !open)}
        popoverTarget="bsp"
        popoverTargetAction="toggle"
        className={classes.trigger}
      >
        {children}
      </button>
    </>
  );
}

export function MenuItems({ children }) {
  { /* Context Consumer */ }
  const { isOpen, menuId } = use(MenuContext);

  if (!isOpen) return null; // Early Exit
  return (
    <>
      <div style={{ positionAnchor: '--anker-' + menuId }} className={classes.popover}>
        <div className={classes.items}>
          {children}
        </div>
      </div>
    </>
  );
}

export function MenuItem({ children, onAction }) {
  { /* Context Consumer */ }
  const { setOpen } = use(MenuContext);

  function handleClick() {
    setOpen(false);
    onAction?.();
  }

  return (
    <>
      <button onClick={handleClick} className={classes.item}>{children}</button>
    </>
  );
}
