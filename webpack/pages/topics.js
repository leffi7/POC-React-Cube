// Component lifecycle docs:
// https://facebook.github.io/react/docs/component-specs.html
import React            from 'react';
import ReactDOM         from 'react-dom';
import Header			      from '../components/header.js';
import Nav				      from '../components/nav.js';
import jsonObj          from '../data/vk.json';


export default class Topics extends React.Component {

  render() {
    console.log(jsonObj);

    return (
      <main className="main">
        <Header world="topics" />
          <div className="main__content main__content--topics">
            
            <div className="dayline">
              <header className="dayline__header">
                <h2 className="dayline__title" data-node-uid="5">Mijn nieuws <span>Vandaag</span></h2>
                <p className="dayline__subtitle">Het laatste nieuws van alle topics die je volgt</p>
              </header>
            </div>

            <ol className="tile-grid tile-grid--12 tile-grid--even">
            {
              jsonObj.newsHomePageVO.tertiaryTeaserList.map(function(article) {
                if (article.jsonType === "SpotlightTeaserVO") { 
                  return <li>
                    <div className="tile-grid__flex">
                      <div className="tile-grid__inner">
                        <article className="ankeiler ankeiler--visual ankeiler--visual--landscape">
                          <figure className="ankeiler__picture">
                            <img src={article.photoDefaultUrl} className="ankeiler__img" />
                          </figure>
                          <header className="ankeiler__header">
                            <h1 className="ankeiler__title">{article.title}</h1>
                            <div className="ankeiler__actions">
                              <div className="label fjs-playlist label--append label--ankeiler label--dark is-checked">
                                <span className="label__text label__text--logo">
                                  <svg className="logo" viewBox="0 0 58 58">
                                    <path className="logo__icon logo__icon--simple" d="M41.288 35.084c-.867.772-1.76 1.442-2.7 2.02-.938.578-2.098.87-3.5.87-1.052 0-2.012-.332-2.878-.974-.878-.65-1.308-2.474-1.308-3.722V20.5h8.302V7H9v13.5h8.356V35.9c0 .258.01.495.026.724.393 7.75 8.308 14.114 18.015 14.114.3 0 .962-.016.995-.016 2.158 0 4.373-.467 6.633-1.073 2.254-.607 4.253-1.843 5.975-3.727l-7.712-10.836"></path>
                                  </svg>
                                  {article.label}
                                </span>
                                <span className="label__addon label__addon--icon fjs-playlist-subscription">
                                  <svg className="icon icon--stacked" viewBox="0 0 32 32">
                                    <path className="icon__layer icon__layer-checkmark" d="M27 3.5l-15 15-7-7-5 5 12 12 20-20-5-5z"></path>
                                  </svg>   
                                </span>
                              </div>    
                            </div>
                            <div className="ankeiler__meta">
                              <span className="ankeiler__meta__link">
                                <span className="ankeiler__source">
                                  DeMorgen
                                </span>
                                <time className="ankeiler__timestamp">
                                  vandaag
                                </time>
                              </span>
                            </div>
                          </header>
                        </article>  
                      </div>
                    </div>
                  </li>
                }
              })
            }
            </ol>
        </div>
      </main>
    )
  }
}