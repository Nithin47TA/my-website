




import { Badge, Container, List, ListItem,Link} from "@chakra-ui/react"
import { Title, WorkImage,Meta } from "../../components/work"
import P from "../../components/paragraph"
import { Platform, Stack } from "../../components/work_sub_components/web-site-link"
import Layout from "../../components/layouts/article"
import { ExternalLinkIcon } from "@chakra-ui/icons"



const Work = () => (
    <Layout title="API">
        <Container>
        <Title>
            REST API
            {' '}
            <Badge>
                 2021
            </Badge>
        </Title>
        <P>
            A REST API Created to test GET POST PUT DELETE
            It will output all the article for the curl http://localhost:4000/articles,
            We can choose specific article by using curl http://localhost:4000/articles/REST
            
        </P>
        <List ml={4} my={4}>
            <ListItem>
            <Meta>
                Source Code
            </Meta>
            <Link href="https://github.com/Nithin47TA/API ">
                https://github.com/Nithin47TA/API <ExternalLinkIcon mx="2px"/>
            </Link>
            </ListItem>
            <Platform>
                WEB
            </Platform>
            <Stack>
                <span>Node.js, express, MangoDB atlas</span>
            </Stack>
        </List>
        <WorkImage src="/images/works/api1.jpg" alt="api1"/>
        <WorkImage src="/images/works/api2.jpg" alt="apig2"/>
        </Container>
    </Layout>
)



export default Work