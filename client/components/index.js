/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as Home} from './home'
export {default as About} from './about'
export {default as Contact} from './contact'
export {default as Footer} from './footer'

// Components for home page
export {default as CarouselComponent } from './HomeComponents/carouselComponent';
export {default as MainInfo} from './HomeComponents/mainInfo';
export {default as PictureInfo} from './HomeComponents/PictureInfo';
