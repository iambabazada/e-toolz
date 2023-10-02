import { useFormik } from 'formik';
import React from 'react'
import ContactImg from '@src/assets/images/contact.jpg'
import Button from '@src/component/button/button'
import * as Yup from 'yup';

const validationSchema = Yup.object({
    firstName: Yup.string().required('please enter your first name'),
    email: Yup.string().email('Invalid email format').required('please enter your email'),
    message: Yup.string().required('please enter your message'),
});


const ContactUs = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema: validationSchema
    });
    return (
        <section className='flex gap-16 max-[768px]:flex-col mt-12'>
            <div className="w-1/2 max-[768px]:w-full">
                <h1 className='text-3xl text-textColor font-bold'>
                    Contact Us
                </h1>

                <form onSubmit={formik.handleSubmit} className='mt-12'>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="firstName">First Name</label>
                        {formik.errors && <p className='text-red-500'>{formik.errors.firstName}</p>}
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"

                            className="border border-gray-400 px-1 mb-3 py-2 rounded-md"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                            error={formik.errors.firstName}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">Email Address</label>
                        {formik.errors && <p className='text-red-500'>{formik.errors.email}</p>}
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="border border-gray-400  px-1 py-2  mb-3 rounded-md"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            error={formik.errors.email}

                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="message">Message</label>
                        {formik.errors && <p className='text-red-500'>{formik.errors.message}</p>}
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            onChange={formik.handleChange}
                            rows="10"
                            value={formik.values.message}
                            className="border border-gray-400  px-1 mb-3 py-2 rounded-md"
                            error={formik.errors.message}

                        >

                        </textarea>
                    </div>


                    <Button variant="primary" size="lg" rounded type="submit">Submit</Button>
                </form>
            </div>
            <div className="w-1/2 h-[600px] max-[768px]:w-full">
                <img className='w-full h-full object-cover' src={ContactImg} alt="" />
            </div>
        </section>
    )
}

export default ContactUs
