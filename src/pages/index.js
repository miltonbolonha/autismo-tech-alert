import React, { useState } from "react";

import addToMailchimp from "gatsby-plugin-mailchimp";

// styles
const pageStyles = {
  color: "#232129",
  padding: "30px 0 30px 10px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 25,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#89f",
};
const paragraphStyles = {
  marginBottom: 28,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 10,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 18,
  maxWidth: 760,
  marginBottom: 10,
};
const inputzim = {
  background: "#ddd",
  border: "#89f",
  padding: "10px 20px",
};
const inputzimButton = {
  background: "#89f",
  border: 0,
  color: "#fff",
  cursor: "pointer",
  padding: "10px 20px",
  fontWeight: 900,
};
const linkStyle = {
  color: "#89f",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
};

const docLink = {
  text: "Link do evento no YouTube",
  url: "https://www.youtube.com/watch?v=0pHiOO_6qiU",
  color: "#89f",
};

// markup OK
const IndexPage = () => {
  const [email, setEmail] = useState("");
  const handleEmailChange = emailTyping => {
    setEmail(emailTyping);
  };

  async function handleSubmit(e, email) {
    e.preventDefault();
    await addToMailchimp(email).then(data => {
      console.log(data);
    });
    // const result = await addToMailchimp(email, listFields);
    console.log("wdasd");
    // console.log(result);
    console.log(e);
    console.log(email);
  }
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <small>3ª edição</small>
      <h1 style={headingStyles}>
        Autismo Tech
        <br />
        <span style={headingAccentStyles}>— 9 de abril, 18:30! </span>
        <span role='img' aria-label='Party popper emojis'>
          🎉🎉🎉
        </span>
      </h1>
      <p style={paragraphStyles}>
        Compartilhe, faça a <code style={codeStyles}>sua parte</code> !!!{" "}
        <span role='img' aria-label='Sunglasses smiley emoji'>
          😎
        </span>
      </p>
      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            target='_blank'
            rel='noreferrer'
            href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            {docLink.text}
          </a>
        </li>
      </ul>
      <form
        style={listItemStyles}
        method='post'
        id='mc-embedded-subscribe-form'
        name='mc-embedded-subscribe-form'
        class='validate'
        target='_blank'
        onSubmit={e => handleSubmit(e, email)}
        novalidate
      >
        <br />
        <label htmlFor='mce-EMAIL'>
          E-mail <span className='asterisk'>*</span>:
        </label>
        <br />
        <input
          type='email'
          name='EMAIL'
          id='mce-EMAIL'
          placeholder='email address'
          required
          style={inputzim}
          size='28'
          onChange={e => handleEmailChange(e.target.value)}
          value={email}
        />
        <br />
        <br />
        {/* <input type='button' value='Vai q vai !' style={inputzimButton} /> */}
        <button
          type='submit'
          style={inputzimButton}
          name='subscribe'
          id='mc-embedded-subscribe'
        >
          Vai que vai !
        </button>
      </form>
      <img
        alt='Gatsby G Logo'
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  );
};

export default IndexPage;
