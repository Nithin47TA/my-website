import { Badge, Container, List} from "@chakra-ui/react"
import { Title, WorkImage } from "../../components/work"
import P from "../../components/paragraph"
import { Platform, Stack, WebSiteLink } from "../../components/work_sub_components/web-site-link"
import Layout from "../../components/layouts/article"



const Work = () => (
    <Layout title="ToDO">
        <Container>
        <Title>
            ToDo APP
            {' '}
            <Badge>
                 2021
            </Badge>
        </Title>
        <P>
            A ToDo app that is capable of CRUD operation with a mangoDb backend,
            You can use different curl commands for different todo List like the checkbox one in image
            
        </P>
        <List ml={4} my={4}>
            <WebSiteLink>    
                https://pure-lowlands-28129.herokuapp.com/
            </WebSiteLink>
            <Platform>
                WEB
            </Platform>
            <Stack>
                <span>Node.js, HTML, Bootstrap, express, heroku, MangoDB atlas</span>
            </Stack>
        </List>
        <WorkImage src="/images/works/todo-app.jpg" alt="todo1"/>
        <WorkImage src="/images/works/todo2.jpg" alt="todo2"/>
        </Container>
    </Layout>
)



export default Work