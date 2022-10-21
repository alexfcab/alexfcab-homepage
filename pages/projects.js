import { Container, Heading, SimpleGrid, Highlight, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem, } from '../components/grid-item'

const Projects = () => {

    return (
        <Container>
            <Heading as="h3" fontSize={20} mt={6} mb={4}>
                Projects
            </Heading>
            
            <Highlight query='projects' styles={{ px: '2', py: '1', bg: 'blue.100', rounded:'full'}}>
            These are some of my projects whether at university, work or in my free time:
            </Highlight>
            <SimpleGrid mt={5} mb={5} columns={[1, 1, 1]} gap={6}>
                <Section delay={0.1}>
                    <WorkGridItem id="restapi" title="REST API" thumbnail='/images/works/restapi.png' badge="Java" badgeColor="orange">
                        First project developing a REST API for a &quot;Geocaching&quot; app (publishing,
                        editing and finding treasures in different locations).
                    </WorkGridItem>
                </Section>
                <Divider />
                <Section delay={0.1}>
                    <WorkGridItem id="cymulate" title="Cymulate Reports" thumbnail='/images/works/cymulate.png' badge="Python" badgeColor="blue">
                        Automated reports for customers of a consultancy using the Breach & Attack platform Cymulate, obtaining data from their API, analyzing its risks and vulnerabilities and presenting it in a clear and concise way.
                    </WorkGridItem>
                </Section>
                <Divider />
                <Section delay={0.1}>
                    <WorkGridItem id="pdl" title="Natural Language Processor" thumbnail='/images/works/pdl.png' badge="Java" badgeColor="orange">
                        Built a processor for natural language from scratch with its three main components: lexical, sintactic and semantic analyzers, including a symbol table and error handling for a javascript-like language.
                    </WorkGridItem>
                </Section>
                <Divider />
                <Section delay={0.1}>
                    <WorkGridItem id="metro" title="Optimal Metro Route" thumbnail='/images/works/kievmetro.jpg' badge="Python" badgeColor="blue">
                        Developed an algorithm and GUI to find the optimal route between two stations in the Kiev metro network, using A Star (A*) algorithm and Python. The interface was developed with Tkinter.
                    </WorkGridItem>
                </Section>
                <Divider />
                <Section delay={0.1}>
                    <WorkGridItem id="aop" title="Various problem-solving tasks" thumbnail='/images/works/algorithms.png' badge="Java" badgeColor="orange">
                        Practiced solving problems with different algorithms and data structures, including sorting, searching, graph traversal, dynamic programming, greedy algorithms, divide and conquer, etc.
                    </WorkGridItem>
                </Section>
                <Divider />
                <Section delay={0.1}>
                    <WorkGridItem id="concurrent" title="Concurrent programming" thumbnail='/images/works/concurrency.png' badge="C" badgeColor="gray">
                        Developed a concurrent program to solve the producer-consumer problem using semaphores and monitors with simultaneous threads.
                    </WorkGridItem>
                </Section>
                <Divider />
                <Section delay={0.1}>
                    <WorkGridItem id="minishell" title="Minishell" thumbnail='/images/works/minishell.png' badge="C" badgeColor="gray">
                        Developed a simple shell with basic commands, including pipes, redirections, environment variables, etc.
                    </WorkGridItem>
                </Section>
                <Divider />
                <Section delay={0.1}>
                    <WorkGridItem id="mc68000" title="I/O Driver" thumbnail='/images/works/assembly.png' badge="68K assembly" badgeColor="gray">
                        Developed a driver for a 68000 microprocessor to control in and out devices with interrupts and DMA (Direct Memory Access).
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Projects