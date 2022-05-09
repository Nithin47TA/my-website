import { ChakraProvider } from "@chakra-ui/react";
import Layouts from "../components/layouts/main";
import Fonts from "../components/font";
import { AnimatePresence } from "framer-motion";
const Website = ({Component,pageProps,router}) => {

    return(
    <ChakraProvider>
           <Fonts/>

        <Layouts router={router}>
            <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} key={router.route}/>
            </AnimatePresence>  
        </Layouts>
    </ChakraProvider>
    )    
}

export default Website