import { useRef, useState } from 'react';

function App() {
  console.log('render');

  const answerRef = useRef();
  // avoid rendering every single input typing
  // const [answer, setAnswer] = useState('type here');
  const [isLoading, setLoading] = useState(false);
  const [hasAnswer, setHasAnswer] = useState(false);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  /// / Derived State
  // const submitDisabled = answer.trim().length === 0;

  // early exit
  if (success) {
    return <h1 id="success">That's right!</h1>;
  }

  function handleAnswerChange() {
    // setAnswer
    if (answerRef.current.value.trim().length > 0) {
      !hasAnswer && setHasAnswer(true);
    }
    else {
      setHasAnswer(false);
    }
  }

  function handleSubmit(ev) {
    // so that he browser will not refresh after clicking submit
    ev.preventDefault();

    // Thinking about the answer
    // loading einblenden
    setLoading(true);
    setError(false);

    // Pretend to check the answer with the server
    // fetch('https://geo-quiz.com/get-answer?gui=42&a=erfurt') ...
    setTimeout(() => {
      if (answerRef.current.value.toLocaleLowerCase() === 'istanbul') {
        setSuccess(true);
      }
      else {
        setError(true);
      }

      setLoading(false);
    }, 2000);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>City quiz</h2>
        <p>
          What city is located on two continents?
        </p>
        <textarea ref={answerRef} disabled={isLoading} onChange={handleAnswerChange}></textarea>
        <br />
        <button disabled={!hasAnswer || isLoading}>Submit</button>
        { isLoading && <p id="loading">Loading...</p> }
        { error
          && <p style={{ color: 'red' }}>Good guess but a wrong answer. Try again!</p> }
      </form>

    </div>

  );
}

export default App;
