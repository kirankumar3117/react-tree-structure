import { useState } from 'react'
import Tree from './components/Tree';


const companyStructure = {
  name: "Company",
  isFolder: true,
  children: [
    {
      name: "Engineering",
      isFolder: true,
      children: [
        {
          name: "Development",
          isFolder: true,
          children: [
            { 
              name: "Frontend",
              isFolder: true,
              children: [
                { name: "React.js Developer", isFolder: false },
                { name: "Vue.js Developer", isFolder: false }
              ]
            },
            { 
              name: "Backend",
              isFolder: true,
              children: [
                { name: "Node.js Developer", isFolder: false },
                { name: "Python Developer", isFolder: false }
              ]
            }
          ]
        },
        {
          name: "QA",
          isFolder: true,
          children: [
            { name: "Manual Tester", isFolder: false },
            { name: "Automation Tester", isFolder: false }
          ]
        },
        { name: "DevOps Engineer", isFolder: false },
        { name: "Tech Lead", isFolder: false }
      ]
    },
    { name: "HR", isFolder: false },
    { name: "Sales", isFolder: false, image : "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg" }
  ]
};

function App() {

  return (
    <>
      <div>
      <Tree node={companyStructure} />
       </div>
    </>
  )
}

export default App
