import { Box, Text, LinkBox, LinkOverlay, Badge, Image } from '@chakra-ui/react'
import { Global, css } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
    <Box w="100%" align="center">
        <LinkBox cursor="pointer">
            <Image src={thumbnail}
                alt={title}
                classname="grid-item-thumbnail"
                placeholder="blur"
                loading="lazy"
            />
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const WorkGridItem = ({children, title, thumbnail, badge, badgeColor}) => (
    <Box w="100%" align="center" borderImage="linear-gradient(to bottom, red, blue) 1 100%">
        <Image src={thumbnail} alt={title} objectFit='cover' borderRadius='10px' className="grid-item-thumbnail"
        placeholder="blur" />
            <Text fontFamily="'Plus Jakarta Sans'" fontWeight='bold' mt={2} fontSize={20} >
                {title} <Badge colorScheme={badgeColor}>{badge}</Badge>
            </Text>
        <Text fontSize={14} >{children}</Text>
    </Box>
)

export const GridItemStyle = () => (
    <Global
      styles={css`
        .grid-item-thumbnail {
          border-radius: 12px;
        }
      `}
    />
  )