import { Badge, Container, List} from "@chakra-ui/react"
import { Title, WorkImage } from "../../components/work"
import P from "../../components/paragraph"
import { Platform, Stack, WebSiteLink } from "../../components/work_sub_components/web-site-link"
import Layout from "../../components/layouts/article"



const Work = () => (
    <Layout title="Blog">
        <Container>
        <Title>
            Blog Website
            {' '}
            <Badge>
                 2021
            </Badge>
        </Title>
        <P>
            My Own Blog Website!
            
        </P>
        <List ml={4} my={4}>
            <WebSiteLink>    
                https://blog-web-app-1.herokuapp.com/
            </WebSiteLink>
            <Platform>
                WEB
            </Platform>
            <Stack>
                <span>Node.js, HTML, Bootstrap, express, heroku, MangoDB atlas</span>
            </Stack>
        </List>
        <WorkImage src="/images/works/blog1.jpg" alt="blog1"/>
        <WorkImage src="/images/works/blog2.jpg" alt="blog2"/>
        </Container>
    </Layout>
)



export default Work