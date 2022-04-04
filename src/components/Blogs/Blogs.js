import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='all-questions'>
            <div className="container">
                <h2>Questions and Answers</h2>
                <article>
                    <h4>What is Context API in React? Purpose of Context API</h4>
                    <p>In React, Context API is a way for a React app to effectively produce global variables that can be passed around different components. This is an alternative way to "prop drilling" or moving props different different components.</p>
                    <p>We use Context API to pass data from grandparent component to child component to parent component without prop drilling. We can move any variable, functions, states etc using Context API without passing by props.</p>
                </article>
                <article>
                    <h4>What is HTML Semantic tag?</h4>
                    <p>HTML semantic tags refers to the tags that provide meaning to an HTML page rather than just presentation. It makes HTML more comprehensible by better defining the different sections and layout of web pages. Some Semantic tags are: header, nav, section, article, aside, footer, main etc.</p>
                </article>
                <article>
                    <h4>Inline vs Inline-block vs Block?</h4>
                    <p>These all are display properties in CSS. In 'inline' element we can not set the height, width properties. These are only the actual size of the elements. Some inline elements are a, img, span etc. In 'inline-block' element, it has the size of the actual element and we can also set the height and width properties. 'block' elements takes the entire width of its parent element.</p>
                </article>
            </div>
        </div>
    );
};

export default Blogs;