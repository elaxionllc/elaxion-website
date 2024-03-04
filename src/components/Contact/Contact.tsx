import { Container, styled, TextField, Button, FormControl } from '@mui/material';
import { FormEvent, useRef, useState } from 'react';
import PhoneInput from '../PhoneInput/PhoneInput'
import emailjs from '@emailjs/browser';

const Contact = (
    {
        closeClicked,
    }:
        {
            closeClicked: () => void
        }) => {

    const ContactContainer = styled(Container)({
        display: 'flex',
        flexDirection: 'column',

        fontFamily: "Playfair Display,serif",
        backgroundColor: 'white',
        borderRadius: '15px',
        margin: '10px',
        paddingBottom: "40px",
    })

    const Title = styled('h3')({
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '1px',
        fontSize: '45px',
    })

    const Subtitle = styled('p')({
        marginTop: '1px',
        fontSize: "12px",
        fontFamily: "Montserrat,sans-serif",
        color: "#757c98",
    })

    const FormContainer = styled('div')({
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        gap: '20px',

    })

    const FormControlGroup = styled(FormControl)({
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        flexGrow: 1,
        marginBottom: '20px',
    })

    const FormButton = styled(Button)({
        borderRadius: "80px",
        borderColor: "rgba(255, 255, 255, 0.1)",
        color: "rgb(255, 255, 255)",
        fontFamily: "inherit",
        fontWeight: "bold",
        fontSize: "14px",
        backgroundColor: "#dfa734",
        borderWidth: "2px",
        width: '200px',
        height: '50px',
        alignSelf: 'center'
    })

    const CloseContainer = styled('div')({
        textAlign: 'right',
        marginTop: '20px',
        fontSize: '20px',
    })

    const [msgSent, setMsgSent] = useState(false)

    const formRef = useRef<HTMLFormElement>(null)

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formRef.current == null) {
            return
        }
        emailjs
            .sendForm('service_2cibdca', 'template_m4kv9yo', formRef.current, {
                publicKey: 'iou16PXimKAj0m-CN',
            })
            .then(
                () => {
                    setMsgSent(true)
                },
                (error: any) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    const EmailSentMessage = () => {
        return (
            <>
                <Title>You message has been submitted.</Title>
                <Subtitle>We will review your message and contact you back as soon as possible.  Thank you!</Subtitle>
                <FormButton variant="contained" onClick={() => closeClicked()}>Close</FormButton>
            </>
        )
    }

    const EmailForm = () => {

        return (
            <>
                <Title>Let's Talk!</Title>
                <Subtitle>Please fill out this form, and we'll get back to you!</Subtitle>
                <form ref={formRef} onSubmit={sendEmail}>
                    <FormContainer>
                        <FormControlGroup>
                            <TextField variant="outlined" id="txtFirst" name='first' required label="First Name" />
                        </FormControlGroup>
                        <FormControlGroup>
                            <TextField variant="outlined" id="txtLast" name="last" required label="Last Name" />
                        </FormControlGroup>
                    </FormContainer>
                    <FormContainer>
                        <FormControlGroup>
                            <TextField variant="outlined" id="txtEmail" name='email' type="email" required label="Email Address" />
                        </FormControlGroup>
                        <FormControlGroup>
                            <PhoneInput
                                placeholder='Enter phone number'
                                id="txtPhone"
                                name="phone"
                                label="Phone Number"
                            />
                        </FormControlGroup>
                    </FormContainer>
                    <FormContainer>
                        <FormControlGroup>

                            <TextField
                                id="txtMsg"
                                name="message"
                                label="Enter your messages"
                                variant="outlined"
                                multiline
                                rows={10}
                                required
                                placeholder="Enter your message"
                            />
                        </FormControlGroup>


                    </FormContainer>
                    <FormButton variant="contained" type='submit'>Send</FormButton>
                </form>
            </>)
    }

    return (
        <ContactContainer maxWidth={'md'}>
            <CloseContainer>
                <svg onClick={closeClicked} style={{ width: "20px", height: '20px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
                </svg>
            </CloseContainer>
            {msgSent ? <EmailSentMessage /> : <EmailForm />}


        </ContactContainer>
    )
}

export default Contact