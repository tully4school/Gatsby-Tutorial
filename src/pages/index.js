import React from "react"
import Link from "gatsby-link"
import Counter from "./dir-1/counter.js"

export default () => 
<div>
<h1>Hello world!</h1>
<Link to="/page-2/">Page 2</Link>
<br />
<Link to="/dir-1/page-3/">Page 3</Link>
<br />
<Link to="/dir-1/counter/">Counter</Link>
<br />
<Counter />
</div>
