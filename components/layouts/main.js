import Head from "next/head";
import NavBar from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import VoxelDog from "../voxel-robo";
import Footer from "../footer";

const Main =  ({children,router}) => {

    return (

            <Box as="main"  pb={8}>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <title>Nithin House</title>
                </Head>
                <NavBar path={router.asPath}/>
                <Container maxW={"container.md"} pt={14}>
                        <VoxelDog/>
                        {children}
                <Footer/>
                </Container>
                

            </Box>


    )



}
export default Main