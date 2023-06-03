import React from "react";

import { AppForm, AppFormField, SubmitButton } from "./forms";

function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    return null;
  };

  return (
    <AppForm initialValues={{ message: "" }} onSubmit={handleSubmit}>
      <AppFormField
        maxLength={255}
        multiline
        name="message"
        numberOfLines={3}
        placeholder="Message..."
      />
      <SubmitButton title="Contact Seller" />
    </AppForm>
  );
}

export default ContactSellerForm;
