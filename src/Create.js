import { useState } from "react";

const Create = () => {

    const [title, setTitle] =useState("");
    const [body, setBody] =useState("");
    const [author, setArthor] =useState('mario');
    return (
      <div className="create">
        <h2>New form</h2>
        <form>
            <label>Blog title : </label>
            <input type="text" required  value = {title} onChange={(e) => setTitle(e.target.value)}/>

            <label>Blog body : </label>
            <textarea required value = {body} onChange={(e) => setBody(e.target.value)}></textarea>

            <label>Blog author : </label>
            <select
            value={author}
            onChange={(e) => setArthor(e.target.value)}
            >
                <option value="Johnny Sins">Johnny sins</option>
                <option value="Mario">mario</option>
            </select>
        </form>
        <button>Add button</button>

      </div>


    );
  }
   
  export default Create;