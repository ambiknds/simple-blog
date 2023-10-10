"Fake json server
npx json-server --watch data/data.json --port 8000

#Dump Code 
 {/* filter blog to match search term */}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Alex')} title="Alex Filter Blogs" /> */}

[
    { title: "React", description: "React is a JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components.", author: "John", id: 1 },
    { title: "HTML", description: "HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn - You will enjoy it!", author: "W3 School", id: 2 },
    { title: "CSS", description: "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.", author: "W3 School", id: 3 },
    { title: "Javascript", description: "JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn.", author: "Alex", id: 4 },
    { title: "Mongo DB", description: "MongoDB is a document database. It stores data in a type of JSON format called BSON. A record in MongoDB is a document, which is a data structure composed of key value pairs similar to the structure of JSON objects.", author: "W3 School", id: 5 }
  ]

  <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>

  handleDelete={handleDelete} 

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
  }
