

import { Badge, Container, List} from "@chakra-ui/react"
import { Title, WorkImage } from "../../components/work"
import P from "../../components/paragraph"
import { Platform, Stack, WebSiteLink } from "../../components/work_sub_components/web-site-link"
import Layout from "../../components/layouts/article"



const Work = () => (
    <Layout title="secretkey">
        <Container>
        <Title>
            Password Manager
            {' '}
            <Badge>
                 2021
            </Badge>
        </Title>
        <P>
            Its an password Management WEB APP Made Using Node.js and Passport.js,
            It uses Passport-local for the username and password authentication which is encrypted using salting,
            It also Have Google Auth authentication Strategy and FaceBook Auth authentication strategy,


            
        </P>
        <List ml={4} my={4}>
            <WebSiteLink>    
                https://secure234.herokuapp.com/
            </WebSiteLink>
            <Platform>
                WEB
            </Platform>
            <Stack>
                <span>Node.js, ejs, express, heroku, MangoDB atlas,Passport.js,GooGleAuth2.0,FacebookAuth</span>
            </Stack>
        </List>
        <WorkImage src="/images/works/secret1.jpg" alt="secret1"/>
        <WorkImage src="/images/works/secret2.jpg" alt="secret2"/>
        <WorkImage src="/images/works/secret3.jpg" alt="secret3"/>
        </Container>
    </Layout>
)



export default Work