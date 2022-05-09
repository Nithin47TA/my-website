import NextLink from "next/link"
import { Box, Button, chakra, Container, GridItem, Heading, Link, List, ListItem, SimpleGrid,useColorModeValue } from "@chakra-ui/react"
import Image from "next/image"
import AboutImageHolder from "../components/about-image-holder"
import Paragraph from "../components/paragraph"
import Section from "../components/section"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { BioSection, BioYear } from "../components/bio"
import {IoLogoGithub,IoLogoTwitter,IoLogoLinkedin,IoLogoInstagram} from "react-icons/io5"
import Layout from "../components/layouts/article"

const ProfileImage = chakra(
    Image,{
        shouldForwardProp: prop =>['width','height','src','alt'].includes(prop)
    }
)



const Page = () => {

    return (
        <Layout>

        <Container>
        <Box 
            borderRadius="lg" 
            bg="pink"
            textColor={useColorModeValue('red',"black")} 
            mb={6} 
            padding={3} 
            textAlign="Center"
        >
            Hello,I&apos;am Nithin T A a full Stack Developer 
        </Box>
            
        <Box display={{md: 'flex'}}>
            <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title" >
                        Nithin TA
                    </Heading>
                <p>Developer, Designer, Automation, Student</p>
            </Box>
            <Box 
            flexShrink={0} 
            mt={{base:4,md:0}} 
            ml={{md:6}} 
            align="centre">

            <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
            >
            <ProfileImage 
                src="/images/profile.jpg" 
                alt="profile-pic"
                borderRadius="full"
                width="100%" 
                height="100%"/>
            </Box>  
            </Box>
        </Box>
        <Section delay={0.1}>
            <Heading as="h3" variant="section-title" >
                About
            </Heading>
            <Paragraph>
            &quot;I want to learn enough so that I can solve any problem that are thrown at me&quot;
            </Paragraph>
            <Box display="flex" flexGrow={3}>
            <AboutImageHolder 
                para=
                "I love Problem Solving"
                src="/images/development.jpg"
            />
             <AboutImageHolder 
                para=
                " I want to automate the boring stuff"
                src="/images/robot.jpg"
            />
             <AboutImageHolder 
                para=
                "I like to make things look good"
                src="/images/design.jpg"
            />
            </Box>
            <Box align="center" my={4}>
                <NextLink href="/works" scroll={false} passHref>
                    <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                        ☀ My Works
                        
                    </Button>
                </NextLink>
            </Box> 
        </Section>

        <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
                Bio
            </Heading>
            <BioSection>
                <BioYear>
                    2019
                </BioYear>
                Joined Mar Baselious Collage Of Engineering and Technology
            </BioSection>
            <BioSection>
                <BioYear>
                    2020
                </BioYear>
                Learned about python,robotics,arduino,c 
            </BioSection>
            <BioSection>
                <BioYear>
                    2021
                </BioYear>
                Joined IEEE and became part of the collage execom
            </BioSection>
            <BioSection>
                <BioYear>
                    2022
                </BioYear>
                Freelancing
            </BioSection>
        </Section>
        <Section delay={0.3}>
            <Heading as="h3"  variant={"section-title"}>
                    Hobbies ❤
            </Heading>
            <Paragraph>
                    Drawing, PhotoGraphy, Driving, Learning/Reading, Youtube 
            </Paragraph>
        </Section>

        <Section delay={0.3}>
            <Heading as="h3" variant={"section-title"}>
            My Socials🌐
            </Heading>
            <List>
                <ListItem>
                    <Link href="https://www.instagram.com/_phantasm_it/" target={"_blank"} >
                        <Button
                        variant="ghost"
                        colorScheme="cyan"
                        leftIcon={<IoLogoInstagram/>}
                        >
                            @nithin
                        </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://github.com/Nithin47TA" target={"_blank"} >
                        <Button
                        variant="ghost"
                        colorScheme="cyan"
                        leftIcon={<IoLogoGithub/>}
                        >
                            @nithin
                        </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://www.linkedin.com/in/nithin-ta/" target={"_blank"} >
                        <Button
                        variant="ghost"
                        colorScheme="linkedin"
                        leftIcon={<IoLogoLinkedin/>}
                        >
                            @nithin
                        </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://twitter.com/Nithin76625619?t=QSecCFweNnaj8FsD91M1pQ&s=08" target={"_blank"} >
                        <Button
                        variant="ghost"
                        colorScheme="twitter"
                        leftIcon={<IoLogoTwitter/>}
                        >
                            @nithin
                        </Button>
                    </Link>
                </ListItem>
            </List>
            <SimpleGrid column={[1,2,2]} gap={6}>
                <GridItem
                    href="https://www.youtube.com/"
                    title="My channel"
                    thumbnail={"df"}

                >
                </GridItem>
            </SimpleGrid>
        </Section>

           





        </Container>
                    
        </Layout>
        
    )
}

export default Page
