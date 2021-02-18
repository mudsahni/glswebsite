import { Form, Icon } from "semantic-ui-react";

export const footerContent = {
    contactSection: {
        left: {
            title: "Submit a query",
            description: "Please drop us a message for any business or sales related queries. Someone from our team will get back to you soon.",
            extras: <div>
                <span><Icon name="mail" color="teal" /><a href="mailto:info@glsbiotech.com">info@glsbiotech.com</a>; <a href="mailto:sales@glsbiotech.com">sales@glsbiotech.com</a></span>
                <span><Icon name="phone" color="teal" />+91-265-2285611 / +91-265-2290053</span>
                <span><Icon name="mobile" color="teal" />+91 - 93279 20708</span>
            </div>
        },
        right: {
            title: "",
            description: "",
            extras: <Form>

                <Form.Input fluid placeholder="Name"></Form.Input>
                <Form.Input fluid placeholder="Email"></Form.Input>
                <Form.TextArea fluid placeholder='...' />
                <Form.Button basic color="teal">Submit</Form.Button>

            </Form>


        }
    }
}