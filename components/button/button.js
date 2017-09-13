import styled, { css, keyframes } from 'styled-components';
import { Button } from 'antd';
import createTheme from '../theme/createTheme';
import mixin from './mixin';

const prefix = 'ant-btn';

const buttonEffect = keyframes`
  to {
    opacity: 0;
    top: -6px;
    left: -6px;
    bottom: -6px;
    right: -6px;
    border-width: 6px;
  }
`;

export default styled(Button)`
  ${(props) => {
    const theme = createTheme(props.theme);
    const mixins = mixin(theme);
    return css`
      ${mixins.btn()}
      ${mixins.btnDefault()}

      > i,
      > span {
        pointer-events: none;
      }

      &.${prefix}-primary {
        ${mixins.btnPrimary}

        .${prefix}-group &:not(:first-child):not(:last-child) {
          border-right-color: ${theme.btnGroupBorder};
          border-left-color: ${theme.btnGroupBorder};

          &:disabled {
            border-color: ${theme.btnDefaultBorder};
          }
        }

        .${prefix}-group &:first-child {
          &:not(:last-child) {
            border-right-color: ${theme.btnGroupBorder};
            &[disabled] {
              border-right-color: ${theme.btnDefaultBorder};
            }
          }
        }

        .${prefix}-group &:last-child:not(:first-child),
        .${prefix}-group & + & {
          border-left-color: ${theme.btnGroupBorder};
          &[disabled] {
            border-left-color: ${theme.btnDefaultBorder};
          }
        }
      }

      &.${prefix}-ghost {
        ${mixins.btnGhost()}
      }

      &.${prefix}-dashed {
        ${mixins.btnDashed()}
      }

      &.${prefix}-danger {
        ${mixins.btnDanger()}
      }

      ${prefix}-circle,
      ${prefix}-circle-outline {
        ${mixins.btnCircle(prefix)}
      }

      &:before {
        position: absolute;
        top: -1px;
        left: -1px;
        bottom: -1px;
        right: -1px;
        background: #fff;
        opacity: 0.35;
        content: '';
        border-radius: inherit;
        z-index: 1;
        transition: opacity .2s;
        pointer-events: none;
        display: none;
      }

      .${theme.iconfontCssPrefix} {
        transition: margin-left .3s ${theme.easeInOut};
      }

      &.${prefix}-loading:before {
        display: block;
      }

      &.${prefix}-loading:not(.${prefix}-circle):not(.${prefix}-circle-outline) {
        padding-left: 29px;
        pointer-events: none;
        position: relative;
        .${theme.iconfontCssPrefix} {
          margin-left: -14px;
        }
      }

      .${prefix}-sm.${prefix}-loading:not(.${prefix}-circle):not(.${prefix}-circle-outline) {
        padding-left: 24px;
        .${theme.iconfontCssPrefix} {
          margin-left: -17px;
        }
      }

      .${prefix}-group {
        ${mixins.btnGroup(prefix)}
      }

      &:not(.${prefix}-circle):not(.${prefix}-circle-outline).${prefix}-icon-only {
        padding-left: 8px;
        padding-right: 8px;
      }

      // http://stackoverflow.com/a/21281554/3040605
      &:focus > span,
      &:active > span {
        position: relative;
      }

      > .${theme.iconfontCssPrefix} + span,
      > span + .${theme.iconfontCssPrefix} {
        margin-left: 0.5em;
      }

      &.${prefix}-clicked:after {
        content: '';
        position: absolute;
        top: -1px;
        left: -1px;
        bottom: -1px;
        right: -1px;
        border-radius: inherit;
        border: 0 solid ${theme.primaryColor};
        opacity: 0.4;
        animation: ${buttonEffect} .4s;
        display: block;
      }

      &.${prefix}-danger.${prefix}-clicked:after {
        border-color: ${theme.btnDangerColor};
      }

      &.${prefix}-background-ghost {
        background: transparent !important;
        border-color: #fff;
        color: #fff;
      }

      &.${prefix}-background-ghost.${prefix}-primary {
        ${mixins.buttonVariantGhost(theme.primaryColor)}
      }

      &.${prefix}-background-ghost.${prefix}-danger {
        ${mixins.buttonVariantGhost(theme.btnDangerColor)}
      }
    `;
  }}
`
