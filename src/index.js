import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "reakit";
import * as system from "reakit-system-bootstrap";
import {
    unstable_useFormState as useFormState,
    unstable_Form as Form,
    unstable_FormLabel as FormLabel,
    unstable_FormInput as FormInput,
    unstable_FormMessage as FormMessage,
    unstable_FormSubmitButton as FormSubmitButton
} from "reakit/Form";

function Example() {
    const form = useFormState({
        values: { name: "" },
        onValidate: values => {
            if (!values.name) {
                const errors = {
                    name: "How can we be friends without knowing your name?"
                };
                throw errors;
            }
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });
    return (
        <Provider unstable_system={system}>
            <Form {...form}>
                <FormLabel {...form} name="name">
                    Name
        </FormLabel>
                <FormInput {...form} name="name" placeholder="John Doe" />
                <FormMessage {...form} name="name" />
                <FormSubmitButton {...form}>Submit</FormSubmitButton>
            </Form>
        </Provider>
    );
}
const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Example />, wrapper) : false;
