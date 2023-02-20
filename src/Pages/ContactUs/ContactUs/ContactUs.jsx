import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactUsHeader from '../ContactUsHeader/ContactUsHeader';
import OfficeAddresses from '../OfficeAddresses/OfficeAddresses';

function ContactUs() {
    return (
        <>
            <ContactUsHeader />
            <div className="max-w-[1115px] mx-auto">
                <OfficeAddresses />
                <ContactForm />
            </div>
        </>
    );
}

export default ContactUs;
