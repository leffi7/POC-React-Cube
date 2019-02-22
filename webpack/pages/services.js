// Component lifecycle docs:
// https://facebook.github.io/react/docs/component-specs.html
import React            from 'react';
import ReactDOM         from 'react-dom';
import Header			      from '../components/header.js';
import Nav				      from '../components/nav.js';
import jsonObj          from '../data/services.json';


export default class Services extends React.Component {

  render() {
    console.log(jsonObj);

    return (
      <main className="main">
        <Header world="services" />
        <div className="container container--services">
          <div className="dayline">
            <header className="service__header">
              <p className="service__title">in samenwerking met:</p>
              <ul className="service__list">
                <li>
                  <svg viewBox="0 0 400 400"><g fill="none" fill-rule="evenodd"><path fill="#FFF" d="M123 125h152v132H123z"/><path d="M388.12 132.504c.088.29.14.478.14.478l-108.93 147.17c-6.12 7.78-12.655 12.742-23.58 12.612h-107c-14.244.005-20.254-3.96-26.234-18.92L90.12 169.382a29.03 29.03 0 0 1 2.296-27.777L200.856.165c-.31 0-.617-.02-.93-.02C89.513.145 0 89.652 0 200.073 0 310.488 89.512 400 199.927 400c110.42 0 199.928-89.512 199.928-199.927 0-23.72-4.15-46.463-11.736-67.57" fill="#C6D633" mask="url(#b)"/><path d="M134.4 133.63h132.556v43.05h-44.514v73.284h-43.04V176.68H134.4v-43.05zm-44.28 35.752l32.394 104.462c5.98 14.96 11.99 18.925 26.234 18.92H255.75c10.925.13 17.46-4.832 23.58-12.613l108.93-147.167s-.052-.187-.14-.478C360.513 55.615 287.152.56 200.856.165l-108.44 141.44a29.03 29.03 0 0 0-2.298 27.777z" fill="#000"/></g></svg>
                </li>
                <li>
                  <svg viewBox="0 0 400 400"><g fill="none" fill-rule="evenodd"><path d="M397.448 200.047c0 110.445-88.97 199.953-198.723 199.953C88.97 400 0 310.492 0 200.047 0 89.624 88.97.11 198.725.11c109.753 0 198.723 89.514 198.723 199.937" fill="#EA862E" mask="url(#b)"/><path d="M237.12 79.636c0 21.33-17.21 38.622-38.395 38.622-21.215 0-38.38-17.292-38.38-38.622S177.51 41 198.725 41c21.186 0 38.395 17.305 38.395 38.636m62.083 222.687l.07-.053c-22.276-22.394-36.06-53.33-36.06-87.51 0-34.153 13.772-65.044 35.99-87.43 3.588-3.523 5.857-8.435 5.857-13.87 0-10.636-8.612-19.288-19.218-19.288a19.08 19.08 0 0 0-13.54 5.612l-.027-.042c-29.353 29.396-47.505 70.062-47.505 115.02 0 44.488 17.782 84.782 46.615 114.1 3.505 3.985 8.61 6.5 14.325 6.5 10.59 0 19.19-8.627 19.19-19.326a19.288 19.288 0 0 0-5.697-13.713M172.078 214.76c0-44.82-18.075-85.415-47.25-114.793-3.52-3.656-8.404-5.952-13.843-5.952-10.61 0-19.185 8.652-19.185 19.306 0 5.33 2.125 10.15 5.588 13.64l-.048.037c22.424 22.388 36.326 53.463 36.326 87.765 0 34.256-13.85 65.267-36.212 87.664l.045.044a19.218 19.218 0 0 0-5.65 13.653c0 10.647 8.597 19.314 19.206 19.314 5.447 0 10.358-2.302 13.862-5.982 29.155-29.36 47.158-69.885 47.158-114.69" fill="#FFF"/></g></svg>
                </li>
                <li>
                  <svg viewBox="0 0 400 400"><g fill="none" fill-rule="evenodd"><circle fill="#FFF101" cx="199.05" cy="200" r="172.447"/><path d="M200.325 177.303H109.54c7.617-16.23 14.44-39.374 23.242-55.328.617-1.12 2.477-3.67 3.814-4.25h126.122c1.327.58 3.196 3.13 3.813 4.25 8.794 15.954 15.628 39.1 23.24 55.328h-89.444zm61.127 56.26c-9.646 0-17.462-7.827-17.462-17.463 0-9.65 7.816-17.46 17.462-17.46 9.64 0 17.462 7.81 17.462 17.46 0 9.636-7.822 17.462-17.462 17.462zm-129.116 0c-9.64 0-17.462-7.827-17.462-17.463 0-9.65 7.822-17.46 17.462-17.46 9.646 0 17.463 7.81 17.463 17.46 0 9.636-7.82 17.462-17.465 17.462zm194.886-70.23h-14.376c-3.206 0-6.1 1.262-8.282 3.276-7.896-17.557-18.292-44.743-24.175-55.427-2.623-4.765-7.967-10.522-13.9-10.47H132.82c-5.934-.052-11.28 5.705-13.9 10.47-5.887 10.684-16.275 37.87-24.175 55.425-2.185-2.015-5.076-3.277-8.28-3.277H72.09c-6.758 0-12.233 5.47-12.233 12.23 0 6.76 5.475 12.234 12.234 12.234h12.83l-.056.125v45.21c-.01.334-.037.673-.037 1.02 0 .34.028.665.037 1.003v.53l.02.017c.486 14.43 7.723 25.902 16.607 25.902.05 0 .1-.01.1-.01-.048.59-.13 1.203-.13 1.834v23.938c0 6.22 5.046 11.274 11.263 11.274h10.494c6.22 0 11.27-5.053 11.27-11.274v-23.938c0-.673-.085-1.31-.196-1.94l1.8-.01h127.125l1.796.01c-.102.63-.184 1.267-.184 1.94v23.938c0 6.22 5.047 11.274 11.273 11.274h10.483c6.217 0 11.27-5.053 11.27-11.274v-23.938c0-.63-.085-1.235-.182-1.824h.06c9.206 0 16.67-12.293 16.67-27.45 0-.125-.02-.25-.02-.38l.067-45.85c-.01-.042-.042-.084-.06-.126h12.836c6.746 0 12.23-5.474 12.23-12.234s-5.484-12.23-12.23-12.23z" fill="#070807"/><path d="M399.416 199.692C399.416 89.402 310.01 0 199.716 0 89.416 0 0 89.402 0 199.692 0 310.01 89.417 399.407 199.715 399.407h171.722c15.392 0 27.98-12.59 27.98-27.975v-171.74zM199.71 371.452c-94.854 0-171.75-76.892-171.75-171.747 0-94.854 76.896-171.75 171.75-171.75 94.85 0 171.746 76.896 171.746 171.75 0 94.855-76.896 171.746-171.746 171.746z" fill="#070807"/></g></svg>
                </li>
                <li>
                  <svg viewBox="0 0 400 400"><g fill="none" fill-rule="evenodd"><path d="M90.214 0C40.396 0 0 40.4 0 90.206v219.59c0 49.812 40.396 90.208 90.214 90.208H309.79c49.814 0 90.21-40.396 90.21-90.207V90.207C400 40.4 359.604 0 309.79 0H90.214z" fill="#FFF"/><path d="M352.736 160.237h-15.173c.015.046.05.095.068.137l-.074 54.245c0 .146.016.29.016.437 0 17.933-8.824 32.474-19.713 32.474h-.07c.113.697.21 1.404.21 2.15V278c0 7.362-5.965 13.328-13.334 13.328h-12.398c-7.365 0-13.332-5.965-13.332-13.327V249.68c0-.79.1-1.543.223-2.284l-2.13-.01H126.66l-2.132.01c.132.74.23 1.494.23 2.284v28.323c0 7.362-5.973 13.328-13.335 13.328h-12.4c-7.363 0-13.333-5.964-13.333-13.326V249.68c0-.745.098-1.46.22-2.155-.065 0-.118.007-.175.007-10.514 0-19.07-13.558-19.653-30.625l-.023-.042v-.616c-.01-.39-.036-.793-.036-1.193 0-.405.027-.802.034-1.2v-53.484c.022-.042.048-.09.067-.137h-15.17c-7.994 0-14.47-6.48-14.47-14.47s6.476-14.47 14.47-14.47h17.002c3.793 0 7.21 1.494 9.793 3.876 9.347-20.772 21.635-52.922 28.607-65.57 3.093-5.633 9.41-12.45 16.428-12.367h158.12c7.018-.083 13.336 6.734 16.436 12.368 6.967 12.647 19.26 44.797 28.605 65.57 2.58-2.383 6-3.876 9.793-3.876h17c7.988 0 14.465 6.48 14.465 14.47s-6.477 14.47-14.466 14.47zM308.79 0H89.214C39.396 0-1 40.4-1 90.206v219.59c0 49.812 40.396 90.208 90.214 90.208h89.847V335.27H60.515c-7.872 0-14.247-5.713-14.247-12.738v-3.02c0-7.038 6.375-12.754 14.247-12.754H337.5c7.863 0 14.245 5.716 14.245 12.753v3.023c0 7.025-6.382 12.738-14.246 12.738H217.04v64.735h91.75c49.814 0 90.21-40.396 90.21-90.207V90.208C399 40.4 358.604 0 308.79 0zm-32.346 77.35H127.25c-1.576.693-3.777 3.71-4.503 5.022-10.41 18.87-18.485 46.253-27.5 65.45h213.195c-9.01-19.197-17.09-46.58-27.495-65.45-.726-1.312-2.934-4.33-4.503-5.02zm-154.23 95.694c-11.403 0-20.65 9.252-20.65 20.655 0 11.405 9.247 20.657 20.65 20.657 11.41 0 20.66-9.252 20.66-20.66 0-11.402-9.25-20.654-20.66-20.654zM295.602 193.7c0 11.406-9.252 20.658-20.663 20.658-11.406 0-20.654-9.252-20.654-20.66 0-11.402 9.248-20.654 20.652-20.654 11.41 0 20.662 9.252 20.662 20.655z" fill="#6CB744"/></g></svg>
                </li>                                                
              </ul>
            </header>
          </div>

          <ol className="latest-articles latest-articles--priority">
            {
              jsonObj.newsHomePageVO.servicesList.map(function(article) {
                return <li key={article.id} className="latest-articles__item">
                  <article className="ankeiler ankeiler-teaser ankeiler-teaser--medior">      
                    <figure className="ankeiler-teaser__figure">  
                      <img src={article.photoUrl} />
                      <span className={"tag tag--" + article.label}></span>
                    </figure>
                    <header className="ankeiler-teaser__header">
                      <h2 className="ankeiler__title">{article.title} </h2>
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