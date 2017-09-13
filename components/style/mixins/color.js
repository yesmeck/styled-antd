import Color from 'color';

export function fade(color, amount) {
  return new Color(color).fade(amount).string();
}
