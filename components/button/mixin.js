import { css } from 'styled-components';
import colorPalette from '../theme/color/colorPalete';
import { square } from '../style/mixins/size';
import { add } from '../style/mixins/font';

export default function mixin(theme) {
  const mixins = {
    // mixins for button
    // ------------------------
    buttonSize(height, padding, fontSize, borderRadius) {
      return css`
        padding: ${padding};
        font-size: ${fontSize};
        border-radius: ${borderRadius};
        height: ${height};
      `;
    },

    buttonDisabled() {
      return css`
        &.disabled,
        &[disabled] {
          &,
          &:hover,
          &:focus,
          &:active,
          &.active {
            ${mixins.buttonColor(theme.btnDisableColor, theme.btnDisableBg, theme.btnDisableBorder)}
          }
        }
      `;
    },

    buttonVariantPrimary(color, background) {
      return css`
        ${mixins.buttonColor(color, background, background)};

        &:hover,
        &:focus {
          ${mixins.buttonColor(color, colorPalette(background, 5), colorPalette(background, 5))};
        }

        &:active,
        &.active {
          ${mixins.buttonColor(color, colorPalette(background, 7), colorPalette(background, 7))};
        }

        ${mixins.buttonDisabled()};
      `;
    },

    buttonVariantOther(color, background, border) {
      return css`
        ${mixins.buttonColor(color, background, border)}

        &:hover,
        &:focus {
          ${mixins.buttonColor(theme.primaryColor, background, theme.primaryColor)}
        }

        &:active,
        &.active {
          ${mixins.buttonColor(theme.primary7, background, theme.primary7)}
        }

        ${mixins.buttonDisabled()}
      `;
    },

    buttonVariantDanger(color, background, border) {
      return css`
        ${mixins.buttonColor(color, background, border)}

        &:hover,
        &:focus {
          ${mixins.buttonColor(theme.btnPrimaryColor, color, color)}
        }

        &:active,
        &.active {
          ${mixins.buttonColor(theme.btnPrimaryColor, colorPalette(color, 7), colorPalette(color, 7))}
        }

        ${mixins.buttonDisabled()}
      `;
    },

    buttonVariantGhost(color) {
      return css`
        ${mixins.buttonColor(color, 'transparent', color)}

        &:hover,
        &:focus {
          ${mixins.buttonColor(colorPalette(color, 5), 'transparent', colorPalette(color, 5))}
        }

        &:active,
        &.active {
          ${mixins.buttonColor(colorPalette(color, 7), 'transparent', colorPalette(color, 7))}
        }

        ${mixins.buttonDisabled()}
      `;
    },

    buttonColor(color, background, border) {
      return css`
        color: ${color};
        background-color: ${background};
        border-color: ${border};
        // a inside Button which only work in Chrome
        // http://stackoverflow.com/a/17253457
        > a:only-child {
          color: currentColor;
          &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: transparent;
          }
        }
      `;
    },

    buttonGroupBase(btnClassName) {
      return css`
        position: relative;
        display: inline-block;
        > .${btnClassName} {
          position: relative;
          z-index: 1;

          &:hover,
          &:focus,
          &:active,
          &.active {
            z-index: 2;
          }

          &:disabled {
            z-index: 0;
          }
        }

        // size
        &-lg > .${btnClassName} {
          ${mixins.buttonSize(theme.btnHeightLg, theme.btnPaddingLg, theme.btnFontSizeLg, theme.btnBorderRadiusBase)};
        }

        &-sm > .${btnClassName} {
          ${mixins.buttonSize(theme.btnHeightSm, theme.btnPaddingSm, theme.fontSizeBase, theme.btnBorderRadiusSm)};
          > .${theme.iconfontCssPrefix} {
            font-size: ${theme.fontSizeBase};
          }
        }
      `;
    },

    // Base styles of buttons
    // --------------------------------------------------
    btn() {
      return css`
        display: inline-block;
        margin-bottom: 0;
        font-weight: ${theme.btnFontWeight};
        text-align: center;
        touch-action: manipulation;
        cursor: pointer;
        background-image: none;
        border: ${theme.borderWidthBase} ${theme.borderStyleBase} transparent;
        white-space: nowrap;
        line-height: 1.15;

        ${mixins.buttonSize(theme.btnHeightBase, theme.btnPaddingBase, theme.fontSizeBase, theme.btnBorderRadiusBase)}

        user-select: none;
        transition: all .3s ${theme.easeInOut};
        position: relative;

        > .${theme.iconfontCssPrefix} {
          line-height: 1;
        }

        &,
        &:active,
        &:focus {
          outline: 0;
        }

        &:not([disabled]):hover {
          text-decoration: none;
        }

        &:not([disabled]):active {
          outline: 0;
          transition: none;
        }

        &.disabled,
        &[disabled] {
          cursor: not-allowed;
          > * {
            pointer-events: none;
          }
        }

        &-lg {
          ${mixins.buttonSize(theme.btnHeightLg, theme.btnPaddingLg, theme.btnFontSizeLg, theme.btnBorderRadiusBase)}
        }

        &-sm {
          ${mixins.buttonSize(theme.btnHeightSm, theme.btnPaddingSm, theme.fontSizeBase, theme.btnBorderRadiusSm)}
        }
      `;
    },

    // primary button style
    btnPrimary() {
      return css`
        ${mixins.buttonVariantPrimary(theme.btnPrimaryColor, theme.btnPrimaryBg)}
      `;
    },

    // default button style
    btnDefault() {
      return css`
        ${mixins.buttonVariantOther(theme.btnDefaultColor, theme.btnDefaultBg, theme.btnDefaultBorder)}
        &:hover,
        &:focus,
        &:active,
        &.active {
          background: #fff;
        }
      `;
    },

    // ghost button style
    btnGhost() {
      return css`
        ${mixins.buttonVariantOther(theme.textColor, 'transparent', theme.borderColorBase)}
      `;
    },

    // dashed button style
    btnDashed() {
      return css`
        ${mixins.buttonVariantOther(theme.btnDefaultColor, theme.btnDefaultBg, theme.btnDefaultBorder)}
        border-style: dashed;
      `;
    },

    // danger button style
    btnDanger() {
      return css`
        ${mixins.buttonVariantDanger(theme.btnDangerColor, theme.btnDangerBg, theme.btnDangerBorder)}
      `;
    },

    // circle button: the content only contains icon
    btnCircle(btnClassName: btn) {
      return css`
        ${square(theme.btnCircleSize)}
        ${mixins.buttonSize(theme.btnCircleSize, 0, add(theme.fontSizeBase, '2px'), '50%')}

        &.${btnClassName}-lg {
          ${square(theme.btnCircleSizeLg)}
          ${mixins.buttonSize(theme.btnCircleSizeLg, 0, add(theme.btnFontSizeLg, '2px'), '50%')}
        }

        &.${btnClassName}-sm {
          ${square(theme.btnCircleSizeSm)}
          ${mixins.buttonSize(theme.btnCircleSizeSm, 0, theme.fontSizeBase, '50%')}
        }
      `;
    },

    // Horizontal button groups styl
    // --------------------------------------------------
    btnGroup(btnClassName: btn) {
      return css`
        ${mixins.buttonGroupBase(btnClassName)}

        .${btnClassName} + .${btnClassName},
        .${btnClassName} + &,
        & + .${btnClassName},
        & + & {
          margin-left: -1px;
        }

        .${btnClassName}:not(:first-child):not(:last-child) {
          border-radius: 0;
          padding-left: 8px;
          padding-right: 8px;
        }

        > .${btnClassName}:first-child {
          margin-left: 0;
          &:not(:last-child) {
            border-bottom-right-radius: 0;
            border-top-right-radius: 0;
            padding-right: 8px;
          }
        }

        > .${btnClassName}:last-child:not(:first-child) {
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
          padding-left: 8px;
        }

        & > & {
          float: left;
        }

        & > &:not(:first-child):not(:last-child) > .${btnClassName} {
          border-radius: 0;
        }

        & > &:first-child:not(:last-child) {
          > .${btnClassName}:last-child {
            border-bottom-right-radius: 0;
            border-top-right-radius: 0;
            padding-right: 8px;
          }
        }

        & > &:last-child:not(:first-child) > .${btnClassName}:first-child {
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
          padding-left: 8px;
        }
      `;
    },
  };

  return mixins;
}
