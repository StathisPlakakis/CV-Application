import { useState} from 'react'
import EducationDialog from './educationDialog'
import EducationItem from './educationItem'
import '../styles/education.css'


function Education({onSavedActive, onSavedDisactive}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [educationItems, setEducationItems] = useState(() => {
    const savedEducationItems = localStorage.getItem('educationItems');
    return savedEducationItems ? JSON.parse(savedEducationItems) : [];
  });

  const [keyy, setKey] = useState(() => {
    const key = localStorage.getItem('key');
    return key ? Number(key) : 0;
  });


  const handleClickForEducationItemAddition = () => {
    setIsDialogOpen(true);
  }

  const handleClickForCloseEducationItemAddition = () => {
    setIsDialogOpen(false);
  }

  const handleEducationItemAddition = (
    school, degree,
    field, startMonth,
    startYear, endMonth,
    endYear
  ) => {
    const savedData = localStorage.getItem('educationItems');

    let savedEducationItems = [];
    if (savedData) {
      try {
        savedEducationItems = JSON.parse(savedData);
      } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
        savedEducationItems = [];
      }
    }

    const newItem = {
      id: `${keyy}`,
      school: `${school}`,
      degree: `${degree}`,
      field: `${field}`,
      startMonth: `${startMonth}`,
      startYear: `${startYear}`,
      endMonth: `${endMonth}`,
      endYear: `${endYear}`,
    };

    savedEducationItems.push(newItem);
    localStorage.setItem('educationItems', JSON.stringify(savedEducationItems));
    setEducationItems(savedEducationItems);
    const key = Number(localStorage.getItem('key'))
    localStorage.setItem('key', key+1)
    setKey(key + 1);

  }

  const handleEducationItemChange = (id, editedEducationItem) => {

    const savedData = localStorage.getItem('educationItems');
    let savedEducationItems = [];

    if (savedData) {
      try {
        savedEducationItems = JSON.parse(savedData);
      }catch(error) {
        console.error("Error parsing JSON from localStorage:", error);
        savedEducationItems = [];
      }
    }
    const editedEducationItems = savedEducationItems.map(savedEducationItem =>
      savedEducationItem.id === id ? editedEducationItem : savedEducationItem
    )
    localStorage.setItem('educationItems', JSON.stringify(editedEducationItems));
    setEducationItems(editedEducationItems)
  }

  const handleEducationDelete = (id) => {
    const savedData = localStorage.getItem('educationItems');
    let savedEducationItems = [];

    if (savedData) {
      try {
        savedEducationItems = JSON.parse(savedData);
      }catch(error) {
        console.error("Error parsing JSON from localStorage:", error);
        savedEducationItems = [];
      }
    }
    let educationItemsAfterDelete = [];

    for (let i = 0; i < savedEducationItems.length; i++) {
      if(savedEducationItems[i].id !== id){
        educationItemsAfterDelete.push(savedEducationItems[i])
      }
    }
    localStorage.setItem('educationItems', JSON.stringify(educationItemsAfterDelete));
    setEducationItems(educationItemsAfterDelete)
  }

  return (
    <section className="education">
      <div className="educationHead">
        <h2>Education</h2>
      </div>
      <div className='educationItems' style={{border:'none'}}>
        {
          educationItems.map((educationItem) => (
                        <EducationItem 
                          school={educationItem.school}
                          degree={educationItem.degree}
                          field={educationItem.field}
                          startMonth={educationItem.startMonth} 
                          startYear={educationItem.startYear}
                          endMonth={educationItem.endMonth}
                          endYear={educationItem.endYear}
                          key={educationItem.id}
                          id={educationItem.id}
                          onSavedActive={onSavedActive}
                          onSavedDisactive={onSavedDisactive}
                          onEducationItemChange={handleEducationItemChange}
                          onEducationItemDelete={handleEducationDelete}
                        />
        ))}
      </div>
      <div className='addEducationItem'>
        <button onClick={handleClickForEducationItemAddition}></button>
      </div>
      <EducationDialog 
        isForAddition={true}
        isOpen={isDialogOpen}
        onClose={handleClickForCloseEducationItemAddition}
        onEducationItemAddition={handleEducationItemAddition}
        key={keyy}
        onSavedActive={onSavedActive}
        onSavedDisactive={onSavedDisactive}
      /> 
    </section>
  )
}

export default Education;
