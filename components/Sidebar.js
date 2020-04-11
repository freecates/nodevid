import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import ActiveLink from './ActiveLink';

const links = [
  { href: '/espai', label: 'Espai Node' },
  { href: '/toolkit', label: 'Toolkit' },
  { href: '/nodes', label: 'Descobreix' },
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Sidebar = () => {
  const [state, setState] = useState({ menuOpen: false });
  const handleStateChange = (state) => {
    setState({ menuOpen: state.isOpen });
  };
  const closeMenu = () => {
    setState({ menuOpen: false });
  };
  return (
    <Menu
      right
      isOpen={state.menuOpen}
      onStateChange={(state) => handleStateChange(state)}>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <ActiveLink href={href}>
              <a
                onClick={() => closeMenu()}
                style={{
                  cursor: 'pointer',
                  textDecoration: `${({ active }) =>
                    active ? 'underline' : 'none'}`,
                  padding: '3em 0 0',
                }}>
                {label}
              </a>
            </ActiveLink>
          </li>
        ))}
      </ul>
      <style jsx global>{`
        .bm-item:hover {
          color: white;
        }
        .bm-burger-button {
          position: fixed;
          width: 18px;
          height: 15px;
          left: 18px;
          top: 18px;
        }
        .bm-burger-bars {
          background: #373a47;
        }
        .bm-cross-button {
          height: 24px;
          width: 24px;
        }
        .bm-cross {
          background: #000000;
        }
        .bm-menu {
          padding: 0;
        }
        .bm-morph-shape {
          fill: #373a47;
        }

        li {
          display: block !important;
          text-align: left !important;
        }
        .bm-overlay {
          background: rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </Menu>
  );
};

export default Sidebar;
