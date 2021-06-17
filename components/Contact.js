import React, { useState } from "react"
import { useMutation, gql } from "@apollo/client"
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
const EMAIL = gql`
  mutation PostMutation(
    $content: String!
    $subject: String!
    $author: String!
    $id: ID!
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
    <div className="color">
  
      <form
        onSubmit={e => {
          e.preventDefault()
          createEmail()
        }}
      >
        <div id="ebox">
          <div className="cont">Contact us below:</div>
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
           <Button type="submit" variant="outlined" color="silver">
  submit
</Button>
          </div>
        </div>
      </form>
      <style jsx>{`
        .color {
          height: 100vw;

          padding: 30px;
        }

        #ebox {
          display: grid;
          grid-template-columns: 1fr;
          margin: 8%;
          margin-top: 2%;
          color: black;
        }
        .cont {
          margin-bottom: 10px;
        }
        input {
          background-color: silver;
          padding: 10px;
          width: 100%;
          margin-bottom: 10px;
        }

        .bu {
         
          background-color: silver;
         padding: 5px 10px;
        }
        textarea {
          background-color: silver;

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

      `}</style>
    </div>
  )
}

export default CreateEmail
