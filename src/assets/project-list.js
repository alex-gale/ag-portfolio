import YearlyImage from './images/projects/yearly.jpg'
import CountdownImage from './images/projects/countdown.jpg'
import VerseforImage from './images/projects/versefor.jpg'
import ScunthorpeImage from './images/projects/scunthorpe.jpg'
import SleepProdImage from './images/projects/sleeprod.jpg'

const projectList = [
  {
    name: 'Countdown Online',
    description: 'Online multiplayer implementation of the TV gameshow Countdown',
    image: CountdownImage,
    link: 'https://host.quiz.galex.cc'
  },
  {
    name: 'Yearly',
    description: 'An online mood tracker built with React, Express.js and MongoDB',
    image: YearlyImage,
    link: 'https://github.com/alex-gale/yearly-frontend'
  },
  {
    name: 'Sleep & Productivity Tracker',
    description: 'Proof of concept sleep and productivity tracker build in React using Agile methodology',
    image: SleepProdImage,
    link: 'https://sg2-sleep-tracker.netlify.app'
  },
  {
    name: 'Scunthorpe Scavenger',
    description: 'Arcade game developed using Godot in 48 hours for Miz Jam 1',
    image: ScunthorpeImage,
    link: 'https://gale01.itch.io/scunthorpe'
  },
  {
    name: 'VerseFor.me',
    description: 'Frontend design test for a tagged Bible verse database',
    image: VerseforImage,
    link: 'https://versefor.me'
  }
]

export { projectList }
