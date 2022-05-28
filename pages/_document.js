import { ColorModeScript } from "@chakra-ui/react";
import NextDocument,{Html,Head,Main,NextScript} from "next/document"
import theme from "../libs/theme";

export default class Documnet extends NextDocument {
    render(){

        return(
            <Html lang="en">
                <Head>
                    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon.ico" />
                </Head>
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                    <Main/>
                    <NextScript/>
                </body>

            </Html>
        )
    }


}