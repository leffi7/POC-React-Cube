// Component lifecycle docs:
// https://facebook.github.io/react/docs/component-specs.html
import React            from 'react';
import ReactDOM         from 'react-dom';
import Header			      from '../components/header.js';
import Nav				      from '../components/nav.js';
import jsonObj          from '../data/vk.json';


export default class VK extends React.Component {

  render() {
    console.log(jsonObj);
    
    return (
      <main className="main">
        <Header world="vk" />
        <div className="container">
            <ol className="latest-articles latest-articles--priority">
              <li className="latest-articles__item">
                <article className="ankeiler ankeiler-chapeau">
                  <figure className="ankeiler-chapeau__figure">
                    <img src={jsonObj.newsHomePageVO.topArticlePrioList.topArticle.photoUrl} />
                  </figure>
                  <div className="ankeiler__wrapper-chapeau">
                    <header className="ankeiler__header">
                      <h1 className="ankeiler__title">{jsonObj.newsHomePageVO.topArticlePrioList.topArticle.title}</h1>
                    </header>
                    <div className="ankeiler__body">
                      <span className="tag">{jsonObj.newsHomePageVO.topArticlePrioList.topArticle.label}</span>    
                    </div>
                  </div>
                </article>  
              </li>
              {
                jsonObj.newsHomePageVO.topArticlePrioList.prioList.map(function(article) {
                  return <li key={article.id} className="latest-articles__item">
                    <article className="ankeiler ankeiler-teaser ankeiler-teaser--medior">      
                      <figure className="ankeiler-teaser__figure">  
                        <img src={article.photoUrl} />
                      </figure>
                      <header className="ankeiler-teaser__header">
                        <h2 className="ankeiler__title">{article.title} </h2>
                        <span className="tag">{article.label}</span>
                      </header>
                    </article>
                  </li>
                })
              }
            </ol>
        </div>
      </main>
    )
  }
}
