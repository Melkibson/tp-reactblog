import {useState} from "react";
import {getPosts} from "../../utils/requests";

const Add = () => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [genre, setGenre] = useState("")
  const [content, setContent] = useState("");
  const [article, setArticle] = useState([]);
  const published = new Date().toLocaleString("fr-FR", {month: "long", day:"numeric", year:"numeric"} );
  const handlePostTitle = (title) => {
    if(title === title) {
      alert("Le titre est déjà pris");
      return false;
    } else return true;
  };

  const path = "http://localhost:3001/posts";
  const genreOptions = [
    {
      id: 1,
      name: "Heroique Fantasy"
    },
    {
      id: 2,
      name: "Horreur"
    },
    {
      id: 3,
      name: "Romance"
    },
    {
      id: 4,
      name: "Policier"
    },
    {
      id: 5,
      name: "Science Fiction"
    }
  ]
 const postArticle = () => {
    fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        author,
        genre,
        content,
        published
      })
    })
        .then(res => res.json())
        .then(data => {
          setArticle(article.concat(data))
          setTitle("")
          setAuthor("")
          setGenre("")
          setContent("")
        })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    postArticle()
  };

  return (
      <div className="container">
        <h1>Ajouter un article</h1>
        <form className="divForm" onSubmit={handleSubmit}>
          <label>Titre</label>
          <input
            type="text"
            className="input"
            value={title}
            onChange={e => setTitle(e.target.value)}/>
          <label>Auteur</label>
          <input
            type="text"
            className="input"
            value={author}
            onChange={e => setAuthor(e.target.value)}/>
          <label>Genre</label>
          <select onChange={e => setGenre(e.target.value)}>
            {genreOptions.map(genre => (
                <option key={genre.id} value={genre.name}>{genre.name}</option>
            ))}
          </select>
          <label>Contenu</label>
          <textarea onChange={e => setContent(e.target.value)} value={content} id="" cols="30" rows="10"/>
          <button
            type="submit"
            onClick={handleSubmit}>Ajouter</button>
        </form>
      </div>
  )
}
export default Add;
