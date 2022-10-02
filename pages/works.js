import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem, } from '../components/grid-item'
import thumbRESTAPI from '../public/images/works/thumbRESTAPI.png'
import thumbCymulate from '../public/images/works/thumbCymulate.png'

const Works = () => {

    return (
        <Container>
            <Heading as="h3" fontSize={20} mt={6} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section delay={0.1}>
                    <WorkGridItem id="restapi" title="REST API" thumbnail={thumbRESTAPI}>
                        First project developing a REST API for a &quot;Geocaching&quot; app (publishing,
                        editing and finding treasures in different locations).
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem id="cymulate" title="Cymulate Reports" thumbnail={thumbCymulate}>
                        Experience in automating PPTX, XLSX and DOCX documents from data storages (APIs, databases, etc.)
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works