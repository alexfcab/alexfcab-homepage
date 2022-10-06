// form component with chakra-ui and react-hook-form using emailjs to receive the email
// use toast to show the status of the form

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Box, Button, FormControl, FormLabel, Input, Textarea, useToast, InputLeftElement, InputGroup } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'
import emailjs from 'emailjs-com'

export const Form = () => {
    const toast = useToast()
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async (data) => {
        setLoading(true)
        try {
            await emailjs.send(
                'alexfcab_gmail',
                'template_dsmz6y8',
                data,
                'BeLG4IVOw9NmY3V5E'
            )
            toast({
                title: 'Message sent.',
                description: 'I\'ll reply you back as soon as possible.',
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
            reset()
        } catch (error) {
            toast({
                title: 'An error occurred.',
                description: 'Please try again later.',
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
        setLoading(false)
    }

    return ( // use toast from chakra-ui to show alerts like if the email was sent or not
        <Box as="form" onSubmit={handleSubmit(onSubmit)}>
            <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" {...register('name')} />
            </FormControl>
            <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder='your-email@gmail.com' {...register('email')} />
            </FormControl>
            <FormControl id="phone">
                <FormLabel>Phone</FormLabel>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<PhoneIcon color='gray.300' />}
                    />
                    <Input type="tel" placeholder='XXX XXX XXX' {...register('phone')} />
                </InputGroup>
            </FormControl>
            <FormControl id="message" isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea {...register('message')} />
            </FormControl>
            <Button
                type="submit"
                colorScheme="messenger"
                mt={4}
                isLoading={loading}
                loadingText="Sending"
            >
                Send
            </Button>
        </Box>
    )
}

export default Form
