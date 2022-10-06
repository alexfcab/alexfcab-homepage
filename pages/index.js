import NextLink from 'next/link'
import { Button, Container, Box, Heading, Image, Link, List, ListItem, Icon, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Form from '../components/form'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'


const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('#f5f5f5', 'whiteAlpha.200')} p={3} mt={6} mb={6} align="center">
                Hello, I&apos;m a full-stack developer based in Spain!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Alejandro Fernández
                    </Heading>
                    <p>Computer Science Engineer ( CyberThreat Intelligence Intern / Developer )</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    align="center"
                >
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2} borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/profileImg.jpg"
                        alt="Profile Img"
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Alejandro is a Computer Science student, pursuing full-stack development and currently Cyberthreat Intelligence Intern in Accenture. Born in Seville and based in Madrid,
                    where he continues his studies in Polytechnic University of Madrid till June 2023. He always loved solving real-life problems using code, mainly Python, Java and C as  his swiss knife.
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="messenger">
                            See my portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title" >
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2001</BioYear>
                    Born in Seville, Spain.
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    Moved to Madrid to continue CS degree.
                </BioSection>
                <BioSection>
                    <BioYear>april 2022</BioYear>
                    Served as PAX Responsible for BeTech Madrid, a technical competition for students of engineering with 3 modalities: Team Design, Case Study and Hackaton. 
                    Former member of BEST (Board of European Students of Technology)
                </BioSection>
                <BioSection>
                    <BioYear>july 2022 to present</BioYear>
                    Working at Accenture in CyberThreat Intelligence - Cybercoach team.
                </BioSection>
                <BioSection>
                    <BioYear>june 2023</BioYear>
                    Soon completes Computer Science bachelor in Polytechnic University of Madrid.
                </BioSection>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title" >
                    Tech I know
                </Heading>
                <Paragraph>
                    Python, Java, Javascript, C, SQL (MySQL, SQLite3) [ToDo]
                </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Let&apos;s get in touch
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/alexfcab" target="_blank">
                            <Button variant="ghost" colorScheme="purple" leftIcon={<Icon as={IoLogoGithub} />}>
                                @alexfcab
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.linkedin.com/in/alejandro-fern%C3%A1ndez-cabrita-883b27207/" target="_blank">
                            <Button variant="ghost" colorScheme="linkedin" leftIcon={<Icon as={IoLogoLinkedin} />}>
                                @Alejandro Fernández Cabrita
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Section>
            <Section delay={0.4}>
                <Heading as="h3" variant="section-title">
                    Contact
                </Heading>
                <Form />
            </Section>
        </Container>
    )
}

export default Page