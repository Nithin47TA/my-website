import Image from "next/image";
import Link from "next/link";

import {Text, useColorModeValue} from "@chakra-ui/react";
import styled from "@emotion/styled";
 
const LogoBox = styled.span`
font-weight: bold;
font-size: 20px;
display: inline-flex;
align-items:centre;
height: 40px;
line-height: 20px;
padding:10px;
img {
    transition: 200ms ease;
  }



&:hover img {
    transform: rotate(20deg);

}
`
const Logo = () => {

    const miniRobo= `/images/n-logo${useColorModeValue('-dark','')}.svg`
    
    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={miniRobo} width={20} height={20} alt="logo"/>
                    <Text
                    color={useColorModeValue("gray.800","whiteAlpha.900")}
                    fontFamily='M PLUS Rounded 1c", sans-serif'
                    fontWeight="bold"
                    ml={3}
                    >
                        Nithin TA
                    </Text>
                </LogoBox>
            </a>

        </Link>
    )


   
}
export default Logo