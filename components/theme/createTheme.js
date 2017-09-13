import * as colors from './color/colors';
import colorPalette from './color/colorPalete';
import { add } from '../style/mixins/font';
import { fade } from '../style/mixins/color';

export default (custom) => {
  const theme = {
    primaryColor: colors.blue6,
    infoColor: colors.blue6,
    successColor: colors.green6,
    errorColor: colors.red6,
    highlightColor: colors.red6,
    warningColor: colors.yellow6,
    normalColor: '#d9d9d9',

    // by default to control hover and active backgrounds and for
    // backgrounds.
    get primary1() {
      return colorPalette(theme.primaryColor, 1);
    }, // replace tint(@primary-color, 90%)
    get primary2() {
      return colorPalette(theme.primaryColor, 2);
    }, // replace tint(@primary-color, 80%)
    get primary3() {
      return colorPalette(theme.primaryColor, 3);
    }, // unused
    get primary4() {
      return colorPalette(theme.primaryColor, 4);
    }, // unused
    get primary5() {
      return colorPalette(theme.primaryColor, 5);
    }, // color used to control the text color in many active and hover states, replace tint(@primary-color, 20%)
    get primary6() {
      return theme.primaryColor;
    }, // color used to control the text color of active buttons, don't use, use @primary-color
    get primary7() {
      return colorPalette(theme.primaryColor, 7);
    }, // replace shade(@primary-color, 5%)
    get primary8() {
      return colorPalette(theme.primaryColor, 8);
    }, // unused
    get primary9() {
      return colorPalette(theme.primaryColor, 9);
    }, // unused
    get primary10() {
      return colorPalette(theme.primaryColor, 10);
    }, // unused

    // Base Scaffolding Variables
    // ---

    // Background color for `<body>`
    bodyBackground: '#fff',
    // Base background color for most components
    componentBackground: '#fff',
    fontFamilyNoNumber:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontFamily: 'Helvetica Neue For Number", @font-family-no-number',
    codeFamily: 'Consolas, Menlo, Courier, monospace',
    headingColor: fade('#000', 0.15),
    textColor: fade('#000', 0.35),
    textColorSecondary: fade('#000', 0.57),
    headingColorDark: fade('#fff', 0.03),
    textColorDark: fade('#fff', 0.09),
    textColorSecondaryDark: fade('#fff', 0.33),
    fontSizeBase: '14px',
    get fontSizeLg() {
      return add(theme.fontSizeBase, '2px');
    },
    lineHeightBase: 1.5,
    borderRadiusBase: '4px',
    borderRadiusSm: '2px',

    // The background colors for active and hover states for things like
    // list items or table cells.
    get itemActiveBg() {
      return theme.primary1;
    },
    get itemHoverBg() {
      return theme.primary1;
    },

    // ICONFONT
    iconfontCssPrefix: 'anticon',
    iconUrl: 'https://at.alicdn.com/t/font_148784_1vkh7de5j6ecdi',

    // LINK
    get linkColor() {
      return theme.primaryColor;
    },
    get linkHoverColor() {
      return theme.primary5;
    },
    get linkActiveColor() {
      return theme.primary7;
    },
    linkHoverDecoration: 'none',

    // Animation
    easeOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    easeIn: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    easeInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    easeOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
    easeInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
    easeInOutBack: 'cubic-bezier(0.71, -0.46, 0.29, 1.46)',
    easeOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
    easeInCirc: 'cubic-bezier(0.6, 0.04, 0.98, 0.34)',
    easeInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
    easeOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
    easeInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    easeInOutQuint: 'cubic-bezier(0.86, 0, 0.07, 1)',

    // Border color
    borderColorBase: '#d9d9d9', // base border outline a component
    borderColorSplit: '#e9e9e9', // split border inside a component
    borderWidthBase: '1px', // width of the border for a component
    borderStyleBase: 'solid', // style of a components border

    // Outline
    outlineBlurSize: 0,
    outlineWidth: '2px',
    get outlineColor() {
      return theme.primaryColor;
    },

    // Default background color for disabled states, Collapse wrappers,
    // and several active and hover states.
    backgroundColorBase: '#f7f7f7',
    backgroundColorActive: '#eee',

    // Disabled states
    disabledColor: fade('#000', 0.75),
    get disabledBg() {
      return theme.backgroundColorBase;
    },
    disabledColorDark: fade('#fff', 0.65),

    // Shadow
    shadowColor: 'rgba(0, 0, 0, .2)',
    get boxShadowBase() {
      return theme.shadow1Down;
    },
    get shadow1Up() {
      return `0 -1px 6px ${theme.shadowColor}`;
    },
    get shadow1Down() {
      return `0 1px 6px ${theme.shadowColor}`;
    },
    get shadow1Left() {
      return `-1px 0 6px ${theme.shadowColor}`;
    },
    get shadow1Right() {
      return `1px 0 6px ${theme.shadowColor}`;
    },
    get shadow2() {
      return `0 2px 8px ${theme.shadowColor}`;
    },

    // Buttons
    btnFontWeight: 500,
    get btnBorderRadiusBase() {
      return theme.borderRadiusBase;
    },
    get btnBorderRadiusSm() {
      return theme.borderRadiusBase;
    },

    btnPrimaryColor: '#fff',
    get btnPrimaryBg() {
      return theme.primaryColor;
    },

    get btnDefaultColor() {
      return theme.textColor;
    },
    btnDefaultBg: '#fff',
    get btnDefaultBorder() {
      return theme.borderColorBase;
    },

    get btnDangerColor() {
      return theme.errorColor;
    },
    get btnDangerBg() {
      return theme.backgroundColorBase;
    },
    get btnDangerBorder() {
      return theme.borderColorBase;
    },

    get btnDisableColor() {
      return theme.disabledColor;
    },
    get btnDisableBg() {
      return theme.disabledBg;
    },
    get btnDisableBorder() {
      return theme.borderColorBase;
    },

    btnPaddingBase: '0 15px',
    get btnFontSizeLg() {
      return theme.fontSizeLg;
    },
    get btnPaddingLg() {
      return theme.btnPaddingBase;
    },
    btnPaddingSm: '0 7px',

    btnHeightBase: '28px',
    btnHeightLg: '32px',
    btnHeightSm: '22px',

    get btnCircleSize() {
      return theme.btnHeightBase;
    },
    get btnCircleSizeLg() {
      return theme.btnHeightLg;
    },
    get btnCircleSizeSm() {
      return theme.btnHeightSm;
    },

    get btnGroupBorder() {
      return theme.primary7;
    },

    ...custom,
  }
  return theme;
}
