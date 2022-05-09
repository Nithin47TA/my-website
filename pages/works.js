import { Container, Divider, Heading, SimpleGrid } from "@chakra-ui/react"
import { WorkGridItem } from "../components/grid-items"
import Layout from "../components/layouts/article"
import Section from "../components/section"

const tsimongame = "/images/works/simon-game.jpg"
const tmyweather = "/images/works/weather-Website.jpg"
const ttodoapp = "/images/works/todo-app.jpg"
const tnewsletter = "/images/works/signup-mail.jpg"
const tblog = "/images/works/Journal.jpg"
const tsecretkey = "/images/works/secrets.jpg"
const tapi = "/images/works/rest-api.jpg"
const tkeepnote = "/images/works/keeper-app.jpg"


const Works = () =>  (
    <Layout title={"work"}>

 
    <Container>
        <Heading as={"h3"} fontSize={20} mb={4}>
           Works
       </Heading>
       <SimpleGrid gap={6} columns={[1,1,2]}>
            <Section delay={0.1}>
            
                <WorkGridItem id="simongame" title="Simon Game" thumbnail={tsimongame}>
                    A Simon Game Simulation Created using Jquery
                </WorkGridItem>
            </Section>
            <Section delay={0.1}>
            
                <WorkGridItem id="myweather" title="My Weather" thumbnail={tmyweather}>
                    A weather detection website using Open weather map API
                </WorkGridItem>
            </Section>
            <Section delay={0.2}>
            
                <WorkGridItem id="newsletter" title="NewsLetter SignUp" thumbnail={tnewsletter}>
                    A newsletter subscriber sign-up screen build using mailchimp API
                </WorkGridItem>
            </Section>
            <Section delay={0.2}>
            
                <WorkGridItem id="todoexpress" title="To Do App (express)" thumbnail={ttodoapp}>
                    A MongoDB Backend based To Do App rendered using ejs
                </WorkGridItem>
            </Section>
            <Section delay={0.3}>
            
                <WorkGridItem id="blog" title="Blog Website" thumbnail={tblog}>
                    A blog website were people can upload and view individual blogs
                </WorkGridItem>
            </Section>
            <Section delay={0.3}>
            
                <WorkGridItem id="secretkey" title="Secret Key" thumbnail={tsecretkey}>
                    A Authentication app with different signup encryption methods using sections and cookies
                </WorkGridItem>
            </Section>
            <Section delay={0.4}>
            
            <WorkGridItem id="api" title="API" thumbnail={tapi}>
                An API created using the REST architecture(GET,POST,PUT,DELETE)
            </WorkGridItem>
            </Section>
            <Section delay={0.4}>
            
            <WorkGridItem id="keepNote" title="Keep Note" thumbnail={tkeepnote}>
                A React based front-end note taking application
            </WorkGridItem>
            </Section>
       </SimpleGrid>
       <Divider my={6} />
    
    </Container>
    </Layout>
    )






export default Works