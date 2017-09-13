import { css } from 'styled-components';
// Sizing shortcuts

export function size(width, height) {
  return css`
    width: ${width};
    height: ${height};
  `;
}

export function square(x) {
  return css`
    ${size(x, x)}
  `;
}
