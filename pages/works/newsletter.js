import { Badge, Container, List} from "@chakra-ui/react"
import { Title, WorkImage } from "../../components/work"
import P from "../../components/paragraph"
import { Platform, Stack, WebSiteLink } from "../../components/work_sub_components/web-site-link"
import Layout from "../../components/layouts/article"



const Work = () => (
    <Layout title="newsletter">
        <Container>
        <Title>
            Arc NewsLetter
            {' '}
            <Badge>
                 2020
            </Badge>
        </Title>
        <P>
            A Subscription NewsLetter Model Created Using the MailChimp Subscription API,
            Its design was completed using the popular css framework Bootstrap 
        </P>
        <List ml={4} my={4}>
            <WebSiteLink>    
                https://damp-brook-86796.herokuapp.com/
            </WebSiteLink>
            <Platform>
                WEB
            </Platform>
            <Stack>
                <span>Node.js, HTML, Bootstrap, express, heroku, MailChimp</span>
            </Stack>
        </List>
        <WorkImage src="/images/works/newsletter1.jpg" alt="newsletter1"/>
        <WorkImage src="/images/works/newsletter2.jpg" alt="newsletter2"/>
        </Container>
    </Layout>
)



export default Work