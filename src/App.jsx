// import Accordion from './Accordion';
// import AgeCalculator from './AgeCalculator';
import './App.css'
import TabForm from './TabForm';
// import BlogPosts from './BlogPosts'
// import ContactForm from './ContactForm'
// import Recipe from './Recipe'
// import { removeDuplicattes } from './RemoveDuplicateFromArray';
// import Capitalize from './Capitalize'
// import FindMaxNum from './FindMaxNum'
// import RouterTest from './RouterTest'
// import Sum from './Sum'
// import ProgressCheck from './ProgressCheck'
// import Guessnumber from './Guessnumber'
// import Tooltip from './Tooltip' 
// import ProgressApp from './ProgressApp'
// import ChipInput from './ChipInput'
// import Counter from './Counter'
// import ReverseStrings from './ReverseStrings'
// import Vowels from './Vowels'


const items = [
  {
    title: "JavaScript Basics",
    content: "Learn variables, functions, and loops in JavaScript."
  },
  {
    title: "React.js Overview",
    content: "Understand components, state, and props in React."
  },
  {
    title: "Node.js",
    content: "Basics of server-side development with Node.js."
  },
  {
    title: "Full-Stack Development",
    content: "Build full-stack apps with React and Node.js."
  },
];

function App() {
    // console.log(removeDuplicattes([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9]));
  return (
    <div className='app'>
    {/* <ProgressApp /> */}
    {/* <ChipInput /> */}
    {/* <Counter /> */}
    {/* <ReverseStrings /> */}
    {/* <Vowels /> */}
    {/* <Tooltip /> */}
    {/* <Guessnumber /> */}
    {/* <ProgressCheck /> */}
    {/* <RouterTest /> */}
    {/* <FindMaxNum /> */}
    {/* <Capitalize /> */}
    {/* <Sum /> */}
    {/* <BlogPosts /> */}
    {/* <ContactForm /> */}
    {/* <Recipe /> */}
    {/* <Accordion items={items} /> */}
    {/* <AgeCalculator /> */}
    <TabForm />
    </div>
  )
}

export default App
