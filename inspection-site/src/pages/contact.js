import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

class ContactPage extends React.Component {
  state = {
    formData: {
      firstName: "",
      lastName: "",
      subject: "",
      message: "",
    },
    specific: false,
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <Layout>
        <SEO
          keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
          title="Contact"
        />
        <section>
          <form className="mx-auto md:w-1/2">
            <p className="font-bold text-gray-700 no-underline">
              Need some help?
            </p>
            <span className="">
              Use this form to send us a message and we&apos;ll get back to you
              soon.
            </span>

            <label
              className="block mb-2 mt-6 text-xs font-bold uppercase"
              htmlFor="first-name"
            >
              First Name
            </label>

            <input
              className="w-full mb-6 form-input"
              id="first-name"
              placeholder="Bill"
              type="text"
              onChange={(e) => this.handleInputChange(e)}
              required
            />

            <label
              className="block mb-2 text-xs font-bold uppercase"
              htmlFor="last-name"
            >
              Last Name
            </label>

            <input
              className="w-full mb-6 form-input"
              id="last-name"
              placeholder="Murray"
              type="text"
              onChange={(e) => this.handleInputChange(e)}
              required
            />

            <label
              className="block mb-2 text-xs font-bold uppercase"
              htmlFor="reason"
            >
              Regarding
            </label>

            <select className="form-select block w-full mb-6" id="reason">
              <option disabled selected>
                Select
              </option>
              <option>Inspection</option>
              <option>Radon</option>
              <option>Other</option>
            </select>

            {this.specific && (
              <>
                <label
                  htmlFor="specific-reason"
                  className="block mb-2 text-xs font-bold uppercase"
                >
                  Please specify
                </label>
                <input
                  className="w-full mb-6 form-input"
                  id="specific-reason"
                  placeholder="Reason"
                  type="text"
                  onChange={(e) => this.handleInputChange(e)}
                  required
                />
              </>
            )}

            <label
              className="block mb-2 text-xs font-bold uppercase"
              htmlFor="message"
            >
              Message
            </label>

            <textarea
              className="w-full mb-6 form-textarea"
              id="message"
              placeholder="Say something..."
              rows="8"
              onChange={(e) => this.handleInputChange(e)}
              required
            />

            <button className="px-4 py-2 text-sm font-bold text-white bg-gray-700 border-b-4 border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600">
              Submit
            </button>
          </form>
        </section>
      </Layout>
    );
  }
}

export default ContactPage;
