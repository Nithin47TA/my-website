import { Box, Image } from "@chakra-ui/react"



const AboutImageHolder = ({src,para}) => {

    return(

        <Box 
        marginTop={5}
        marginRight={2} 
        borderWidth='1px' 
        borderRadius='lg' 
        overflow='hidden' 
        height={290} 
        width={210}
        >
            <Image src={src} alt="temp" />
            <Box padding={2}>
                <p>
                &quot;{para}&quot;
                </p>
            </Box>
            
        </Box>

    )
}

export default AboutImageHolder