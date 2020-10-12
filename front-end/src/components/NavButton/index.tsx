import React from 'react';

import { Container, NavBtn, IconBtn } from './styles';

export const Icons = {
  'home': {
    'path': [
      'M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z'
    ],
    'vbox': '0 0 512 512'
  },
  'homeSelected': '',
  'seach': {
    'path': [
      'M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z'
    ],
    'vbox': '0 0 512 512'
  },
  'lib': {
    'path': [
      'M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z'
    ],
    'vbox': '0 0 512 512'
  },
  'plus': {
    'path': [
      'm28 20h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z'
    ],
    'vbox': '0 0 36 36'
  },
  'heart': {
    'path': [
      'M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
    ],
    'vbox': '-4 -4 24 24'
  }
}

export interface Props {
  Label?: string;
  Icon?: any;
  IconColor?: string;
  hasIconBg?: boolean;
  IconBgColor?: string;
  Active?: boolean;
}

const NavButton: React.FC<Props> = ({ Label, Icon, IconColor, hasIconBg, IconBgColor, Active }) => {
  return (
    <Container Active={Active}>
      <NavBtn href="/">
        <IconBtn hasIconBg={hasIconBg} IconColor={IconColor} IconBgColor={IconBgColor}>
          <svg width="24px" height="24px" role="img" viewBox={Icon.vbox} fill="currentColor">
            {(Icon.path.length === 1)
              ? (
                <path d={Icon.path} />
              ) : (
                <>
                  <path d={Icon.path[0]} />
                  <path d={Icon.path[1]} />
                </>
              )
            }
          </svg>
        </IconBtn>
        <span>{Label}</span>
      </NavBtn>
    </Container>
  );
}

export default NavButton;