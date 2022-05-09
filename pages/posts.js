import {  Box, Container, Heading, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";



const Posts = () => (
    <Layout title={"posts"}>

    
    <Container>
        <Heading as="h3" fontSize={20} mb={4}>
            Posts
        </Heading>
        <Section delay={0.1}>
            <SimpleGrid column={[1,1,1]} gap={6}>
                {/* <GridItem
                title=""
                thumbnail=""
                href=""
                >

                </GridItem> */}
                <Box textAlign="center" background={useColorModeValue("#E9E9E9","#202D47")} m={10} p={10} borderRadius={10}>
                    <Text>
                        Coming Soon...
                    </Text>

                </Box>
            </SimpleGrid>
        </Section>
        
    </Container>
    </Layout>

)

export default Posts

