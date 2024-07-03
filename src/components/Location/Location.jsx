import { Formik, Form, Field } from 'formik';
export default function Input({ request }) {
    return (
        <div>
            <p>Location</p>
            <Formik initialValues={{ input: "" }} onSubmit={() => { }}>
                <Form>
                    <Field type="text"
                        name="search"
                        placeholder="Kyiv"
                       
                        />

                    
                </Form>
            </Formik>
        </div>
    )
}