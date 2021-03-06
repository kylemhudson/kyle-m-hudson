import React from "react";
import { navigate } from "gatsby";
 
import { AuthProvider } from "react-use-auth";
 
export const wrapRootElement = ({ element }) => (
    <AuthProvider
        navigate={navigate}
        auth0_domain="useauth.auth0.com"
        auth0_client_id="GjWNFNOHq1ino7lQNJBwEywa1aYtbIzh"
    >
        {element}
    </AuthProvider>
);