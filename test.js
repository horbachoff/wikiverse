return(
    <form className='addPage' onSubmit={handleForm}>
         <h3>Add a Page</h3>
            <input 
                type="text" 
                name="title" 
                value={title} 
                onChange = {(e)=> setTitle(e.target.value)} 
                placeholder='Title'>
            </input>
            <br></br>
            <input 
                type="text" 
                name= "content" 
                value={content} 
                onChange = {(e)=> setContent(e.target.value)} 
                placeholder='Article Content'>
            </input>
            <br></br>
            <input 
                type="text" 
                name= "name" 
                value={name} 
                onChange = {(e)=> setName(e.target.value)} 
                placeholder='Author Name'>
            </input>
            <br></br>
            <input 
                type="email" 
                name = "email" 
                value={email} 
                onChange = {(e)=> setEmail(e.target.value)} 
                placeholder='Author Email'>
            </input>
            <br></br>
            <input type="text" name="tags" value={tags} onChange = {(e)=> setTags(e.target.value)} placeholder='Tags'></input><br></br>
            <button>Create Page</button>
    </form>
)
}