import '../styles/experience.css'
import { useState} from 'react'
import ExperienceDialog from './experienceDialog'
import ExperienceItem from './experienceItem'

function Experience({onSavedActive, onSavedDisactive}) {

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [experienceItems, setExperienceItems] = useState(() => {
    const savedExperienceItems = localStorage.getItem('experienceItems');
    return savedExperienceItems ? JSON.parse(savedExperienceItems) : [];
  });

  const [keyy, setKey] = useState(() => {
    const key = localStorage.getItem('key');
    return key ? Number(key) : 0;
  });


  const handleClickForExperienceItemAddition = () => {
    setIsDialogOpen(true);
  }

  const handleClickForCloseExperienceItemAddition = () => {
    setIsDialogOpen(false);
  }

  const handleExperienceItemAddition = (
    title, employmentType,
    companyName, startMonth,
    startYear, endMonth,
    endYear, duration,
    responsibilities
  ) => {
    const savedData = localStorage.getItem('experienceItems');

    let savedExperienceItems = [];
    if (savedData) {
      try {
        savedExperienceItems = JSON.parse(savedData);
      } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
        savedExperienceItems = [];
      }
    }
    
    const newItem = {
      id: `${keyy}`,
      title: `${title}`,
      employmentType: `${employmentType}`,
      companyName: `${companyName}`,
      startMonth: `${startMonth}`,
      startYear: `${startYear}`,
      endMonth: `${endMonth}`,
      endYear: `${endYear}`,
      duration: `${duration}`,
      responsibilities: `${responsibilities}`,
    };

    savedExperienceItems.push(newItem);
    localStorage.setItem('experienceItems', JSON.stringify(savedExperienceItems));
    setExperienceItems(savedExperienceItems);
    const key = Number(localStorage.getItem('key'))
    localStorage.setItem('key', key+1)
    setKey(key + 1);
  }

  const handleExperienceItemChange = (id, editedExperienceItem) => {

    const savedData = localStorage.getItem('experienceItems');
    let savedExperienceItems = [];

    if (savedData) {
      try {
        savedExperienceItems = JSON.parse(savedData);
      }catch(error) {
        console.error("Error parsing JSON from localStorage:", error);
        savedExperienceItems = [];
      }
    }
    const editedExperienceItems = savedExperienceItems.map(savedExperienceItem =>
      savedExperienceItem.id === id ? editedExperienceItem : savedExperienceItem
    )
    localStorage.setItem('experienceItems', JSON.stringify(editedExperienceItems));
    setExperienceItems(editedExperienceItems)
  }

  const handleExperienceItemDelete = (id) => {
    const savedData = localStorage.getItem('experienceItems');
    let savedExperienceItems = [];

    if (savedData) {
      try {
        savedExperienceItems = JSON.parse(savedData);
      }catch(error) {
        console.error("Error parsing JSON from localStorage:", error);
        savedExperienceItems = [];
      }
    }
    let experienceItemsAfterDelete = [];

    for (let i = 0; i < savedExperienceItems.length; i++) {
      if(savedExperienceItems[i].id !== id){
        experienceItemsAfterDelete.push(savedExperienceItems[i])
      }
    }
    localStorage.setItem('experienceItems', JSON.stringify(experienceItemsAfterDelete));
    setExperienceItems(experienceItemsAfterDelete)
  }

  return (
    <section className="experience">
      <div className="experienceHead">
        <h2>Experience</h2>
      </div>
      <div className='experienceItems' style={{border:'none'}}>
        {
          experienceItems.map((experienceItem) => (
                        <ExperienceItem 
                          title={experienceItem.title}
                          employmentType={experienceItem.employmentType}
                          companyName={experienceItem.companyName}
                          startMonth={experienceItem.startMonth} 
                          startYear={experienceItem.startYear}
                          endMonth={experienceItem.endMonth}
                          endYear={experienceItem.endYear}
                          duration={experienceItem.duration}
                          responsibilities={experienceItem.responsibilities}
                          key={experienceItem.id}
                          id={experienceItem.id}
                          onSavedActive={onSavedActive}
                          onSavedDisactive={onSavedDisactive}
                          onExperienceItemChange={handleExperienceItemChange}
                          onExperienceItemDelete={handleExperienceItemDelete}
                        />
        ))}
      </div>
      <div className='addExperienceItem'>
        <button onClick={handleClickForExperienceItemAddition}></button>
      </div>
      <ExperienceDialog 
        isForAddition={true}
        isOpen={isDialogOpen}
        onClose={handleClickForCloseExperienceItemAddition}
        onExperienceItemAddition={handleExperienceItemAddition}
        key={keyy}
        onSavedActive={onSavedActive}
        onSavedDisactive={onSavedDisactive}
      />
    </section>
  )
}

export default Experience