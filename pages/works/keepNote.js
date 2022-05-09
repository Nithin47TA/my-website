import { Badge, Container, List} from "@chakra-ui/react"
import { Title, WorkImage } from "../../components/work"
import P from "../../components/paragraph"
import { Platform, Stack, WebSiteLink } from "../../components/work_sub_components/web-site-link"
import Layout from "../../components/layouts/article"



const Work = () => (
    <Layout title="Keeper">
        <Container>
        <Title>
            Keeper
            {' '}
            <Badge>
                 2021
            </Badge>
        </Title>
        <P>
            This is a Front-end Application created using react,
            It is a clone of the Google Keeper Application, 
            
        </P>
        <List ml={4} my={4}>
            <WebSiteLink>    
                https://nithin47ta.github.io/Keep-Clone/
            </WebSiteLink>
            <Platform>
                WEB
            </Platform>
            <Stack>
                <span>React, HTML, CSS</span>
            </Stack>
        </List>
        <WorkImage src="/images/works/keeper1.jpg" alt="keeper1"/>
        <WorkImage src="/images/works/keeper2.jpg" alt="keeper2"/>
        </Container>
    </Layout>
)



export default Work