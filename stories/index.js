import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import styled, { ThemeProvider } from 'styled-components';

import Button from '../components/button';

const Block = styled.div`
  button {
    margin-right: 8px;
    margin-bottom: 12px;
  }
`;

storiesOf('Button', module)
  .add('default', () =>
    <Block>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
    </Block>
  )
  .add('green theme', () =>
    <ThemeProvider theme={{ primaryColor: '#00A854' }}>
      <Block>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
      </Block>
    </ThemeProvider>
  );
