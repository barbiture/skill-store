/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const GlobalStyle = () => (
  <Global
    styles={css`
      #story-root {
        padding: 0 40px;
      }
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');
      * {
        font-family: 'Roboto', sans-serif;
      }
      .arrow-down {
        width: 0px;
        height: 0px;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 20px solid #030303;
      }
      .select-label {
        font-size: 17px;
        color: #a8a8a8;
        margin-bottom: 10px;
        font-weight: 400;
      }
      :root {
        --color-black: #030303;
        --color-gray: #4e4e4e;
        --color-smoke: #a8a8a8;
        --color-smoke: #a8a8a8;
        --color-ghost: #dddddd;
        --color-pink: #f5d9db;
        --color-pastel: #f9eff0;
        --color-violet: #6f62b1;
        --color-green: #5a9650;
        --color-white: #fff;
        --color-shadow: #00000029;
        --f-size-large: 36px;
        --f-size-big: 24px;
        --f-size-middle: 17px;
      }
    `}
  />
)
