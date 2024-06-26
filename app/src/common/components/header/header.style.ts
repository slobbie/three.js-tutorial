import { css } from '@emotion/react';

export const headerStyle = () => {
  return css`
    /* position: absolute; */
    position: fixed;
    z-index: 1000;
    width: calc(100% - 120px);
    height: calc(60px - 60px);
    display: flex;
    align-items: center;
    padding: 60px;
    /* padding: 60px; */
    .header-inner {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      .logo {
        font-weight: 900;
        letter-spacing: 2px;
        color: #fff;
      }
      nav {
        ul {
          margin-left: auto;
          margin: 0;
          padding: 0;
          display: flex;
          li {
            list-style: none;
            margin: 0 60px;
            &.btn {
              a {
                color: #fff;
                font-weight: 600;
                background: #23232a;
                padding: 16px 24px;
                border-radius: 10px;
              }
            }
            a {
              text-transform: capitalize;
              text-decoration: none;
              color: #fff;
            }
          }
        }
      }
    }
  `;
};
