import React, { useState } from "react"
import { useMutation, gql } from "@apollo/client"
import Router from "next/router"

const EMAIL = gql`
  mutation PostMutation(
    $content: String!
    $subject: String!
    $author: String!
    $id: String!
  ) {
    createPost(
      input: { content: $content, author: $author, subject: $subject, id: $id }
    ) {
      id
    }
  }
`

const CreateEmail = () => {
  const [formState, setFormState] = useState({
    id: "",
    content: "",
    author: "",
    subject: "",
  })
  const [createEmail] = useMutation(EMAIL, {
    variables: {
      id: formState.id,
      author: formState.author,
      content: formState.content,
      subject: formState.subject,
    },
  })

  return (
    <div className="box">
      <div className="color">
        <form
          onSubmit={e => {
            e.preventDefault()
            createEmail().then(Router.push("/success"))
          }}
        >
          <div id="ebox">
            <div className="in">
              <input
                className="name"
                value={formState.id}
                onChange={e =>
                  setFormState({
                    ...formState,
                    id: e.target.value,
                  })
                }
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="in">
              <input
                className="email"
                value={formState.author}
                onChange={e =>
                  setFormState({
                    ...formState,
                    author: e.target.value,
                  })
                }
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="in">
              <input
                className="subject"
                value={formState.subject}
                onChange={e =>
                  setFormState({
                    ...formState,
                    subject: e.target.value,
                  })
                }
                type="text"
                placeholder="Subject"
              />
            </div>
            <div className="in">
              <textarea
                className="content"
                value={formState.content}
                onChange={e =>
                  setFormState({
                    ...formState,
                    content: e.target.value,
                  })
                }
                type="textarea"
                placeholder="Message"
              />
            </div>
            <div>
              {" "}
              <button className="bu">Submit</button>
            </div>
          </div>
        </form>
      </div>
      <style jsx>
        {`
          .color {
            height: 100vw;
            padding-left: 5%;
            padding-right: 5%;
            padding-top: 30px;
 
          }

          

          .box {
            background-color: #beb9cd;
            padding-bottom: 400px;
          }

          #ebox {
            display: grid;
            grid-template-columns: 1fr;
            margin: 18%;
            margin-top: 2%;
            color: black;
          }
          .cont {
            margin-bottom: 10px;
          }
          input {
            background-color: whitesmoke;
            padding: 10px;
            width: 100%;
            margin-bottom: 10px;
            border-radius: 4px;
          }

          .bu {
            background-color: whitesmoke;
            padding: 5px 14px;
            margin-top: 10px;
            color: gray;
            border-radius: 4px;
          }
          textarea {
            background-color: whitesmoke;
            border-radius: 4px;
            padding: 10px;
            width: 100%;
            height: 200px;
          }

          @media screen and (max-width: 600px) {
            #ebox {
              display: grid;
              grid-template-columns: 1fr;
              margin: 0%;
              color: black;
            }
          }
        `}
      </style>
    </div>
  )
}

export default CreateEmail
