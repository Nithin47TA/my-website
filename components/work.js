import { ChevronLeftIcon } from "@chakra-ui/icons"
import { Badge, Box, Heading, Image, Link } from "@chakra-ui/react"
import NextLink from "next/link"


export const Title =({children}) =>(
    <Box>
        <NextLink href="/works" passHref>
            <Link>Works</Link>
        </NextLink>
        <span>
        {' '}
            <ChevronLeftIcon/>
        {' '}
        </span>
        <Heading as={"h3"} display={"inline-block"} fontSize={20} mb={4}>
            {children}
        </Heading>
    </Box>
)


export const WorkImage = ({src,alt}) => (
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4}/>
)


export const Meta = ({children}) => (
    <Badge mr={2} colorScheme="green">
        {children}
    </Badge>
)