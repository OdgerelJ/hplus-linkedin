import React from "react";
import "./App.css";
import Footer from "./component/Footer";
import Guarantee from "./component/Guarantee";
import Header from "./component/Header";
import History from "./component/History";
import People from "./component/People";
import Products from "./component/Products";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

class App extends React.Component {
  render() {
    return (
      <Authenticator
        loginMechanisms={["email"]}
        socialProviders={["amazon", "apple", "facebook", "google"]}
      >
        {({ signOut, user }) => (
          <div className="App">
            <Header />
            <History />
            <Products />
            <Guarantee />
            <People />
            <Footer />
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </div>
        )}
      </Authenticator>
    );
  }
}

export default App;
