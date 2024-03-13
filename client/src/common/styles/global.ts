import { css } from '@emotion/react';

const global = css`
    :root {
        --min-width: 320px;
        --max-width: 640px;
        line-height: 1.5;
        font-weight: 400;
    }

    * {
        box-sizing: border-box;
    }

    html {
        -webkit-text-size-adjust: 100%;
    }

    body {
        font-family: Arial, sans-serif;
        overflow-x: hidden;
    }

    html,
    body {
        height: 100%;
    }
`;

export default global;
