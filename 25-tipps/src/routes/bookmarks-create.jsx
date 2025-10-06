import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router';

// To get data from the form

// 3. Use the platform - Best Practice
export default function BookMarksCreateRoute() {
  const [searchParams] = useSearchParams();
  const [errors, setErrors] = useState({});
  const url = searchParams.get('url') || '';

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target); // recreate the data from the form
    const bookmark = Object.fromEntries(formData);

    let hasErrors = false;

    // TODO: Validate!
    if (!bookmark.url.trim()) {
      setErrors(err => ({ ...err, url: 'Muss ausgefüllt werden' }));
      hasErrors = true;
    }
    else if (!/^http(s)?:\/\//.test(bookmark.url)) {
      setErrors(err => ({ ...err, url: 'Protokoll fehlt.' }));
      hasErrors = true;
    }
    else {
      setErrors(err => ({ ...err, url: '' }));
    }

    if (!bookmark.title.trim()) {
      setErrors(err => ({ ...err, title: 'Nicht nur Leerzeichen bitte ' }));
      hasErrors = true;
    }
    else {
      setErrors(err => ({ ...err, title: '' }));
    }

    if (!hasErrors)
      console.log(bookmark);
  
  }

  return (
    <div>
      <h1>Neues Lesezeichen</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="url">URL: </label>
          <input required id="url" name="url" defaultValue={url} type="url" placeholder="https://server.com" />
          {errors.url && <span>{errors.url}</span>}
        </div>
        <div>
          <label htmlFor="title">Titel: </label>
          <input required type="text" id="title" name="title" />
          {errors.title && <span>{errors.title}</span>}
        </div>
        <div>
          <label htmlFor="description">Notizen: </label>
          <input id="description" name="description" />
        </div>
        <div>
          <button type="submit">Speichen</button>
        </div>
      </form>
    </div>
  );
}

export function BookmarksCreateRouteReactHookUseForm() {
  const [searchParams] = useSearchParams();
  const url = searchParams.get('url') || '';

  const form = useForm();
  const { formState: { errors } } = form; // Destructuring - durchaus auch gleich beim Hook benutzen

  function handleSubmit(bookmark) {
    console.log(bookmark);
  }

  return (
    <div>
      <h1>Neues Lesezeichen</h1>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div>
          <label htmlFor="url">URL: </label>
          <input defaultValue={url} id="url" type="url" {...form.register('url', { required: true })} placeholder="https://server.com" />
          {errors.url && <span>Ungültige URL</span>}
        </div>
        <div>
          <label htmlFor="title">Titel: </label>
          <input type="text" id="title" {...form.register('title', { required: true, pattern: /.*\w+.*/ })} />
          {errors.title && <span>Titel darf nicht leer sein</span>}
        </div>
        <div>
          <label htmlFor="descr">Notizen: </label>
          <input id="descr" {...form.register('descr')} />
        </div>
        <div>
          <button type="submit">Speichern</button>
        </div>
      </form>
    </div>
  );
}

// 1. Controlled Inputs with State
export function BookMarksCreateRouteControlledState() {
  const [searchParams] = useSearchParams();

  const [bookmark, setBookmark] = useState({
    url: searchParams.get('url') || '',
    title: '',
    description: '',
  });

  // this is the pattern allowing dynamic state object manipulation
  function setField(e) {
    setBookmark({ ...bookmark, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(bookmark);
  }

  return (
    <div>
      <h1>Neues Lesezeichen</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="url">URL: </label>
          <input value={bookmark.url} onChange={setField} id="url" name="url" type="url" placeholder="https://server.com" />
        </div>
        <div>
          <label htmlFor="title">Titel: </label>
          <input value={bookmark.title} onChange={setField} required type="text" id="title" name="title" />
        </div>
        <div>
          <label htmlFor="description">Notizen: </label>
          <input value={bookmark.description} onChange={setField} id="description" name="description" />
        </div>
        <div>
          <button type="submit">Speichen</button>
        </div>
      </form>
    </div>
  );
}

// 2. Ubcontroled Inputs with Refs
export function BookMarksCreateRouteUncontrolledRefs() {
  const [searchParams] = useSearchParams();

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const urlRef = useRef(null);

  const url = searchParams.get('url') || '';

  function handleSubmit(e) {
    e.preventDefault();

    const bookmark = {
      url: urlRef.current.value,
      title: titleRef.current.value,
      description: descriptionRef.current.value,
    };

    console.log(bookmark);
  }

  return (
    <div>
      <h1>Neues Lesezeichen</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="url">URL: </label>
          <input ref={urlRef} defaultValue={url} id="url" name="url" type="url" placeholder="https://server.com" />
        </div>
        <div>
          <label htmlFor="title">Titel: </label>
          <input ref={titleRef} required type="text" id="title" name="title" />
        </div>
        <div>
          <label htmlFor="description">Notizen: </label>
          <input ref={descriptionRef} id="description" name="description" />
        </div>
        <div>
          <button type="submit">Speichen</button>
        </div>
      </form>
    </div>
  );
}
