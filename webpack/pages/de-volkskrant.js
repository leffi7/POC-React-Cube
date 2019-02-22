// Component lifecycle docs:
// https://facebook.github.io/react/docs/component-specs.html
import React            from 'react';
import ReactDOM         from 'react-dom';
import Header			      from '../components/header.js';
import Nav				      from '../components/nav.js';
import jsonObj          from '../data/vk.json';


export default class DeVolkskrant extends React.Component {

  render() {
    console.log(jsonObj);

    return (
      <main className="main">
        <Header world="vk-np" />
        <div className="container container--vk-np">
          <article className="ankeiler ankeiler-spotlight ankeiler--news ankeiler--giga ankeiler--image">
            <figure className="ankeiler__figure">
              <img className="ankeiler__img" src={jsonObj.newsHomePageVO.primaryTeaser.photoDefaultUrl} />
            </figure>
            <div className="ankeiler__wrapper">
              <header className="ankeiler__header">
                <h1 className="ankeiler__title">{jsonObj.newsHomePageVO.primaryTeaser.title}</h1>
              </header>
              <footer className="ankeiler__footer">
                <span className="tag prefix-mdash tag--white">TAG</span>
              </footer>
            </div>
          </article>

          {
            jsonObj.newsHomePageVO.secondaryTeaserList.map(function(article) {
              if (article.jsonType === "SpotlightTeaserVO") { 
                return <article className="ankeiler ankeiler-spotlight ankeiler--news  ankeiler--image ankeiler--plus">
                  <figure className="ankeiler__figure">
                    <img className="ankeiler__img" src={article.photoDefaultUrl} />
                  </figure>
                  <div className="ankeiler__wrapper">
                    <header className="ankeiler__header">                    
                      <h1 className="ankeiler__title">{article.title}</h1>
                    </header>
                    <footer className="ankeiler__footer">
                      <span className="tag prefix-mdash tag--white">TAG</span>
                    </footer>
                  </div>
                </article>
              }
            })
          }

        </div>
      </main>
    )
  }
}