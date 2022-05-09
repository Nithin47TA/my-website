import { ExternalLinkIcon } from "@chakra-ui/icons";
import {  Link, ListItem } from "@chakra-ui/react";
import { Meta } from "../work";


export const WebSiteLink = ({children}) => ( 
    <ListItem>
        <Meta>
            Website
        </Meta>
        <Link href={children}>
            {children} <ExternalLinkIcon mx="2px"/>
        </Link>
    </ListItem>
)

export const Platform = ({children}) => ( 
    <ListItem>
        <Meta>
            Platform
        </Meta>
            {children}
    </ListItem>
)

export const Stack = ({children}) => ( 
    <ListItem>
        <Meta>
            Website
        </Meta>
            {children} 
    </ListItem>
)

