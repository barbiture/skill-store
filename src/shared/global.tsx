/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }
      :root {
        --color-black: #030303;
        --color-gray: #4e4e4e;
        --color-smoke: #a8a8a8;
        --color-pink: #f5d9db;
        --color-pastel: #f9eff0;
        --color-violet: #6f62b1;
        --color-green: #5a9650;
        --color-white: #fff;
        --color-shadow: #00000029;
        --size-middle: 23px;
      }
    `}
  />
)
