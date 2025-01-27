import PostPage from './pages/PostPage'
import { GlobalProvider } from './contexts/GlobalContext';

const posts = [
  {
    id: 1,
    name: "Lavanda",
    description: "Un fiore dal profumo delicato, conosciuto per le sue proprietà rilassanti e terapeutiche.",
    image: "https://example.com/images/lavanda.jpg"
  },
  {
    id: 2,
    name: "Girasole",
    description: "Un fiore luminoso e gioioso che segue il sole durante la giornata.",
    image: "https://example.com/images/girasole.jpg"
  },
  {
    id: 3,
    name: "Gerbera",
    description: "Un fiore colorato e vivace che simboleggia felicità e allegria.",
    image: "https://example.com/images/gerbera.jpg"
  },
  {
    id: 4,
    name: "Giglio",
    description: "Un fiore elegante e raffinato, simbolo di purezza e maestosità.",
    image: "https://example.com/images/giglio.jpg"
  },
  {
    id: 5,
    name: "Tulipano",
    description: "Un fiore semplice ma affascinante, simbolo di amore e rinascita.",
    image: "https://example.com/images/tulipano.jpg"
  },
  {
    id: 6,
    name: "Rosa",
    description: "Il fiore dell'amore e della passione, con una vasta gamma di colori e profumi.",
    image: "https://example.com/images/rosa.jpg"
  },
  {
    id: 7,
    name: "Peonia",
    description: "Un fiore lussuoso e voluttuoso, associato alla prosperità e alla fortuna.",
    image: "https://example.com/images/peonia.jpg"
  }
];

function App() {

  return (
    <>
      <GlobalProvider>
        <PostPage />
      </GlobalProvider>
    </>
  )
}

export { App, posts }
