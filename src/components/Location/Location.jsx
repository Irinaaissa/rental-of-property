import { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';

export default function Location({ location }) {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        setInputValue(location);
    }, [location]);

    return (
        <div>
            <p>Location</p>
            <Formik
                initialValues={{ input: location }}
                onSubmit={() => { }}
            >
                {({ values, handleChange }) => (
                    <Form>
                        <Field
                            type="text"
                            name="search"
                            placeholder="City"
                            value={values.input}
                            onChange={handleChange}
                        />
                    </Form>
                )}
            </Formik>
        </div>
    );
}
