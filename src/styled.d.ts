import 'styled-components';


declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string;
        font: {
          main: string
        },
        colors: {
            main: string;
            secondary: string;
            third: string;
            fourth: string;
        };
    }
}