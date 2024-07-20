import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as Yup from 'yup';
import css from './BookingForm.module.css';
// import spritePath from '../../assets/react.svg'; // Імпортуємо SVG sprite
import { CiCalendar } from "react-icons/ci";

const BookingFormSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    date: Yup.date()
        .required('Booking date is required'),
    comment: Yup.string()
        .optional(),
});

export default function BookingForm() {
    return (
        <div className={css.bookingFormContainer}>
            <div>
                <h2>Book your campervan now</h2>
                <p>Stay connected! We are always ready to help you.</p>
            </div>
            <div>
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        date: null,
                        comment: "",
                    }}
                    validationSchema={BookingFormSchema}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ setFieldValue, values }) => (
                        <Form className={css.bookingForm}>
                            <div>
                                <Field id="name" name="name" placeholder="Name" />
                                <ErrorMessage name="name" component="div" className={css.error} />
                            </div>
                            <div>
                                <Field id="email" name="email" type="email" placeholder="Email" />
                                <ErrorMessage name="email" component="div" className={css.error} />
                            </div>
                            <div className={css.datePickerContainer}>
                                <DatePicker
                                    selected={values.date}
                                    onChange={date => setFieldValue('date', date)}
                                    placeholderText="Booking date"
                                    className={css.datePicker}
                                    customInput={<CustomInput />}
                                    
                                />
                                
                                <ErrorMessage name="date" component="div" className={css.error} />
                            </div>
                            <div>
                                <Field id="comment" name="comment" as="textarea" placeholder="Comment" />
                            </div>
                            <div >
                                <button type="submit" className={css.button}>Send</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <div className={css.customDateInput} onClick={onClick} ref={ref}>
        <input value={value} readOnly placeholder="Booking date" />
        <CiCalendar />
    </div>
));
