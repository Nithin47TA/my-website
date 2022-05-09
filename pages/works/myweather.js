import { Badge, Container, List} from "@chakra-ui/react"
import { Title, WorkImage } from "../../components/work"
import P from "../../components/paragraph"
import { Platform, Stack, WebSiteLink } from "../../components/work_sub_components/web-site-link"
import Layout from "../../components/layouts/article"



const Work = () => (
    <Layout title="myweather">
        <Container>
        <Title>
            My Weather
            {' '}
            <Badge>
                 2020
            </Badge>
        </Title>
        <P>
           A weather detection Website made using <strong>OpenWeatherAPI</strong>,
           My first Project which made use of API call and API endpoints
           Learned how to use APi to get the needed data and how to use json
           Was capable of using the json data to provide the needed output
        </P>
        <List ml={4} my={4}>
            <WebSiteLink>    
                https://hello-world-nithin.herokuapp.com/
            </WebSiteLink>
            <Platform>
                WEB
            </Platform>
            <Stack>
                <span>Node.js,HTML,CSS,ejs,express,heroku</span>
            </Stack>
        </List>
        <WorkImage src="/images/works/weather-Website.jpg" alt="weather1"/>
        <WorkImage src="/images/works/weather2.jpg" alt="weather2"/>
        </Container>
    </Layout>
)



export default Work