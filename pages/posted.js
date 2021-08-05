import {useState} from 'react'
import axios from 'axios'

function App() {
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
 
  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);
    const data = {
      name: name,
      email: email,
      message: message
    }
    axios.post('https://desolate-everglades-82898.herokuapp.com/demo/add', data).then(res => {
      setData(res.data);
      setName('');
      setEmail('');
       setMessage('');
      setLoading(false);
    }).catch(err => {
      setLoading(false);
      setIsError(true);
    });
  }
 
  return (
    <div className="container p-3">
      <h5 className="d-inline-block mb-3">POST request using axios with React Hooks - <a href="https://www.cluemediator.com" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h5>
      <div style={{ maxWidth: 350 }}>
        <div classNames="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={e => setName(e.target.value)} />
        </div>
              <div classNames="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="email"
            value={email}
            onChange={e => setEmail(e.target.value)} />
        </div>
        <div classNames="form-group">
          <label htmlFor="message" className="mt-2">Message</label>
          <input
            type="text"
            className="form-control"
            id="message"
            placeholder="Enter message"
            value={message}
            onChange={e => setMessage(e.target.value)} />
        </div>
        {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}
        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={handleSubmit}
          disabled={loading}
        >{loading ? 'Loading...' : 'Submit'}</button>
        {data && <div className="mt-3">
          <strong>Output:</strong><br />
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
        }
      </div>
    </div>
  );
}
 
export default App;