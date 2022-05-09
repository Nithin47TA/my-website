import { Badge, Container, List} from "@chakra-ui/react"
import { Title, WorkImage } from "../../components/work"
import P from "../../components/paragraph"
import { Platform, Stack, WebSiteLink } from "../../components/work_sub_components/web-site-link"
import Layout from "../../components/layouts/article"



const simongame = () => (
    <Layout>
        <Container>
        <Title>
            Simon Game
            {' '}
            <Badge>
                 2020
            </Badge>
        </Title>
        <P>
            A simon game simulator created as part of a web development bootcamp, 
            it consit of the 4 color button to stimulate the game play and consist of animation for the sequence and failure,
            appropriate mp3 files are associated with each button for the sound effeect
        </P>
        <List ml={4} my={4}>
            <WebSiteLink>    
                    https://nithin47ta.github.io/Simon-Game/ 
            </WebSiteLink>
            <Platform>
                WEB
            </Platform>
            <Stack>
                <span>Jquery,HTML,CSS</span>
            </Stack>
        </List>
        <WorkImage src="/images/works/simon-game.jpg" alt="simongame"/>
        <WorkImage src="/images/works/simon2.png" alt="simongame"/>
        </Container>
    </Layout>
)



export default simongame